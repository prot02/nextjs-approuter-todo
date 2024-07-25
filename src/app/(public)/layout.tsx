import { AuthStoreUnset } from '@/features/common';

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <AuthStoreUnset>{children}</AuthStoreUnset>;
}
