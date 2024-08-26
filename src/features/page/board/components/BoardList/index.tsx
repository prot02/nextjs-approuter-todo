'use client';
import { FCX, useState } from 'react';
import {
	DndContext,
	DragEndEvent,
	KeyboardSensor,
	MouseSensor,
	TouchSensor,
	closestCorners,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {
	// arrayMove,
	// SortableContext,
	sortableKeyboardCoordinates,
	// verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { TaskList } from '@/features/page/board';
import { TaskListType } from '@/features/page/board/schemas';
import classNames from 'classnames';

const BoardList: FCX = ({ className }) => {
	const [tasks] = useState<TaskListType[]>([
		{
			id: 1,
			title: 'proccess',
			tasks: [
				{
					id: 1,
					title: 'aaaa',
				},
				{
					id: 2,
					title: 'bbb',
				},
				{
					id: 3,
					title: 'ccc',
				},
			],
		},
		{
			id: 2,
			title: 'done',
			tasks: [
				{
					id: 4,
					title: 'ddd',
				},
				{
					id: 5,
					title: 'eee',
				},
				{
					id: 6,
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
		if (active.id === over.id) return;

		// setTasks((tasks) => {
		// 	const nowPos = tasks.findIndex((task) => task.id === active.id);
		// 	const newPos = tasks.findIndex((task) => task.id === over.id);
		// 	return arrayMove(tasks, nowPos, newPos);
		// });
	};
	return (
		<DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd} sensors={sensors}>
			<div className={classNames('flex gap-[48px]', className)}>
				{tasks.map((taskList) => {
					return (
						<TaskList
							key={taskList.id}
							title={taskList.title}
							tasks={taskList.tasks}
							id={taskList.id}
						/>
					);
				})}
			</div>
			{/* <SortableContext items={tasks} strategy={verticalListSortingStrategy}> */}
			{/* {tasks.map((task) => {
					return <TaskItem key={task.id} id={task.id} title={task.title} />;
				})} */}
			{/* </SortableContext> */}
		</DndContext>
	);
};
export default BoardList;
