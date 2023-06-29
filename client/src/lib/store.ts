import { create } from "zustand";
import { DocumentSlice, createDocumentSlice } from "./slices/activeDocumentSlice";
import { PreviewSlice, createPreviewSlice } from "./slices/fullscreenPreviewSlice";
import { MenuSlice, createMenuSlice } from "./slices/openMenuSlice";
import { ModalSlice, createModalSlice } from "./slices/openModalSlice";
import { DataSlice, createDataSlice } from "./slices/documentsSlice";

type StoreState = MenuSlice & DocumentSlice & PreviewSlice & ModalSlice & DataSlice;

export const useAppStore = create<StoreState>()((...args) => ({
  ...createMenuSlice(...args),
  ...createDocumentSlice(...args),
  ...createPreviewSlice(...args),
  ...createModalSlice(...args),
  ...createDataSlice(...args),
}));
