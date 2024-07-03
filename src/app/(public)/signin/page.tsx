'use client';

import { useAuth } from '@/hooks';
import {Card} from 'src/components/ui-parts';
import {GoogleLoginButton} from 'src/components/ui-elements';

export default function Signin() {
	const { signin } = useAuth();

	return (
		<div className="w-[600px] mx-auto pt-[120px]">
			<Card>
				<div className="text-3xl font-bold text-center mb-[24px]">Live Todo</div>
				<div>
					<GoogleLoginButton 
						text='Googleでログイン'
						onClick={signin}
						className='mx-auto'
					/>
				</div>
			</Card>
		</div>
	);
}
