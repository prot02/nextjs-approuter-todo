import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useSetAuthStoreData } from '@/hooks';

export const useAuthSet = async () => {
	const { setAuthStoreData } = useSetAuthStoreData();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		async function setGlobalUser() {
			await setAuthStoreData();
		}
		setGlobalUser();
	}, [setAuthStoreData, pathname, searchParams]);
};
