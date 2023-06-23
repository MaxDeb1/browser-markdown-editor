import { StateCreator } from 'zustand'
import { documents } from "../../../data.json";

export interface Document {
  id: number
  name: string
  createdAt: string
  content: string
}

export interface DocumentSlice {
  activeDoc: Document
  updateActiveDoc: (data: number) => void

  markdownContent: Document["content"]
  updateMarkdownContent: (data: string) => void

  documentName: string
  updateDocumentName: (data: string) => void
}

export const createDocumentSlice: StateCreator<DocumentSlice> = (set) => ({
  activeDoc: documents[0],
  updateActiveDoc: (id: Document["id"]) => set({activeDoc: documents[id - 1]}),

  markdownContent: "",
  updateMarkdownContent: (markdownContent) => set({markdownContent}),

  documentName: "",
  updateDocumentName: (documentName) => set({documentName}),
})