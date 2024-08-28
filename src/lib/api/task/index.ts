import { customFetch } from 'src/lib/customFetch';
import { FetchTaskType } from './schema';

export const fetchTask = async ({ user_id }: FetchTaskType) => {
	const response = await customFetch({
		url: `${process.env.NEXT_PUBLIC_API_URL}/task/${user_id}`,
		method: 'GET',
		cache: 'no-cache',
		next: { tags: ['fetchUser'] },
	});
	return { data: response.data, status: response.status };
};
