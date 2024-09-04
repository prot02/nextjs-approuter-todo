import { customFetch } from 'src/lib/customFetch';
import { AddTaskType, AllPutTaskType, DeleteTaskType, PutTaskType } from './schema';

export const fetchTask = async () => {
	const response = await customFetch({
		url: `${process.env.NEXT_PUBLIC_API_URL}/task/all`,
		method: 'GET',
		cache: 'no-cache',
		// next: { tags: ['fetchUser'] },
	});
	return { data: response.data, status: response.status };
};

export const addTask = async (param: AddTaskType) => {
	const response = await customFetch({
		url: `${process.env.NEXT_PUBLIC_API_URL}/task`,
		method: 'POST',
		cache: 'no-cache',
		body: param,
	});
	return { data: response.data, status: response.status };
};

export const deleteTask = async (param: DeleteTaskType) => {
	const response = await customFetch({
		url: `${process.env.NEXT_PUBLIC_API_URL}/task`,
		method: 'DELETE',
		cache: 'no-cache',
		body: param,
	});
	return { data: response.data, status: response.status };
};

export const updateTask = async (param: PutTaskType) => {
	const response = await customFetch({
		url: `${process.env.NEXT_PUBLIC_API_URL}/task`,
		method: 'PUT',
		cache: 'no-cache',
		body: param,
	});
	return { data: response.data, status: response.status };
};

export const allUpdateTask = async (param: AllPutTaskType) => {
	const response = await customFetch({
		url: `${process.env.NEXT_PUBLIC_API_URL}/task/all`,
		method: 'PUT',
		cache: 'no-cache',
		body: param,
	});
	return { data: response.data, status: response.status };
};
