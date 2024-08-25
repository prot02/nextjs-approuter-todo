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
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import Task from '../Task';

const BoardList: FCX = ({ className }) => {
	const [tasks, setTasks] = useState([
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

		console.log(active);

		setTasks((tasks) => {
			const nowPos = tasks.findIndex((task) => task.id === active.id);
			const newPos = tasks.findIndex((task) => task.id === over.id);
			return arrayMove(tasks, nowPos, newPos);
		});
	};
	return (
		<DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd} sensors={sensors}>
			<SortableContext items={tasks} strategy={verticalListSortingStrategy}>
				{tasks.map((task) => {
					return <Task key={task.id} id={task.id} title={task.title} />;
				})}
			</SortableContext>
		</DndContext>
	);
};
export default BoardList;
