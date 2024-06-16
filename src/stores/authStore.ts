import {create} from 'zustand'
import {AuthType} from '@/schemas/index'


export const useAuthStore = create<AuthType>((set) => ({
  user:undefined,
  signin: (user:AuthType) => set(user),
  signout: () => set(null)
}))