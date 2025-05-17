'use client'

import {Term} from './Context'

export default function Section({selectedTerm, children}: {children: React.ReactNode; selectedTerm: string;} ) {
  return (
    <Term value={selectedTerm}>
      <div className="p-[40px] pt-[20px] min-h-screen bg-zinc-800 text-gray-100 font-sans">{children}</div>
    </Term>
  );
}
