'use client';
import { FCX } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import classNames from 'classnames';
import { TaskItemType } from '@/features/page/board/schemas';
import style from './style.module.scss';
import { useBoardStore } from '../../stores/boardStore';
import _ from 'lodash';

const TaskItem: FCX<TaskItemType> = ({ className, id, title }) => {
	const boardStoreDeleteTask = useBoardStore((state) => state.deleteTask);
	const boardStoreUpdateTask = useBoardStore((state) => state.updateTask);

	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
	const dndStyle = {
		transition: transition,
		transform: CSS.Transform.toString(transform),
	};

	const handleDeleteTask = () => {
		boardStoreDeleteTask({ task_id: id });
	};

	// deboundeのたびに関数が再生成されるらしいのでuseCallbackでメモ化しておく
	const handleUpdateTask = _.debounce((value) => {
		// 処理をここで実行
		boardStoreUpdateTask({ task_id: id, title: value });
	}, 500);

	return (
		<li
			ref={setNodeRef}
			className={classNames(className, style.task)}
			{...attributes}
			{...listeners}
			style={dndStyle}
		>
			<input
				className={style.input}
				type="text"
				defaultValue={title}
				onChange={(event) => {
					const value = event.target.value;
					handleUpdateTask(value);
				}}
			/>
			<div className={style.close_wrap} onClick={handleDeleteTask}>
				<div className={style.close}></div>
			</div>
		</li>
	);
};
export default TaskItem;
