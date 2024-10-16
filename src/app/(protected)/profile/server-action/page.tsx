import { Card, Spinner } from '@/components/ui-parts';
import { ProfileEditServerAction } from '@/features/page/profile';
import { Suspense } from 'react';

export default function Profile() {
	return (
		<Card className="w-[640px] mx-auto">
			<div className="text-2xl font-bold mb-[20px]">プロフィール編集(server action版)</div>
			<Suspense
				fallback={
					<div className="flex justify-center">
						<Spinner className="w-[24px]" />
					</div>
				}
			>
				{<ProfileEditServerAction />}
			</Suspense>
		</Card>
	);
}
