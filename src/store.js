import create from 'zustand';

export const useStore = create((set) => ({
  user: null,
  setUser: (userInfo) => set((state) => ({user: userInfo})),
  clearUser: () => set(() => ({user: null}))
}))

