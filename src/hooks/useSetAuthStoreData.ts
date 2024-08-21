import { createClient } from '@/lib/supabase/client';
import { useAuthStore } from '@/stores';
import { fetchUser } from '@/lib/api/user';
import { useAuth } from '@/hooks';
import { useCallback } from 'react';

export const useSetAuthStoreData = () => {
	const storeSetAuth = useAuthStore((state) => state.setAuth);
	const { signout } = useAuth();

	const setAuthStoreData = useCallback(async () => {
		const supabase = createClient();
		const {
			data: { session },
		} = await supabase.auth.getSession();

		const { data, status } = await fetchUser({ user_id: session.user.id });
		if (!data?.user || status !== 200) signout();

		storeSetAuth({
			id: data.user.id,
			name: data.user.name,
			email: data.user.email,
			icon_url: data.user.icon_url,
		});
	}, [signout, storeSetAuth]);

	return { setAuthStoreData };
};
