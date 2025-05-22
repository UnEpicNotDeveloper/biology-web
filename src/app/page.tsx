'use client'
import { pageState } from "../store/pageState"
import Link from "next/link"
import React from 'react';


export default function Page() {
  const term = pageState().term;
  const setTerm = pageState((state) => state.setTerm);

  return (
    <div>
      <Link
        href="/note"
        onClick={() => setTerm("mRNA")}
      >
        {term} Abiotic Symthesis
      </Link>
    </div>
  );
}
