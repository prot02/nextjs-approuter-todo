import { TaskItemType } from '@/features/page/board/schemas';

export type TaskListType = {
	id: number;
	title: string;
	tasks: TaskItemType[];
};
