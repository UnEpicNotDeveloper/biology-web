'use client'
import React from 'react'
import { pageState } from "../../store/pageState"

import Navbar from "../../page-components/Navbar"
import Definition from "../../data/Definition"
import Date from "../../data/Date"
import Footer from "../../page-components/Footer"
import Unit from "../../data/Unit"
import Connections from "../../data/Connections"


export default function Page() {
  const term = pageState().term;
  return (
    <div>
      <Navbar />
      <div className="px-[40px] pt-[40px]">
        <main className="mb-6 pb-2 border-b border-gray-700 text-5xl font-bold">
          {String(term)}
        </main>
      </div>
      <div className="px-[40px] py-[20px]">
        <main className="text-2xl font-Verdana pb-[40px]">
          <Definition>{String(term)}</Definition>
        </main>
      </div>
      <div className="px-[40px] py-[20px]">
        <main className="pt-2 border-t border-gray-700">
          <div className="pt-[20px] font-bold text-['Inter', sans-serif] text-stone-400">
            Connections to Other Terms:
          </div>
          <Connections>{String(term)}</Connections>
        </main>
      </div>
      <Footer><Date>{String(term)}</Date></Footer>
    </div>
    );
  }