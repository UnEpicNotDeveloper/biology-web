import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="flex items-center flex-nowrap text-[22px]">
      <Link href="/" className="hover:text-hover font-normal text-[28px] font-['Roboto'] tracking-[-1px]">Biology Web</Link>
      <div className="flex gap-[24px]">
        <Link href="/test2" className="hover:text-hover">Flashcards</Link>
        <Link href="/test2" className="hover:text-hover">Study Questions</Link>
        <Link href="/word" className="hover:text-hover">Saved Terms</Link>
      </div>
    </header>
  );
}