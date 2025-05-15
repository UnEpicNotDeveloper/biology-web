import React from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../app/globals.css";

export default function Layout({children} : {children: React.ReactNode;}) {
  return (
    <div>
      <Navbar />
      <main className="p-[40px] pt-[20px]">{children}</main>
    </div>
  );
}
