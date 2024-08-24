'use client';
import { FCX, useEffect } from 'react';
import { Input, FormLabel, CustomImaga } from '@/components/ui-parts';
import { Button } from '@/components/ui-elements';
import { useForm, Controller } from 'react-hook-form';
import { profileEditFormType, profileEditFormValidate } from './schema';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchUser, updateUser } from 'src/lib/api/user';
import { useAuthStore } from 'src/stores';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { useDisable, useSetAuthStoreData } from 'src/hooks';

const ProfileEditServerAction: FCX = ({ className }) => {
	const auth = useAuthStore((state) => state.auth);
	const { getIsDisabled, disableOnProcessing } = useDisable();
	const { setAuthStoreData } = useSetAuthStoreData();

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<profileEditFormType>({
		mode: 'onChange',
		resolver: zodResolver(profileEditFormValidate),
		defaultValues: {
			name: '',
		},
	});

	const { data: profile } = useSuspenseQuery({
		queryKey: [],
		queryFn: () => {
			return !!auth?.id ? fetchUser({ user_id: auth.id }) : null;
		},
		select: (data) => data.data.user,
	});

	useEffect(() => {
		reset({
			name: profile.name,
		});
	}, [profile, reset]);

	const handleEditProfile = async (formData: profileEditFormType) => {
		await disableOnProcessing({
			key: 'submitAction',
			minDurationSeconds: 1,
			action: async () => {
				const { status } = await updateUser({
					user_id: auth?.id,
					data: formData,
				});
				status === 200 ? toast.success('データの更新に成功しました。') : toast.error('エラー発生');
				setAuthStoreData();
			},
		});
	};

	return (
		<div className={className}>
			<form onSubmit={handleSubmit(handleEditProfile)}>
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
							{errors.name && <div className="text-custom-red-01">{errors.name.message}</div>}
							<Controller
								control={control}
								name="name"
								render={({ field }) => <Input {...field} />}
							/>
						</div>
					</div>
				</div>
				<Button
					Element="button"
					prosessing={getIsDisabled('submitAction')}
					disabled={!isValid}
					buttonType="submit"
					className="mx-auto w-[120px]"
					text="更新"
				/>
			</form>
		</div>
	);
};
export default ProfileEditServerAction;
