import { createClient } from '@/lib/supabase/server';
import { MESSAGE } from '@/constants/api/error';
import { NextResponse } from 'next/server';
import { BoardType } from 'src/features/page/board/schemas';

export async function GET() {
	try {
		const supabase = createClient();
		const sessionUser = await supabase.auth.getUser();
		const userId = sessionUser.data.user.id;

		const tasks = await supabase
			.from('boards')
			.select('id, title, tasks(id, title)')
			.eq('user_id', userId)
			.order('sort', { referencedTable: 'tasks', ascending: true })
			.order('created_at', { referencedTable: 'tasks', ascending: true });

		// const user = resUser.data;
		return NextResponse.json({ tasks: tasks.data }, { status: 200 });
	} catch {
		return NextResponse.json({ message: MESSAGE[500]['default'] }, { status: 500 });
	}
}

export async function PUT(request: Request) {
	try {
		const body = await request.json();
		const boards = body.boards as BoardType[];
		const supabase = createClient();
		const sessionUser = await supabase.auth.getUser();
		const userId = sessionUser.data.user.id;

		// mapが２重のため[[res,res,res],[res,res,res]]という形式で返却されるのをflatMapでflatにして一次元へ展開
		const updates = boards?.flatMap((board) => {
			let sortNum = 0;
			return board?.tasks?.map((task) => {
				sortNum++;
				return supabase
					.from('tasks')
					.update({ board_id: board.id, sort: sortNum }) // ここで更新したいフィールドを指定
					.eq('id', task.id); // idが一致するタスクに対してのみ更新
			});
		});

		const results = await Promise.all(updates);
		if (results.some((result) => result?.error)) {
			return NextResponse.json({ message: MESSAGE[500]['default'] }, { status: 500 });
		}

		const { data, error } = await supabase
			.from('boards')
			.select('id, title, tasks(id, title)')
			.eq('user_id', userId)
			.order('sort', { referencedTable: 'tasks', ascending: true })
			.order('created_at', { referencedTable: 'tasks', ascending: true });

		if (error) return NextResponse.json({ message: MESSAGE[500]['default'] }, { status: 500 });

		return NextResponse.json({ boards: data }, { status: 200 });
	} catch {
		return NextResponse.json({ message: MESSAGE[500]['default'] }, { status: 500 });
	}
}
