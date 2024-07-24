'use server';
import { createClient } from '@/lib/supabase/server';

export const formAction = async () => {
	// export const formAction = async (formData: FormData) => {
	try {
		// const test = formData.get('test');
		// console.log(test);
		// const res = fetch('http://localhost:3000/api/user', {
		// 	cache: 'force-cache',
		// 	next: { revalidate: false },
		// 	method: 'GET',
		// });
		// console.log((await res).json());

		const supabase = createClient();
		const {
			data: { user },
		} = await supabase.auth.getUser();

		const res = await fetch(`http://localhost:3000/api/user/${user.id}`, {
			cache: 'no-cache',
			// next: { revalidate: false },
			method: 'GET',
		});
		console.log(await res.json());
		// const test = await res.json();
	} catch (e) {}
};
