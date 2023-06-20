import { StateCreator } from 'zustand'

export interface MenuSlice {
  isOpen: boolean;
  toggleIsOpen: () => void
}

export const createMenuSlice: StateCreator<MenuSlice> = (set) => ({
  isOpen: false,
  toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen})),
})
