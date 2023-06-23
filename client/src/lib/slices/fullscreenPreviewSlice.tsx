import { StateCreator } from 'zustand'

export interface PreviewSlice {
  isFullscreen: boolean;
  toggleIsFullscreen: () => void
}

export const createPreviewSlice: StateCreator<PreviewSlice> = (set) => ({
  isFullscreen: false,
  toggleIsFullscreen: () => set((state) => ({ isFullscreen: !state.isFullscreen})),
})