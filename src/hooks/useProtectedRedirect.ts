import { useEffect } from "react";
import { useAuthStore } from '@/stores';
import { useRouter } from 'next/navigation'

export const useProtectedRedirect = () => {
		const router = useRouter()
    const isSignout = useAuthStore((state)=> state.isSignout())

    useEffect(()=>{
			if(isSignout){
				router.push('/signin')
			}
    }, [isSignout])
};