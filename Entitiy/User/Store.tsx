import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IUser {
    id: string
}

export interface IUserStore {
    idContact: IUser[]
    idUser: IUser
    addUser: (user: IUser) => void
}

export interface UserReplece extends IUser {
    sockedId?: string
}

export const UserStore = create<IUserStore>()(
    persist(
      (set) => ({
        idContact: [],
        idUser:{id:"123"},
        addUser: (userId) => set((state) => ({...state ,userId: userId})),
      }),
      {
          name: 'UserStoreId',
          storage: createJSONStorage(() => AsyncStorage), 
      },
  ),
  )
