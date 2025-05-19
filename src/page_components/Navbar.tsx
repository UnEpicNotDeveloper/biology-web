import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="flex flex-nowrap text-[22px] place-items-baseline">
      <Link href="/" className="font-normal text-[32px] font-Roboto tracking-[-2px]">Biology Web</Link>
      <div className="flex gap-[24px]">
        <Link href="/">Flashcards</Link>
        <Link href="/">Study Questions</Link>
        <Link href="/">Units</Link>
        <Link href="/">Saved Terms</Link>
      </div>
    </header>
  );
}