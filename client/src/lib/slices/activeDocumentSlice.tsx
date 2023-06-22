import { StateCreator } from 'zustand'
import datas from "../../../data.json";

export interface Document {
  id: number
  name: string
  createdAt: string
  content: string
}

export interface ActiveDocumentSlice {
  activeDoc: Document
  updateActiveDoc: (data: number) => void
  markdownContent: Document["content"]
  updateMarkdownContent: (data: string) => void
}

export const createDocumentSlice: StateCreator<ActiveDocumentSlice> = (set) => ({
  activeDoc: datas[0],
  updateActiveDoc: (id: Document["id"]) => set({activeDoc: datas[id - 1]}),
  markdownContent: "",
  updateMarkdownContent: (markdownContent) => set({markdownContent})
})