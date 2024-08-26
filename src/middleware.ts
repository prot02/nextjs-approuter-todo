import { NextResponse, type NextRequest } from 'next/server';
import { PUBLIC_HOME, PROTECTED_HOME } from '@/constants/config';
import { updateSession } from '@/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	// 認証が不要なページ一覧
	const publicRoutes = ['/signin', '/api/auth/callback'];
	// 認証が必要なページ
	const privateRoutes = ['/board', '/profile/server-action', '/profile/client'];

	// ルートにアクセスされた場合はログインページへ遷移
	if (pathname === '/') return NextResponse.redirect(new URL(PROTECTED_HOME, request.url));

	const { supabase, response } = await updateSession(request);
	const {
		data: { user },
	} = await supabase.auth.getUser();

	// 認証済みの状態で認証不要ページに行った場合のリダイレクト
	if (user && publicRoutes.includes(pathname)) {
		return NextResponse.redirect(new URL(PROTECTED_HOME, request.url));
	}

	// 未認証の状態で認証必要ページに行った場合
	if (!user && privateRoutes.includes(pathname)) {
		return NextResponse.redirect(new URL(PUBLIC_HOME, request.url));
	}

	return response;
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
