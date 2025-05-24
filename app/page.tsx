'use client'
import { pageState } from "../store/pageState"
import Link from "next/link"
import React from 'react';
import Image from "next/image"


// @ts-ignore
const pibImg = require('../public/pib.png');

export default function Page() {
  return (
    <div style={{ padding: 20 }}>
      <h2>All possible ways to display pib.png</h2>
      {/* Only using next/image with require syntax */}
      <div>
        <h3>next/image (require syntax)</h3>
        <Image src={pibImg} alt="pib" width={300} height={200} />
      </div>
      {/* 
      // The following usages are now commented out to only use next/image with require syntax
      <div>
        <h3>next/image (relative path)</h3>
        <Image src="/pib.png" alt="pib" width={300} height={200} />
      </div>
      <div>
        <h3>img tag (relative path)</h3>
        <img src="/pib.png" alt="pib" width={300} height={200} />
      </div>
      <div>
        <h3>img tag (imported as module)</h3>
        <div style={{ color: "#888" }}>Not supported in Next.js app directory by default</div>
      </div>
      <div>
        <h3>next/image (imported as module)</h3>
        <div style={{ color: "#888" }}>Not supported in Next.js app directory by default</div>
      </div>
      <div>
        <h3>next/image (absolute URL)</h3>
        <Image src="https://unepicnotdeveloper.github.io/biology-web/pib.png" alt="pib" width={300} height={200} />
      </div>
      <div>
        <h3>img tag (absolute URL)</h3>
        <img src="https://unepicnotdeveloper.github.io/biology-web/pib.png" alt="pib" width={300} height={200} />
      </div>
      <div>
        <h3>div with background-image (relative path)</h3>
        <div
          style={{
            width: 300,
            height: 200,
            backgroundImage: "url(/pib.png)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      </div>
      <div>
        <h3>div with background-image (absolute URL)</h3>
        <div
          style={{
            width: 300,
            height: 200,
            backgroundImage: "url(https://unepicnotdeveloper.github.io/biology-web/pib.png)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      </div>
      */}
    </div>
  );
}
