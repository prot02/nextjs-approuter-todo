'use client';
import { FCX } from 'react';
import { rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';
import classNames from 'classnames';
import { BoardType } from '@/features/page/board/schemas';
import style from './style.module.scss';
import { TaskItem } from '@/features/page/board';
import { useDroppable } from '@dnd-kit/core';
// import { addTask } from 'src/lib/api/task';
// import { toast } from 'react-toastify';
import { useBoardStore } from '@/features/page/board/stores/boardStore';

const Board: FCX<BoardType> = ({ className, title, tasks, id }) => {
	const { setNodeRef } = useDroppable({ id: id });
	const boardStoreAddTask = useBoardStore((state) => state.addTask);

	const handleAddTag = () => {
		boardStoreAddTask({ board_id: id });
	};

	return (
		<div className={classNames(className, style.task_list)}>
			<input className={style.input} type="text" defaultValue={title} />
			<SortableContext id={id} items={tasks} strategy={rectSortingStrategy}>
				<ul ref={setNodeRef} className={style.list_wrap}>
					{tasks?.length > 0 &&
						tasks?.map((task) => {
							return <TaskItem key={task.id} id={task.id} title={task.title} />;
						})}
				</ul>
				<div className={style.task_add} onClick={handleAddTag}>
					タスク追加
				</div>
			</SortableContext>
		</div>
	);
};
export default Board;
