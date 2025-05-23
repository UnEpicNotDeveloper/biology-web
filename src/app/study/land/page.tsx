'use client'
import { sectionState } from "../../../store/sectionState"

import Link from 'next/link'
import React from 'react'
import Navbar from "../../../page-components/Navbar"
import Footer from "../../../page-components/Footer"


export default function LandingPage() {
  const setSection = sectionState((state) => state.setSection);

  return (
    <div>
      <Navbar />
      <div className="text-3xl text-white flex flex-col items-center justify-center min-h-screen space-y-4 p-[40px]">
        <div className="text-5xl text-stone-300 pt-[40px] font-bold pt-2 border-b border-gray-700 w-[70vw] flex justify-center">Unit 2: Cell Structure and Function</div>
        <Link href="/study/sets" onClick={()=>setSection("2.1")}>
          <span>2.1 Cell Structure</span>
        </Link>
        <Link href="/study/sets" onClick={()=>setSection("2.2")}>
          <span>2.2 Cell Function</span>
        </Link>
        <Link href="/study/sets" onClick={()=>setSection("2.3")}>
          <span>2.3 Cell Membrane</span>
        </Link>
        <Link href="/study/sets" onClick={()=>setSection("2.4")}>
          <span>2.4 Cell Transport</span>
        </Link>
        <Link href="/study/sets" onClick={()=>setSection("2.5")}>
          <span>2.5 Enzymes</span>
        </Link>
        <Link href="/study/sets" onClick={()=>setSection("2.6")}>
          <span>2.6 Cellular Respiration</span>
        </Link>
        <Link href="/study/sets" onClick={()=>setSection("2.7")} className="mb-10">
          <span>2.7 Photosynthesis</span>
        </Link>
        <div className="text-5xl text-stone-300 pt-[40px] font-bold pt-2 border-b border-gray-700 w-[70vw] flex justify-center">Unit 4: Cell Communication & Cell Cycle</div>
        <Link href="/study/sets" onClick={()=>setSection("4.1")}>
          <span>4.1 Cell Cycle</span>
        </Link>
        <Link href="/study/sets" onClick={()=>setSection("4.2")}>
          <span>4.2 Mitosis</span>
        </Link>
        <Link href="/study/sets" onClick={()=>setSection("4.3")}>
          <span>4.3 Meiosis</span>
        </Link>
        <Link href="/study/sets" onClick={()=>setSection("4.4")}>
          <span>4.4 Regulation of Cell Cycle</span>
        </Link>
        <Link href="/study/sets" onClick={()=>setSection("4.5")} className="mb-10">
          <span>4.5 Cancer</span>
        </Link>
        <div className="text-5xl text-stone-300 pt-[40px] font-bold pt-2 border-b border-gray-700 w-[70vw] flex justify-center">Unit 6: Gene Expression and Regulation</div>
        <Link href="/study/sets" onClick={()=>setSection("6.1")}>
          <span>6.1 DNA Structure</span>
        </Link>
        <Link href="/study/sets" onClick={()=>setSection("6.2")}>
          <span>6.2 DNA Replication</span>
        </Link>
        <Link href="/study/sets" onClick={()=>setSection("6.3")}>
          <span>6.3 Transcription</span>
        </Link>
        <Link href="/study/sets" onClick={()=>setSection("6.4")}>
          <span>6.4 Translation</span>
        </Link>
        <Link href="/study/sets" onClick={()=>setSection("6.5-6.6")}>
          <span>6.5 - 6.6 Gene Regulation</span>
        </Link>
        <Link href="/study/sets" onClick={()=>setSection("6.7")}>
          <span>6.7 Mutations</span>
        </Link>
        <Link href="/study/sets" onClick={()=>setSection("6.8")}>
          <span>6.8 Biotechnology</span>
        </Link>
      </div>
      <Footer>22/5/2025</Footer>
    </div>
  );
}
