// 'use client';
// import { useAuthStore } from '@/stores';
// import { useAuthCheck, useProtectedRedirect } from '@/hooks';
// import { Spinner } from '@/components/ui-parts';
import { Header } from '@/features/common';
// import { createClient } from '@/utils/supabase/server';
// import { useAuthStore } from 'src/stores';

export default async function ProtectedLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	// useAuthCheck();
	// useProtectedRedirect();
	// const isLoading = useAuthStore((state) => state.isLoading());

	// const storeSignin = useAuthStore((state) => state.signin);
	// const supabase = createClient();
	// const {
	// 	data: { session },
	// } = await supabase.auth.getSession();
	// storeSignin({
	// 	id: session.user.id,
	// 	name: session.user.user_metadata.name,
	// 	email: session.user.email,
	// 	icon_url: session.user.user_metadata.picture,
	// });

	return (
		<div>
			<Header />
			<div className="p-[20px]">{children}</div>
		</div>
	);
}
