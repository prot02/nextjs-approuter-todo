import { useCallback } from 'react';
import { supabase } from 'src/utils/supabase';

export const useAuth = () => {
	const signin = useCallback(async () => {
		try {
			const { error } = await supabase.auth.signInWithOAuth({
				provider: 'google',
				options: {
					redirectTo: `${window.location.origin}/signin`,
					// redirectTo:null
				},
			});
			if (error) throw Error;
		} catch {
			console.log('ログインエラー');
			await supabase.auth.signOut();
		}
	}, []);

	const signout = useCallback(async () => {
		try {
			await supabase.auth.signOut();
		} catch {
			console.log('ログアウトエラー');
		}
	}, []);

	return { signin, signout };
};
