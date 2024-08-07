'use client';
import { FCX } from 'react';
import { useAuthStore } from '@/stores';
import { Input, Label, CustomImaga } from '@/components/ui-parts';
import { Button } from '@/components/ui-elements';
import { formAction } from './actions';
import { toast } from 'react-toastify';
import { useButtonDisabled } from '@/hooks';

const ProfileEdit: FCX = ({ className }) => {
	const auth = useAuthStore((state) => state.auth);
	const { buttonDisabled, buttonEnabled, isButtonDisabled } = useButtonDisabled();
	// データの取得を行う
	// router.refreshをしたうえでデータの再取得を行う
	// 取得自体はhooksで行う？
	return (
		<div className={className}>
			<form
				action={async (FormData) => {
					if (isButtonDisabled('submit')) return;
					buttonDisabled('submit');
					const res = await formAction(FormData);
					res.success ? toast.success(res.message) : toast.error(res.message);
					buttonEnabled('submit');
				}}
			>
				<div className="flex gap-x-[24px] mb-[36px]">
					<CustomImaga
						className="w-[60px] h-[60px] rounded-[9999px] overflow-hidden"
						src={auth?.icon_url}
					/>

					<div className="grow">
						<div className="mb-[24px]">
							<Label text="メールアドレス" />
							<div>{auth.email}</div>
						</div>
						<div>
							<Label text="ユーザー名" />
							<Input name="name" defaultValue={auth.name} />
						</div>
					</div>
				</div>

				<Button
					Element="button"
					disabled={isButtonDisabled('submit')}
					buttonType="submit"
					className="mx-auto w-[120px]"
					text="更新"
				/>
			</form>
		</div>
	);
};
export default ProfileEdit;
