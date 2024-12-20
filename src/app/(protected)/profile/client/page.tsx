import { Card, Spinner } from '@/components/ui-parts';
import { ProfileEditReactHookForm } from '@/features/page/profile';
import { Suspense } from 'react';

export default function Profile() {
	return (
		<Card className="w-[640px] mx-auto">
			<div className="text-2xl font-bold mb-[20px]">プロフィール編集(react-hook-form版)</div>
			<Suspense
				fallback={
					<div className="flex justify-center">
						<Spinner className="w-[24px]" />
					</div>
				}
			>
				{<ProfileEditReactHookForm />}
			</Suspense>
		</Card>
	);
}
