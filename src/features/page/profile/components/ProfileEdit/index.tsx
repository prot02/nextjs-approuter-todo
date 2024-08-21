'use client';
import { FCX } from 'react';
import { Input, Label, CustomImaga } from '@/components/ui-parts';
import { Button } from '@/components/ui-elements';
import { useProfileEdit } from './hook';

const ProfileEdit: FCX = ({ className }) => {
	const { profile, formAction, isSubmitDisable, formState } = useProfileEdit();

	return (
		<div className={className}>
			{JSON.stringify(formState)}
			<form action={formAction}>
				<div className="flex gap-x-[24px] mb-[36px]">
					<CustomImaga
						className="w-[60px] h-[60px] rounded-[9999px] overflow-hidden"
						src={profile.icon_url}
					/>

					<div className="grow">
						<div className="mb-[24px]">
							<Label text="メールアドレス" />
							<div>{profile.email}</div>
						</div>
						<div>
							<Label text="ユーザー名" />
							<Input name="name" defaultValue={profile.name} />
						</div>
					</div>
				</div>
				<Button
					Element="button"
					disabled={isSubmitDisable}
					buttonType="submit"
					className="mx-auto w-[120px]"
					text="更新"
				/>
			</form>
		</div>
	);
};
export default ProfileEdit;
