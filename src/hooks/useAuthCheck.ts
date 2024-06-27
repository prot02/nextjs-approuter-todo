import { useEffect } from 'react';
import { supabase } from 'src/utils/supabase';
import { useAuthStore } from '@/stores';

export const useAuthCheck = () => {
	const storeSignin = useAuthStore((state) => state.signin);
	const storeSignout = useAuthStore((state) => state.signout);

	useEffect(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((event, session) => {
			if (session) {
				storeSignin({
					id: session.user.id,
					name: session.user.user_metadata.name,
					email: session.user.email,
				});
			} else {
				storeSignout();
			}
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [storeSignin, storeSignout]);
};
