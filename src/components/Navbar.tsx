import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex justify-center align-center">
      <div className="grid h-[40px] w-[600px] grid-cols-4 border text-center">
        <Link href="/" className="border h-[40px] content-center hover:text-hover">Web</Link>
        <Link href="/test2" className="border h-[40px] content-center hover:text-hover">Flashcards</Link>
        <Link href="/test2" className="border h-[40px] content-center hover:text-hover">Study Questions</Link>
        <Link href="/test2" className="border h-[40px] content-center hover:text-hover">Index</Link>
      </div>
    </div>
  );
}