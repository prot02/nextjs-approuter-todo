import { create } from 'zustand';
import { BoardType } from '../schemas';
import { addTask, allUpdateTask, deleteTask, fetchTask, updateTask } from 'src/lib/api/task';
import { toast } from 'react-toastify';

type UseBoardsStoreType = {
	boards: BoardType[];
	isLoading: boolean;
	refetch: () => void;
	addTask: (param: { board_id: string }) => void;
	deleteTask: (param: { task_id: string }) => void;
	updateTask: (param: { task_id: string; title: string }) => void;
	allUpdateTask: (param: { boards: BoardType[] }) => void;
};

export const useBoardStore = create<UseBoardsStoreType>((set) => ({
	boards: [],
	isLoading: false,
	refetch: async () => {
		set({ isLoading: true });
		try {
			const response = await fetchTask();
			set({ boards: response.data.tasks });
		} catch (e) {
			set({ boards: [] });
			toast.error('ボードの取得に失敗');
		} finally {
			set({ isLoading: false });
		}
	},
	addTask: async (param) => {
		try {
			const res = await addTask({ board_id: param.board_id });
			set((state) => {
				const boards = [...state.boards];
				const boardIndex = boards.findIndex((board) => board.id === param.board_id);

				if (boardIndex !== -1) {
					boards[boardIndex] = {
						...boards[boardIndex],
						...{ tasks: res.data.tasks }, // 更新するデータをマージ
					};
					return { ...state, boards: boards };
				}
			});
		} catch {
			toast.error('タスクの登録に失敗しました。');
		}
	},
	deleteTask: async (param) => {
		try {
			const res = await deleteTask({ task_id: param.task_id });
			set((state) => {
				const boards = state.boards.map((board) =>
					board.id === res.data.board_id ? { ...board, tasks: res.data.tasks } : board
				);

				return { ...state, boards: boards };
			});
		} catch {
			toast.error('タスクの登録に失敗しました。');
		}
	},
	updateTask: async (param) => {
		try {
			const res = await updateTask({ task_id: param.task_id, title: param.title });
			set((state) => {
				const boards = [...state.boards];
				const boardIndex = boards.findIndex((board) => board.id === res.data.board_id);
				if (boardIndex !== -1) {
					const taskIndex = boards[boardIndex].tasks.findIndex(
						(task) => task.id === res.data.task_id
					);

					if (taskIndex !== -1) {
						boards[boardIndex].tasks[taskIndex] = {
							...boards[boardIndex].tasks[taskIndex],
							...{ id: res.data.task_id, title: res.data.title }, // 更新するデータをマージ
						};
						return { ...state, boards: boards };
					}
				}
			});
		} catch {
			toast.error('タスクの登録に失敗しました。');
		}
	},
	allUpdateTask: async (param) => {
		try {
			const res = await allUpdateTask({ boards: param.boards });
			set((state) => {
				return { ...state, ...{ boards: res.data.boards } };
			});
		} catch {
			toast.error('タスクの更新に失敗しました。');
		}
	},
}));
