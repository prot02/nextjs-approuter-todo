import { customFetch } from 'src/lib/customFetch';
import { FetchUserType, UpdateUserType } from './schema';

export const fetchUser = async ({ user_id }: FetchUserType) => {
	const response = await customFetch({
		url: `${process.env.NEXT_PUBLIC_API_URL}/user/${user_id}`,
		method: 'GET',
		cache: 'no-cache',
		next: { tags: ['fetchUser'] },
	});
	return { data: response.data, status: response.status };
};

export const updateUser = async ({ user_id, data }: UpdateUserType) => {
	const response = await customFetch({
		url: `${process.env.NEXT_PUBLIC_API_URL}/user/${user_id}`,
		method: 'PUT',
		body: data,
		cache: 'no-cache',
		next: { tags: ['updateUser'] },
	});
	return { data: response.data, status: response.status };
};
