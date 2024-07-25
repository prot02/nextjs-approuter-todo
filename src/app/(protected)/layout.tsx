import { Header } from '@/features/common';
import { AuthStoreSet } from '@/features/common';

export default function ProtectedLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<AuthStoreSet>
			<Header />
			<div className="p-[20px]">{children}</div>
		</AuthStoreSet>
	);
}
