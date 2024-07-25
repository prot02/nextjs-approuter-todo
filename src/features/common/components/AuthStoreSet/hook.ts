import { useAuthStore } from '@/stores';
import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useAuth } from '@/hooks';

export const useAuthSet = () => {
	const storeSetAuth = useAuthStore((state) => state.setAuth);
	const { signout } = useAuth();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		async function setGlobalUser() {
			const supabase = createClient();
			const {
				data: { session },
			} = await supabase.auth.getSession();

			const res = await fetch(`http://localhost:3000/api/user/${session.user.id}`, {
				cache: 'no-cache',
				// next: { revalidate: 3600 },
				method: 'GET',
			});

			const { user } = await res.json();
			if (!user) signout();

			storeSetAuth({
				id: user.id,
				name: user.name,
				email: user.email,
				icon_url: user.icon_url,
			});
		}

		setGlobalUser();
	}, [storeSetAuth, signout, pathname, searchParams]);
};
