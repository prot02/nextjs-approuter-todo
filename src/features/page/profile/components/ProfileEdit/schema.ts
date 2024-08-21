import { z } from 'zod';

export type ProfileType = {
	id: string;
	email: string;
	icon_url: string;
	name: string;
};

export type profileEditFormErrorType = {
	isSuccess: boolean;
	message: string;
	errors?: {
		name: string[];
	};
};

export const profileEditFormValidate = z.object({
	name: z.string().min(1, { message: '名前は必須です' }),
});
