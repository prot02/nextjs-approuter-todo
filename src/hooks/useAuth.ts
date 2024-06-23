import { useCallback } from "react";
import { supabase } from 'src/utils/supabase'
import { useAuthStore } from '@/stores';

export const useAuth = () => {
    const {signout:storeSignout} = useAuthStore()

    const signin =  useCallback(async()=>{
        try{
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                redirectTo:`${window.location.origin}/board`
                }
            })
            if (error) throw Error
        }
        catch{
            console.log("ログインエラー")
            storeSignout()
        }
    }, [])

    const signout =  useCallback(async()=>{
        try{
            await supabase.auth.signOut()
        }
        catch{
            console.log("ログアウトエラー")
        }
    }, [])

    
    // ログイン判定とuseをstoreに設定する処理を書く
    
    return {signin, signout}
};