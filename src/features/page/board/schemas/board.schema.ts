import { TaskItemType } from '@/features/page/board/schemas';

export type BoardType = {
	id: string;
	title: string;
	tasks: TaskItemType[];
};
