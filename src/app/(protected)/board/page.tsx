'use client';
import { useAuth } from '@/hooks';
import Button from '@/components/ui-parts/Button';

export default function Bord() {
	const { signout } = useAuth();
	return (
		<div>
			aaa
			<div>
				<button onClick={signout}>ログアウト</button>
				<Button />
			</div>
		</div>
	);
}
