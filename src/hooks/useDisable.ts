import { useCallback, useState } from 'react';
import { flushSync } from 'react-dom';

export const useDisable = () => {
	type DisableStatus = {
		[key: string]: boolean; // 任意の文字列キーに対応する boolean 型の値を持つ
	};
	const [isDisabledList, setIsDisabledList] = useState<DisableStatus>({});

	const setIsDisabled = useCallback(({ key, isDisabled }: { key: string; isDisabled: boolean }) => {
		flushSync(() => {
			setIsDisabledList((prevState) => ({
				...prevState,
				[key]: isDisabled,
			}));
		});
	}, []);

	const getIsDisabled = useCallback(
		(key: string) => {
			return isDisabledList[key] ?? false;
		},
		[isDisabledList]
	);

	const disableOnProcessing = useCallback(
		async ({
			key,
			action,
			minDurationSeconds = 0,
		}: {
			key: string;
			action: () => Promise<void>;
			minDurationSeconds?: number;
		}) => {
			let startTime: number = null;
			let endTime: number = null;
			let elapsedTime: number = null;
			try {
				setIsDisabled({ key: key, isDisabled: true });
				startTime = Date.now();
				await action();
			} finally {
				const isElapsed = () => {
					endTime = Date.now();
					elapsedTime = Math.floor(endTime - startTime) / 1000;
					return elapsedTime > minDurationSeconds;
				};

				if (isElapsed()) {
					setIsDisabled({ key: key, isDisabled: false });
					return;
				}

				const intervalId = setInterval(() => {
					if (isElapsed()) {
						setIsDisabled({ key: key, isDisabled: false });
						clearInterval(intervalId);
					}
				}, 1000);
			}
		},
		[setIsDisabled]
	);
	return { getIsDisabled, setIsDisabled, disableOnProcessing };
};
