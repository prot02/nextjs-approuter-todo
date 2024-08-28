'use client';
import { FCX, useEffect, useState } from 'react';
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
import { useAuthStore } from 'src/stores';
import { fetchTask } from 'src/lib/api/task';
import { useSuspenseQuery } from '@tanstack/react-query';

const BoardList: FCX = ({ className }) => {
	const auth = useAuthStore((state) => state.auth);

	const { data: boardsData } = useSuspenseQuery({
		queryKey: [],
		queryFn: () => {
			return !!auth?.id ? fetchTask({ user_id: auth.id }) : null;
		},
		select: (data) => data.data.tasks.data,
	});
	const [boards, setBoards] = useState<BoardType[]>();

	useEffect(() => {
		setBoards(boardsData);
	}, [boardsData]);

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

		setBoards((boards) => {
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

		setBoards((boards) => {
			const nowBoardIdx = boards.findIndex((board) => String(board.id) === String(nowBoardId));
			const newBoardIdx = boards.findIndex((board) => String(board.id) === String(newBoardId));

			const nowBoardTasks = boards[nowBoardIdx]?.tasks;
			const newBoardTasks = boards[newBoardIdx]?.tasks;
			const nowTaskIndex = nowBoardTasks?.findIndex((task) => task.id === active.id);

			return boards.map((board) => {
				if (board.id === boards[nowBoardIdx].id) {
					// ドラッグ中のアイテムを元のカラムから削除
					board.tasks = nowBoardTasks.filter((task) => task.id !== active.id);
					return board;
				} else if (board.id === boards[newBoardIdx]?.id) {
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
				{boards?.map((board) => {
					return <Board key={board.id} title={board.title} tasks={board.tasks} id={board.id} />;
				})}
			</div>
		</DndContext>
	);
};
export default BoardList;
