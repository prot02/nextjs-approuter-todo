import { z } from 'zod';

export type ProfileType = {
	id: string;
	email: string;
	icon_url: string;
	name: string;
};

export type profileEditFormType = {
	name: string;
};

export const profileEditFormValidate = z.object({
	name: z
		.string()
		.min(1, { message: '必須項目です' })
		.min(3, { message: '3文字以上で入力してください' }),
});
