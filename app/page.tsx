'use client'
import { pageState } from "../store/pageState"
import Link from "next/link"
import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import ImageHotspots from "react-image-hotspots";
import Navbar from "../page-components/Navbar"
import Image from "next/image"


export default function Page() {
  return (
    <div style={{ padding: 20 }}>
      <h2>All possible ways to display pib.png</h2>
      {/* 1. Using next/image with relative path */}
      <div>
        <h3>next/image (relative path)</h3>
        <Image src="/pib.png" alt="pib" width={300} height={200} />
      </div>
      {/* 2. Using next/image with require (if pib.png is in /public) */}
      <div>
        <h3>next/image (require syntax)</h3>
        {/* @ts-ignore */}
        <Image src={require('../public/pib.png')} alt="pib" width={300} height={200} />
      </div>
      {/* 3. Using HTML img tag with relative path */}
      <div>
        <h3>img tag (relative path)</h3>
        <img src="/pib.png" alt="pib" width={300} height={200} />
      </div>
      {/* 4. Using HTML img tag with import (if pib.png is imported as a module) */}
      <div>
        <h3>img tag (imported as module)</h3>
        {/* 
        // @ts-ignore
        import pibImg from '../../public/pib.png';
        <img src={pibImg} alt="pib" width={300} height={200} />
        */}
        <div style={{ color: "#888" }}>Not supported in Next.js app directory by default</div>
      </div>
      {/* 5. Using next/image with import (if using webpack file-loader) */}
      <div>
        <h3>next/image (imported as module)</h3>
        {/* 
        // @ts-ignore
        import pibImg from '../../public/pib.png';
        <Image src={pibImg} alt="pib" width={300} height={200} />
        */}
        <div style={{ color: "#888" }}>Not supported in Next.js app directory by default</div>
      </div>
      {/* 6. Using next/image with absolute URL */}
      <div>
        <h3>next/image (absolute URL)</h3>
        <Image src="https://unepicnotdeveloper.github.io/biology-web/pib.png" alt="pib" width={300} height={200} />
      </div>
      {/* 7. Using img tag with absolute URL */}
      <div>
        <h3>img tag (absolute URL)</h3>
        <img src="https://unepicnotdeveloper.github.io/biology-web/pib.png" alt="pib" width={300} height={200} />
      </div>
      {/* 8. Using background-image in a div */}
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
      {/* 9. Using background-image in a div (absolute URL) */}
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
    </div>
  );
}
