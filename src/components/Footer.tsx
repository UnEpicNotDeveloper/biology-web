import React from 'react';
import Link from 'next/link';

export default function Footer({children} : {children: React.ReactNode;}) {
  return (
    <footer>
      <div className="flex gap-x-[52px] justify-center">  
        <p>Last edited: <code>{children}</code></p>
        <Link 
          href="/test2"
          className="hover:text-hover"
        >
          Index of all terms <code className="text-bold">{'->'}</code>
        </Link>
      </div>
      
      <div 
        className="flex justify-center"
      >
        Created by <code>Jason Brick</code>, <code>Joshua Haupt</code>, and <code>Daniel Mace</code>
      </div>
    </footer>
  );
}
