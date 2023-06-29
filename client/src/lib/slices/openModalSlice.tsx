import { StateCreator } from "zustand";

export interface ModalSlice {
  isModalOpen: boolean;
  setIsModalOpen: () => void;
}

export const createModalSlice: StateCreator<ModalSlice> = (set) => ({
  isModalOpen: false,
  setIsModalOpen: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
});
