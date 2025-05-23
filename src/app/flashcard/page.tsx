'use client'
import React from 'react'
import { useState } from 'react'
import { pageState } from "../../store/pageState"

import Navbar from "../../page-components/Navbar"
import Definition from "../../data/Definition"
import Date from "../../data/Date"
import Footer from "../../page-components/Footer"
import Unit from "../../data/Unit"


const term: string = ''
export default function Page() {
  const term = pageState().term;
  return (
    <div>
      <Navbar />
      <div className="px-[40px] pt-[20px]">
        <main className="mb-6 pb-2 border-b border-gray-700 text-5xl font-bold">
          Yeah we realized that we combined have put in over 200 hours into this project so this page is a little easter egg of what we envisioned
        </main>
      </div>
      <Footer><Date>22/05/2025</Date></Footer>
    </div>
    );
  }