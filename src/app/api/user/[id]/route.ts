import { createClient } from '@/lib/supabase/server';
import { MESSAGE } from '@/constants/api/error';
import { NextResponse } from 'next/server';

// export async function GET(request: Request) {
// 	const requestUrl = new URL(request.url);
// 	const code = requestUrl.searchParams.get('code');

// 	if (code) {
// 		const supabase = createClient();
// 		await supabase.auth.exchangeCodeForSession(code);
// 	}
// 	return NextResponse.redirect(`${requestUrl.origin}${PROTECTED_HOME}`);
// }

export async function POST(request: Request, routeParams: { params: { id: string } }) {
	const params = routeParams.params;
	const userId = params.id;
	const supabase = createClient();

	await supabase.from('users').insert([
		{
			id: userId,
			name: 'test',
		},
	]);
	return NextResponse.json({}, { status: 200 });
}

export async function GET(request: Request, routeParams: { params: { id: string } }) {
	try {
		const params = routeParams.params;
		const userId = params.id;
		const supabase = createClient();

		// await supabase.from('users').insert([
		// 	{
		// 		id: userId,
		// 		name: 'test',
		// 	},
		// ]);
		const resUser = await supabase.from('users').select('*').eq('id', userId).single();
		const user = resUser.data;
		return NextResponse.json({ user: user }, { status: 200 });
	} catch {
		return NextResponse.json({ message: MESSAGE[500]['default'] }, { status: 500 });
	}
}
