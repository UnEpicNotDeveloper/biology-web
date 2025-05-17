import React from 'react';

export function Header({children}: {children: React.ReactNode}) {
  return (
    <main className="mb-6 pb-2 border-b border-gray-700 text-3xl font-bold">
      {children}
    </main>
  );
}

export function Definition({children}: {children: React.ReactNode}) {
  return (
    <main className="">
      {children}
    </main>
  );
}

export function Connections({children}: {children: React.ReactNode}) {
  return (
    <main className="flex gap-[30px] font-Inter">
      {children}
    </main>
  );
}
