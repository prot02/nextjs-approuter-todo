import { useAuthStore } from '@/stores';
import { useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { usePathname, useSearchParams } from 'next/navigation';

export const useAuthSet = () => {
	const storeSetAuth = useAuthStore((state) => state.setAuth);
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		async function setGlobalUser() {
			const supabase = createClient();
			const {
				data: { session },
			} = await supabase.auth.getSession();

			// sessionを渡してユーザー情報の取得を待つ関数を作成？
			storeSetAuth({
				id: session?.user?.id,
				name: session?.user.user_metadata.name,
				email: session.user.email,
				icon_url: session.user.user_metadata.picture,
			});
		}

		setGlobalUser();
	}, [storeSetAuth, pathname, searchParams]);
};
