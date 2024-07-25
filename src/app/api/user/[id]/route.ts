import { createClient } from '@/lib/supabase/server';
import { MESSAGE } from '@/constants/api/error';
import { NextResponse } from 'next/server';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
	try {
		const body = await request.json();
		const userId = params.id;
		const supabase = createClient();

		const { error } = await supabase
			.from('users')
			.update([{ name: body.name }])
			.eq('id', userId);
		if (error) return NextResponse.json({ message: MESSAGE[500]['default'] }, { status: 500 });

		return NextResponse.json({}, { status: 200 });
	} catch {
		return NextResponse.json({ message: MESSAGE[500]['default'] }, { status: 500 });
	}
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
	try {
		const userId = params.id;
		const supabase = createClient();

		const resUser = await supabase.from('users').select('*').eq('id', userId).single();
		const user = resUser.data;
		return NextResponse.json({ user: user }, { status: 200 });
	} catch {
		return NextResponse.json({ message: MESSAGE[500]['default'] }, { status: 500 });
	}
}
