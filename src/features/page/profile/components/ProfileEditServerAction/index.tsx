'use client';
import { FCX } from 'react';
import { Input, FormLabel, FormError, CustomImaga } from '@/components/ui-parts';
import { Button } from '@/components/ui-elements';
import { useProfileEdit } from './hook';

const ProfileEditReactHookForm: FCX = ({ className }) => {
	const { profile, formAction, isSubmitDisable, formState } = useProfileEdit();

	return (
		<div className={className}>
			<form action={formAction}>
				<div className="flex gap-x-[24px] mb-[36px]">
					<CustomImaga
						className="w-[60px] h-[60px] rounded-[9999px] overflow-hidden"
						src={profile.icon_url}
					/>

					<div className="grow">
						<div className="mb-[24px]">
							<FormLabel text="メールアドレス" />
							<div>{profile.email}</div>
						</div>
						<div>
							<FormLabel text="ユーザー名" />
							{formState?.errors?.name?.length > 0 &&
								formState.errors.name.map((row, index) => {
									return <FormError key={index} text={row} />;
								})}
							<Input name="name" defaultValue={profile.name} />
						</div>
					</div>
				</div>
				<Button
					Element="button"
					prosessing={isSubmitDisable}
					buttonType="submit"
					className="mx-auto w-[120px]"
					text="更新"
				/>
			</form>
		</div>
	);
};
export default ProfileEditReactHookForm;
