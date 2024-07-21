import { create } from 'zustand';
import { AuthUserType } from '@/schemas';

type UseAuthStoreType = {
	auth: AuthUserType | undefined;
	setAuth: (auth: AuthUserType) => void;
	unsetAuth: () => void;
};

export const useAuthStore = create<UseAuthStoreType>((set) => ({
	auth: undefined,
	setAuth: (auth) => set(() => ({ auth: auth })),
	unsetAuth: () => set(() => ({ auth: null })),
}));
