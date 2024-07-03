'use client';
import { useAuthStore } from '@/stores';
import { useAuthCheck, useProtectedRedirect } from '@/hooks';
import {Spinner} from '@/components/ui-parts'
import {Sidebar} from '@/components/ui-elements'


export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	useAuthCheck();
	useProtectedRedirect();
	const isLoading = useAuthStore((state) => state.isLoading());

	return (
		<div>
			{isLoading ? (
				<div className='h-screen flex items-center justify-center'>
					<Spinner className='w-[48px]'/>
				</div>):(
					<div className='flex'>
						<Sidebar />
						<div className='grow p-[20px]'>
							{children}
						</div>
					</div>
				)
			}
		</div>
	);
}
