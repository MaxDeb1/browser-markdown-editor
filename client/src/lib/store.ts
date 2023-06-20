import { create } from 'zustand'
import { MenuSlice, createMenuSlice } from './slices/openMenuSlice'
import { DocumentSlice, createDocumentSlice } from './slices/activeDocumentSlice'

type StoreState = MenuSlice & DocumentSlice

export const useAppStore = create<StoreState>()((...args) => ({
  ...createMenuSlice(...args),
  ...createDocumentSlice(...args),
}))