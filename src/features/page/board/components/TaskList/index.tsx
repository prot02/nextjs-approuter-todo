'use client';
import { FCX } from 'react';
// import { useSortable } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';
import classNames from 'classnames';
import { TaskListType } from '@/features/page/board/schemas';
import style from './style.module.scss';
import { TaskItem } from '@/features/page/board';

const TaskList: FCX<TaskListType> = ({ className, title, tasks }) => {
	return (
		<div className={classNames(className, style.task_list)}>
			<input className={style.input} type="text" defaultValue={title} />
			<ul className={style.list_wrap}>
				{tasks.map((task) => {
					return <TaskItem key={task.id} id={task.id} title={task.title} />;
				})}
			</ul>
		</div>
	);
};
export default TaskList;
