import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <p className="text-[40px]">navbar</p>
      <Link 
        href="test"
        className="text-[20px]"
      > 
        test
      </Link>
    </div>
  );
}
