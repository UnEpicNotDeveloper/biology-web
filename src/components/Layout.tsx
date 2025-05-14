import React from 'react';
import Link from 'next/link';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Layout({children} : {children: React.ReactNode;}) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
