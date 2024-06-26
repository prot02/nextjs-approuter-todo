"use client"
import { useAuth } from '@/hooks';

export default function bord() {
  const {signout} = useAuth()
  return (
    <div>
      aaa
      <div>
        <button onClick={signout}>ログアウト</button>
      </div>
    </div>
  );
}
