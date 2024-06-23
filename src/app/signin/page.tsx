'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/index';
import { supabase } from 'src/utils/supabase'


export default function Signin() {
  const {signin, signout} = useAuth()
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
      // console.log(session)
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





  return (
    <div>
      <div>ログイン画面</div>
      <div>
        {/* <button onClick={signInWithGoogle}>Sign in with Google</button> */}
      </div>
      <div>
        <button onClick={signin}>ログイン</button>
      </div>
      <div>
        <button onClick={signout}>ログアウト</button>
      </div>
    </div>
    
  );
}
