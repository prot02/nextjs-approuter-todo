'use client';
import { FCX } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import classNames from 'classnames';
import { TaskItemType } from '@/features/page/board/schemas';
import style from './style.module.scss';

const TaskItem: FCX<TaskItemType> = ({ className, id, title }) => {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
	const dndStyle = {
		transition: transition,
		transform: CSS.Transform.toString(transform),
	};
	return (
		<li
			ref={setNodeRef}
			className={classNames(className, style.task)}
			{...attributes}
			{...listeners}
			style={dndStyle}
		>
			<input className={style.input} type="text" defaultValue={title} />
		</li>
	);
};
export default TaskItem;
