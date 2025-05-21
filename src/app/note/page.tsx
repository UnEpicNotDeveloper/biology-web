'use client'
import React from 'react'
import { useState } from 'react'
import { pageState } from "../../store/pageState"

import Navbar from "../../page-components/Navbar"
import Definition from "../../page-components/Definition"
import Date from "../../page-components/Date"
import Footer from "../../page-components/Footer"
import Unit from "../../page-components/Unit"


const term: string = ''
export default function Page() {
  const term = pageState().term;
  return (
    <div>
      <Navbar />
      <div className="px-[40px] pt-[20px]">
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
          <div className="flex gap-[30px]">
            <div className="font-bold text-['Inter', sans-serif] text-stone-400">
              Flashcards: 
            </div>
            <div className="text-md font-['Montserrat', sans-serif]">
              "flashcard location import"
            </div>
            <div className="pl-[50px] font-bold text-['Inter', sans-serif] text-stone-400">
              Study Cards:
            </div>
            <div className="text-md font-['Montserrat', sans-serif]">
              "study location import"
            </div>
          </div>
          <div className="pt-[20px] font-bold text-['Inter', sans-serif] text-stone-400">
            Connections to Other Terms:
          </div>
          "other page connections import"
        </main>
      </div>
      <Footer><Date>{String(term)}</Date></Footer>
    </div>
    );
  }