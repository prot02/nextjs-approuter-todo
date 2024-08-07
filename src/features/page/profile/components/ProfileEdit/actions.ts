'use server';
import { createClient } from '@/lib/supabase/server';
import { customFetch } from 'src/lib/customFetch';

export const formAction = async (formData: FormData) => {
	try {
		const supabase = createClient();
		const {
			data: { user },
		} = await supabase.auth.getUser();

		const body = {
			name: formData.get('name'),
		};

		try {
			await customFetch({
				url: `http://localhost:3000/api/user/${user.id}`,
				method: 'PUT',
				body: body,
				cache: 'no-cache',
				// next: { revalidate: false },
			});
			return {
				success: true,
				message: 'データの更新に成功しました。',
			};
		} catch (e) {
			return {
				success: false,
				message: e.message,
			};
		}
	} catch (e) {
		return {
			success: false,
			message: '予期せぬエラー発生',
		};
	}
};
