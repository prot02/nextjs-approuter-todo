import { NextResponse, type NextRequest } from "next/server";
import { PublicHomePage, ProtectedHomePage } from '@/constants/config';
import { updateSession } from '@/utils/supabase/middleware'


export async function middleware(request: NextRequest) {

  // 認証が不要なページ一覧
  const pathname = request.nextUrl.pathname
  const publicRoutes = [
    "/signin",
    "/api/auth/callback"
  ]
  const privateRoutes = [
    "/board",
    "/profile",
  ]

  const {supabase, response} = await updateSession(request)
  const { data: { user }} = await supabase.auth.getUser()


  // 認証済みの状態で認証不要ページに行った場合のリダイレクト
  if(user && publicRoutes.includes(pathname)){
    return NextResponse.redirect(new URL(ProtectedHomePage, request.url));
  }
  
  // 未認証の状態で認証必要ページに行った場合
  if(!user && privateRoutes.includes(pathname)){
    return NextResponse.redirect(new URL(PublicHomePage, request.url));
  }

  return response

}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};