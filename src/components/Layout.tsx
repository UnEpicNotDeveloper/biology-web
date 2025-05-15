import React from 'react';
import "../app/globals.css";

export default function Layout({children} : {children: React.ReactNode;}) {
  return (
    <div>
      <main className="p-[40px] pt-[20px]">{children}</main>
    </div>
  );
}
