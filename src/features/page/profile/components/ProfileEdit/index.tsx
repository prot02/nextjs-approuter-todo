import { FCX } from 'react';
import { Input, Button, Label } from '@/components/ui-parts';
import { formAction } from './actions';

const ProfileEdit: FCX = ({ className }) => {
	// zustandで表示状態のステートを持つ。

	return (
		<div className={className}>
			<form action={formAction}>
				<div className="mb-[24px]">
					<Label text="メールアドレス" />
					<div>sample.gmail.com</div>
				</div>
				<div>
					<Label text="ユーザー名" />
					<Input name="test" className="mb-[12px]" />
				</div>

				<Button
					Element="button"
					buttonType="submit"
					className="mr-0 ml-auto min-w-[80px]"
					text="更新"
				/>
			</form>
		</div>
	);
};
export default ProfileEdit;
