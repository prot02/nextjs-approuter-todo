'use client'

import { supabase } from 'src/utils/supabase'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/index';


export default function Signin() {
  const auth = useAuth()
  const router = useRouter()
  const [user, setUser] = useState(null);

  useEffect(() => {

    // const getSession = async () => {
    //   const { data: { session } } = await supabase.auth.getSession();
    //   if (session) {
    //     setUser(session.user);
    //   }
    // };
    // getSession();

    const { data: {subscription} } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user);
      }
      else{
        setUser(null)
      }
    });

    return () => {
      subscription.unsubscribe();
    };

  }, []);


  useEffect(()=>{
    auth.signin()
  },[user])

  const signInWithGoogle = async () => {

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo:`${window.location.origin}/signin`
      }
    })
    if (error) {
      console.log('Error: ', error.message)
      return
    }
    


  }

  const handleOnClick = () => {
    
  }

  return (
    <div>
      <div>ログイン画面</div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={handleOnClick}>カスタムHookテスト</button>
    </div>
    
  );
}
