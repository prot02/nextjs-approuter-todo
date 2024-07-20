// TODO:使っていないため最後に消す
"use client"
import { useEffect } from 'react';
import { createClient } from 'src/utils/supabase/server';
import { useAuthStore } from '@/stores';

export const useAuthCheck = () => {
	const storeSignin = useAuthStore((state) => state.signin);
	const storeSignout = useAuthStore((state) => state.signout);

	useEffect(() => {
		const {
			data: { subscription },
		} = createClient().auth.onAuthStateChange((event, session) => {
			if (session) {
				storeSignin({
					id: session.user.id,
					name: session.user.user_metadata.name,
					email: session.user.email,
					icon_url: session.user.user_metadata.picture,
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
