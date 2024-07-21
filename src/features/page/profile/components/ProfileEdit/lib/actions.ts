'use server';

export const formAction = async (formData: FormData) => {
	try {
		const test = formData.get('test');
		console.log(test);
	} catch (e) {}
};
