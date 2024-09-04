import { BoardType } from 'src/features/page/board/schemas';

export type AddTaskType = {
	board_id: string;
};

export type DeleteTaskType = {
	task_id: string;
};

export type PutTaskType = {
	task_id: string;
	title: string;
};

export type AllPutTaskType = {
	boards: BoardType[];
};
