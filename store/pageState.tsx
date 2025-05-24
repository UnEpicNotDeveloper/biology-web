'use client'
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type StoreState = {
  term: string
  setTerm: (arg0: string) => void;
}

export const pageState = create<StoreState>()(
  persist(
    (set) => ({
      term: "",
      setTerm: (value) => set({ term: value }),
    }),
    {
      name: 'page-state-storage',
    }
  )
);