import { Card, Spinner } from '@/components/ui-parts';
import { ProfileEdit } from '@/features/page/profile';
import { Suspense } from 'react';

export default async function Profile() {
	return (
		<Card className="w-[640px] mx-auto">
			<div className="text-xl font-bold mb-[20px]">プロフィール編集</div>
			<Suspense
				fallback={
					<div className="flex justify-center">
						<Spinner className="w-[24px]" />
					</div>
				}
			>
				{<ProfileEdit />}
			</Suspense>
		</Card>
	);
}
