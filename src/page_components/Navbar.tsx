import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="flex flex-nowrap text-[22px] place-items-baseline">
      <Link href="/" className="hover:text-hover font-normal text-[32px] font-Roboto tracking-[-2px]">Biology Web</Link>
      <div className="flex gap-[24px]">
        <Link href="/" className="hover:text-hover">Flashcards</Link>
        <Link href="/" className="hover:text-hover">Study Questions</Link>
        <Link href="/" className="hover:text-hover">Saved Terms</Link>
      </div>
    </header>
  );
}