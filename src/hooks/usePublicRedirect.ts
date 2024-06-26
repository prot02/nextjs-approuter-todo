import { useEffect } from "react";
import { useAuthStore } from '@/stores';
import { useRouter } from 'next/navigation'

export const usePublicRedirect = () => {
		const router = useRouter()
    const isSignin = useAuthStore((state)=> state.isSignin())

    useEffect(()=>{
			if(isSignin){
				router.push('/board')
			}
    }, [isSignin])
		    
    
};