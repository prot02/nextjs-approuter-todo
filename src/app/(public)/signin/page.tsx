'use client'

import { useAuth } from '@/hooks';

export default function Signin() {
  const {signin} = useAuth()
  

  
  return (
    <div>
      <div>ログイン画面</div>
      <div>
        {/* <button onClick={signInWithGoogle}>Sign in with Google</button> */}
      </div>
      <div>
        <button onClick={signin}>ログイン</button>
      </div>
      
    </div>
    
  );
}
