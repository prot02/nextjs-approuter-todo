import { createClient } from '@/lib/supabase/server';
import { MESSAGE } from '@/constants/api/error';
import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
	try {
		const body = await request.json();
		const taskId = body.task_id;
		const title = body.title;
		const supabase = createClient();

		const { error } = await supabase.from('tasks').update({ title: title }).eq('id', taskId);
		if (error) return NextResponse.json({ message: MESSAGE[500]['default'] }, { status: 500 });

		const { data: fetchData, error: fetchError } = await supabase
			.from('tasks')
			.select('board_id, id, title')
			.eq('id', taskId)
			.single();
		if (fetchError) return NextResponse.json({ message: MESSAGE[500]['default'] }, { status: 500 });

		return NextResponse.json(
			{ board_id: fetchData?.board_id, task_id: fetchData?.id, title: fetchData?.title },
			{ status: 200 }
		);
	} catch {
		return NextResponse.json({ message: MESSAGE[500]['default'] }, { status: 500 });
	}
}

export async function DELETE(request: Request) {
	try {
		const body = await request.json();
		const taskId = body.task_id;
		const supabase = createClient();

		const { data: fetchData, error: fetchError } = await supabase
			.from('tasks')
			.select('board_id')
			.eq('id', taskId)
			.single();
		if (fetchError) return NextResponse.json({ message: MESSAGE[500]['default'] }, { status: 500 });

		const { error } = await supabase.from('tasks').delete().eq('id', taskId);
		if (error) return NextResponse.json({ message: MESSAGE[500]['default'] }, { status: 500 });

		const { data: tasksData, error: tasksError } = await supabase
			.from('tasks')
			.select('id, title')
			.eq('board_id', fetchData?.board_id);
		if (tasksError) return NextResponse.json({ message: MESSAGE[500]['default'] }, { status: 500 });

		return NextResponse.json({ board_id: fetchData?.board_id, tasks: tasksData }, { status: 200 });
	} catch {
		return NextResponse.json({ message: MESSAGE[500]['default'] }, { status: 500 });
	}
}

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const boardId = body.board_id;
		const supabase = createClient();

		const { error } = await supabase.from('tasks').insert([{ board_id: boardId, title: null }]);
		if (error) return NextResponse.json({ message: MESSAGE[500]['default'] }, { status: 500 });

		const tasks = await supabase
			.from('tasks')
			.select('id, title')
			.eq('board_id', boardId)
			.order('sort', { ascending: true })
			.order('created_at', { ascending: true });

		return NextResponse.json({ tasks: tasks.data }, { status: 200 });
	} catch {
		return NextResponse.json({ message: MESSAGE[500]['default'] }, { status: 500 });
	}
}
