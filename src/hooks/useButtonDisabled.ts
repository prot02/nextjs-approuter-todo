import { useCallback, useState } from 'react';

export type DisableStateType = {
	[key: string]: boolean;
};

export const useButtonDisabled = () => {
	const [buttonDisabledState, setButtonDisabledState] = useState<DisableStateType>();

	const buttonDisabled = useCallback((key: string) => {
		setButtonDisabledState((prevState) => ({
			...prevState,
			[key]: true,
		}));
	}, []);

	const buttonEnabled = useCallback((key: string) => {
		setButtonDisabledState((prevState) => ({
			...prevState,
			[key]: false,
		}));
	}, []);

	const isButtonDisabled = useCallback(
		(key: string) => {
			return buttonDisabledState?.[key] ?? false;
		},
		[buttonDisabledState]
	);

	return { buttonDisabled, buttonEnabled, isButtonDisabled };
};
