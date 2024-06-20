import { useCallback } from "react";
export const useAuth = () => {
    const signin =  useCallback(()=>{
        console.log("ログイン処理を書く")
    }, [])
    const signout =  useCallback(()=>{
        console.log("ログアウト処理を書く")
    }, [])
    
    return [signin, signout]
};