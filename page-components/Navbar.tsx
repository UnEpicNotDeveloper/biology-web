'use client'
import { sectionState } from "../store/sectionState"

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  const setSection = sectionState((state) => state.setSection);

  return (
    <header className="flex flex-nowrap text-[22px] place-items-baseline">
      <Link href="/" className="font-normal text-[32px] font-Roboto tracking-[-2px]">Biology Web</Link>
      <div className="flex gap-[24px]">
        <Link href="/study/land">Study</Link>
        <Link href="/termIndex">Index</Link>
      </div>
    </header>
  );
}
