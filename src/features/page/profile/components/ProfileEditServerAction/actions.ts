'use server';
import { createClient } from '@/lib/supabase/server';
import { updateUser } from 'src/lib/api/user';
import { profileEditFormErrorType, profileEditFormValidate } from './schema';

export const updateUserInfo = async (state: profileEditFormErrorType, formData: FormData) => {
	try {
		const supabase = createClient();
		const {
			data: { user },
		} = await supabase.auth.getUser();

		const body = {
			name: formData.get('name'),
		};

		const validateResult = profileEditFormValidate.safeParse(body);

		if (!validateResult.success) {
			const errors = {
				isSuccess: false,
				message: 'バリデーションエラー',
				errors: validateResult.error.flatten().fieldErrors,
			};
			return errors;
		}

		try {
			// 実際はここでDB操作を行うが今回はAPIをたたく
			const { status } = await updateUser({
				user_id: user.id,
				data: body,
			});
			if (status !== 200) throw '';

			return {
				isSuccess: true,
				message: 'データの更新に成功しました。',
				errors: {},
			};
		} catch (e) {
			return {
				isSuccess: false,
				message: e.message,
				errors: {},
			};
		}
	} catch (e) {
		return {
			isSuccess: false,
			message: '予期せぬエラー発生',
			errors: {},
		};
	}
};
