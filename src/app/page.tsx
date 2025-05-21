'use client'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { pageState } from "../store/pageState"
import Link from "next/link"

import React from 'react';

//import { pageState } from "../store/pageState"
import type { StoreState } from "../store/pageState"

export default function Page() {
  const term = pageState().term;
  const setTerm = pageState((state) => state.setTerm);

  return (
    <div>
      <Link
        href="/note"
        onClick={() => setTerm("Abiotic Synthesis")}
      >
        {term} Abiotic Symthesis
      </Link>
    </div>
  );
}
