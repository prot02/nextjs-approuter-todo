import {create} from 'zustand'
import {AuthUserType} from '@/schemas'

type UseAuthStoreType = {
  auth:AuthUserType | undefined
  signin: (auth:AuthUserType) => void
  signout: () => void
  isLoading: () => boolean
  isSignout: () => boolean
  isSignin: () => boolean
}

export const useAuthStore = create<UseAuthStoreType>((set, get) => ({
  auth:undefined,
  signin: (auth)=>set(() => ({auth:auth})),
  signout: () => set(()=>({auth:null})),
  isLoading: () => {
    const { auth } = get()
    return auth === undefined
  },
  isSignout: () => {
    const { auth } = get()
    return auth === null
  },
  isSignin: () => {
    const { isLoading, isSignout } = get()
    return !isLoading() && !isSignout()
  },
}))