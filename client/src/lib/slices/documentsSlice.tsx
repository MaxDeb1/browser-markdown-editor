import { StateCreator } from 'zustand'

export interface Document {
  id: number
  name: string
  createdAt: string
  content: string
}

export interface DataSlice {
  documents: Document[]
  updateDocuments: (data: Document[]) => void
  
}

export const createDataSlice: StateCreator<DataSlice> = (set) => ({
  documents: [],
  updateDocuments: (data) => set({documents: data}),
})