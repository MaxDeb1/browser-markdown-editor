import { StateCreator } from 'zustand'
import datas from "../../../data.json";

export interface Document {
  id: number
  name: string
  createdAt: string
}

export interface ActiveDocumentSlice {
  activeDoc: Document
  updateActiveDoc: (data: number) => void
}

export const createDocumentSlice: StateCreator<ActiveDocumentSlice> = (set) => ({
  activeDoc: datas[0],
  updateActiveDoc: (id: Document["id"]) => set({activeDoc: datas[id - 1]})
})