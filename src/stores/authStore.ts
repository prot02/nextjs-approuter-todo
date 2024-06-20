import {create} from 'zustand'
import {AuthUserType} from '@/schemas/index'

type UseAuthStoreType = {
  auth:AuthUserType
  signin: (auth:AuthUserType) => void
  signout: () => void
}

export const useAuthStore = create<UseAuthStoreType>((set) => ({
  auth:undefined,
  signin: ()=>set((auth) => (auth)),
  signout: () => set(null)
}))