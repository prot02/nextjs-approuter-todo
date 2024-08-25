'use client';
import { FCX } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import classNames from 'classnames';
import { TaskType } from './schema';
import style from './style.module.scss';

const Task: FCX<TaskType> = ({ className, id, title }) => {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
	const dndStyle = {
		transition,
		transform: CSS.Transform.toString(transform),
	};
	return (
		<div
			ref={setNodeRef}
			className={classNames(className, style.task)}
			{...attributes}
			{...listeners}
			style={dndStyle}
		>
			<input className={style.input} type="text" defaultValue={title} />
		</div>
	);
};
export default Task;
