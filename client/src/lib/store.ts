import { create } from 'zustand'
import { MenuSlice, createMenuSlice } from './slices/openMenuSlice'
import { DocumentSlice, createDocumentSlice } from './slices/activeDocumentSlice'
import { PreviewSlice, createPreviewSlice } from './slices/fullscreenPreviewSlice'

type StoreState = MenuSlice & DocumentSlice & PreviewSlice

export const useAppStore = create<StoreState>()((...args) => ({
  ...createMenuSlice(...args),
  ...createDocumentSlice(...args),
  ...createPreviewSlice(...args),
}))