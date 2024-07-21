import { Card } from '@/components/ui-parts';
import { ProfileEdit } from '@/features/page/profile';

export default function Profile() {
	return (
		<Card className="w-[640px] mx-auto">
			<div className="text-xl font-bold mb-[20px]">プロフィール編集</div>
			<ProfileEdit />
		</Card>
	);
}
