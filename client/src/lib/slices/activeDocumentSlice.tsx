import { StateCreator } from 'zustand'
import datas from "../../../data.json";

export interface DocumentSlice {
  activeDoc: string
  updateActiveDoc: (data: string) => void
}

export const createDocumentSlice: StateCreator<DocumentSlice> = (set) => ({
  activeDoc: datas[0].name,
  updateActiveDoc: (data) => set(() => ({activeDoc: data}))
})