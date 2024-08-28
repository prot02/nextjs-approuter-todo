'use client';
import { FCX, useState } from 'react';
import {
	DndContext,
	DragEndEvent,
	DragOverEvent,
	KeyboardSensor,
	MouseSensor,
	TouchSensor,
	closestCorners,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {
	arrayMove,
	// SortableContext,
	sortableKeyboardCoordinates,
	// verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Board } from '@/features/page/board';
import { BoardType } from '@/features/page/board/schemas';
import classNames from 'classnames';

const BoardList: FCX = ({ className }) => {
	const [bords, setBords] = useState<BoardType[]>([
		{
			id: 'board1',
			title: '未着手',
			tasks: [
				{
					id: 'task1',
					title: 'aaaa',
				},
				{
					id: 'task2',
					title: 'bbb',
				},
				{
					id: 'task3',
					title: 'ccc',
				},
			],
		},
		{
			id: 'board2',
			title: '作業中',
			tasks: [
				{
					id: 'task4',
					title: 'aaaa',
				},
				{
					id: 'task5',
					title: 'bbb',
				},
				{
					id: 'task6',
					title: 'ccc',
				},
			],
		},
		{
			id: 'board3',
			title: '完了',
			tasks: [
				{
					id: 'task7',
					title: 'ddd',
				},
				{
					id: 'task8',
					title: 'eee',
				},
				{
					id: 'task9',
					title: 'fff',
				},
			],
		},
	]);

	const sensors = useSensors(
		useSensor(MouseSensor, {
			activationConstraint: {
				distance: 8,
			},
		}),
		useSensor(TouchSensor, {
			activationConstraint: {
				delay: 200,
				tolerance: 6,
			},
		}),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		// taskがあるときはtaskの、無いときはboardのidを返すためここで調整している
		const nowBoardId = active?.data?.current
			? active?.data?.current.sortable?.containerId
			: active.id;
		const newBoardId = over?.data?.current ? over?.data?.current.sortable?.containerId : over.id;

		if (!nowBoardId || !newBoardId || nowBoardId !== newBoardId) {
			return;
		}

		setBords((boards) => {
			const boardIdx = boards.findIndex((board) => String(board.id) === String(nowBoardId));
			const nowPos = boards[boardIdx].tasks.findIndex((task) => task.id === active.id);
			const newPos = boards[boardIdx].tasks.findIndex((task) => task.id === over.id);

			const newBoards = [...boards];
			newBoards[boardIdx] = {
				...newBoards[boardIdx],
				tasks: arrayMove([...newBoards[boardIdx].tasks], nowPos, newPos),
			};

			return newBoards;
		});
	};

	const handleDragOver = (event: DragOverEvent) => {
		const { active, over } = event;

		if (!active || !over) return;
		const nowBoardId = active?.data?.current
			? active?.data?.current.sortable?.containerId
			: active.id;
		const newBoardId = over?.data?.current ? over?.data?.current.sortable?.containerId : over.id;

		if (!nowBoardId || !newBoardId || nowBoardId === newBoardId) return;

		setBords((boards) => {
			const nowBoardIdx = boards.findIndex((board) => String(board.id) === String(nowBoardId));
			const newBoardIdx = boards.findIndex((board) => String(board.id) === String(newBoardId));

			const nowBoardTasks = boards[nowBoardIdx]?.tasks;
			const newBoardTasks = boards[newBoardIdx]?.tasks;
			const nowTaskIndex = nowBoardTasks?.findIndex((task) => task.id === active.id);

			const boards2 = boards;
			return boards2.map((board) => {
				if (board.id === boards2[nowBoardIdx].id) {
					// ドラッグ中のアイテムを元のカラムから削除
					board.tasks = nowBoardTasks.filter((task) => task.id !== active.id);
					return board;
				} else if (board.id === boards2[newBoardIdx]?.id) {
					if (nowTaskIndex === -1) return board;
					board.tasks = [...newBoardTasks, nowBoardTasks[nowTaskIndex]];
					return board;
				} else {
					// その他のカラムはそのまま返す
					return board;
				}
			});
		});
	};
	return (
		<DndContext
			collisionDetection={closestCorners}
			onDragEnd={handleDragEnd}
			onDragOver={handleDragOver}
			sensors={sensors}
		>
			<div className={classNames('flex gap-[48px] items-start', className)}>
				{bords.map((bord) => {
					return <Board key={bord.id} title={bord.title} tasks={bord.tasks} id={bord.id} />;
				})}
			</div>
		</DndContext>
	);
};
export default BoardList;
