import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchUser } from 'src/lib/api/user';
import { useAuthStore } from 'src/stores';
import { toast } from 'react-toastify';
import { updateUserInfo } from './actions';
import { useDisable, useSetAuthStoreData } from '@/hooks';
import { profileEditFormErrorType } from './schema';
import { useFormState } from 'react-dom';

export const useProfileEdit = () => {
	const auth = useAuthStore((state) => state.auth);
	const { setAuthStoreData } = useSetAuthStoreData();
	const { getIsDisabled, disableOnProcessing } = useDisable();

	const { data: profile } = useSuspenseQuery({
		queryKey: [],
		queryFn: () => {
			return !!auth?.id ? fetchUser({ user_id: auth.id }) : null;
		},
		select: (data) => data.data.user,
	});

	const handleFormAction = async (
		state: profileEditFormErrorType,
		formData: FormData
	): Promise<profileEditFormErrorType> => {
		let res = null;
		await disableOnProcessing({
			key: 'submitAction',
			minDurationSeconds: 1,
			action: async () => {
				res = await updateUserInfo(state, formData);
				res.isSuccess ? toast.success(res.message) : toast.error(res.message);
				setAuthStoreData();
			},
		});
		return res;
	};

	const initialState = {
		isSuccess: true,
		message: '',
		errors: {
			name: [] as string[],
		},
	};
	const [state, formAction] = useFormState<profileEditFormErrorType, FormData>(
		handleFormAction,
		initialState
	);

	return {
		formState: state,
		profile,
		formAction,
		isSubmitDisable: getIsDisabled('submitAction'),
	};
};
