'use client'
import React from 'react'
import { useState } from 'react'
import { sectionState } from "../../../store/sectionState"

import Navbar from "../../../page-components/Navbar"
import Definition from "../../../data/Definition"
import Date from "../../../data/Date"
import Footer from "../../../page-components/Footer"
import Unit from "../../../data/Unit"
import { SectionNotes, SectionNames } from "../../../data/Section"
import MCQ from "../../../data/MCQ"


export default function Set() {
  const section = sectionState().section;

  return (
    <div>
      <Navbar />
      <div className="flex justify-center align-center text-5xl font-bold p-[40px]">
        <SectionNames>{section}</SectionNames>
      </div>
      <div className="flex cols-2 text-2xl font-Verdana pb-[40px]">
        <div className="px-[5vw] py-[20px] text-lg justify-left">
          <div className="w-[40vw]">
            <MCQ>{section}</MCQ>
          </div>
        </div>
        <div className="px-[5vw] py-[20px] text-lg justify-left">
          <div className="w-[40vw]">
            <SectionNotes>{section}</SectionNotes>
          </div>
        </div>
      </div>
      <Footer>
        {section}
      </Footer>
    </div>
  );
}