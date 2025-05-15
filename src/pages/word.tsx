// app/second/page.tsx
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";

export default function Word() {
  return (
    <div className="min-h-screen bg-zinc-800 text-gray-100 font-sans">
      <Navbar />
      <Layout>

        {/* Title bar */}
        <div className="mb-6 pb-2 border-b border-gray-700">
          <h1 className="text-3xl font-bold">
            Ribosomes
          </h1>
        </div>

        {/* Content area */}
        <article className="prose prose-invert max-w-none">
          {/* Markdown-style headings */}
          <h2>## Section Header</h2>
          <p>
            This is a paragraph that looks like it’s written in Markdown. You can
            write notes just as you would in Obsidian.
          </p>

          {/* Code block */}
          
          {/* Bullet list */}
          <h2>## To-Do List</h2>
          <ul className="list-disc list-inside">
            <li> [x] Write note content</li>
            <li> [ ] Add more sections</li>
            <li> [ ] Style like Obsidian</li>
          </ul>
        </article>
      </Layout>

      {/* Footer bar */}
      <Footer>
        {new Date().toLocaleDateString()}
      </Footer>
    </div>
  );
}
