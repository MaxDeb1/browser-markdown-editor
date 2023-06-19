import { create } from 'zustand'

interface MenuState {
  isOpen: boolean;
  toggleIsOpen: () => void
}

const useMenuStore = create<MenuState>((set) => ({
  isOpen: false,
  toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen})),
}))

export default useMenuStore