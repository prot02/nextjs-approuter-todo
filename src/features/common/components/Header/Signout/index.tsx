'use client';
import { FCX } from 'react';
import { useAuth } from '@/hooks';

const Signout: FCX = ({ className }) => {
	const { signout } = useAuth();
	return (
		<div onClick={signout} className={className}>
			ログアウト
		</div>
	);
};
export default Signout;
