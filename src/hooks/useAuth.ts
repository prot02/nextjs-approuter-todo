import { useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { PublicHomePage } from 'src/constants/config';

export const useAuth = () => {
	const router = useRouter();

	const signin = useCallback(async () => {
		const supabase = createClient();
		try {
			const { error } = await supabase.auth.signInWithOAuth({
				provider: 'google',
				options: {
					redirectTo: `${window.location.origin}/api/auth/google/callback`,
					queryParams: {
						prompt: 'select_account',
					},
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
			const supabase = createClient();
			await supabase.auth.signOut();
			await router.push(`${window.location.origin}${PublicHomePage}`);
		} catch {
			console.log('ログアウトエラー');
		}
	}, [router]);

	return { signin, signout };
};
