'use client'
import { pageState } from "../store/pageState"
import Link from "next/link"
import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import ImageHotspots from "react-image-hotspots";



export default function Page() {
  const term = pageState().term;
  const setTerm = pageState((state) => state.setTerm);

  return (
    <div>
      <Link
        href="/note"
        onClick={() => setTerm("mRNA")}
      >
        {term} Abiotic Symthesis
      </Link>
    </div>
  );
}



/*
//this wraps the image (according to chatgpt)
function GraphViewer() { //- make sure the pib is in the correct directory
  return (
    <TransformWrapper>
      <TransformComponent>
        <img src="/pib.png" />     
      </TransformComponent>
    </TransformWrapper>
  );
}
//the /note might have to change to a set term or something idrk
const spots = [
  {x:100, y: 150, radius:20, page: "/note"},

];

function GraphWithHotspots() {
  const term = pageState().term;
  const setTerm = pageState((state) => state.setTerm);

  return(
    <ImageHotspots
      src="/pib.png"
      hotspots={spots}
      onClick={(spot) => setTerm("mRNA")}
    />
  );
}

function HotspotCircle({ coords, page}) {
  const[x, y, r] = coords;
  return (
    <Link href={page}>
      <div>
        style={{
          position: 'absolute',
          left: x-r,
          top: y-r, 
          width: r*2;
          height: r*2,
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      </div>
    </Link>
  )
}
*/