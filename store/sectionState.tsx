'use client'
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type StoreState = {
  section: string
  setSection: (arg0: string) => void;
}

export const sectionState = create<StoreState>()(
  persist(
    (set) => ({
      section: "",
      setSection: (value) => set({ section: value }),
    }),
    {
      name: 'section-state-storage',
    }
  )
);