import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { PROTECTED_HOME } from 'src/constants/config';

export async function GET(request: Request) {
	const requestUrl = new URL(request.url);
	const code = requestUrl.searchParams.get('code');

	if (code) {
		const supabase = createClient();
		await supabase.auth.exchangeCodeForSession(code);
		const sessionUser = await supabase.auth.getUser();

		const userId = sessionUser.data.user.id;
		const userName = sessionUser.data.user.user_metadata.name;
		const email = sessionUser.data.user.email;
		const icon_url = sessionUser.data.user.user_metadata.picture;

		const { error } = await supabase.from('users').select('*').eq('id', userId).single();
		// レコードが存在しない場合追加
		if (error && error.code === 'PGRST116') {
			await supabase.from('users').insert([
				{
					id: userId,
					name: userName,
					email: email,
					icon_url: icon_url,
				},
			]);
		}
	}

	return NextResponse.redirect(`${requestUrl.origin}${PROTECTED_HOME}`);
}
