import React from 'react';
import Link from 'next/link';

export function Header({children}: {children: string}) {
  switch(children) {
    case "Ribosomes":
      return children;
  }
}

export function Definition({children}: {children: string}) {
  switch(children) {
    case "Ribosomes":
      return "__ribosomes information__";
  }
}


// the Connections function compliles all the locations (from "NoteLocations") for each page
// for example, "Ribosomes" is connected to "", "", and ""
// all of which are compiled in the "Connections" function
//
// the ____Locations functions hold the links to each page
// therefore, because these links originate from this page, they can be considered absolute and 
// can be used everywhere throughout the website without worrying about the route
export function Connections({children}: {children: string}) {
  switch(children) {
    case "Ribosomes":
      return (
        <div className="flex gap-[50px] text-md font-['Montserrat', sans-serif]">
          <div>{NoteLocations("Ribosomes")}</div>
          <div>{NoteLocations("NotRibosomes")}</div>
        </div>
      );
  }
}

export function NoteLocations(request: string) {
  switch(request) {
    case "Ribosomes":
      return <Link href="/elements/ribosomes/note">Ribosomes</Link>
      case "NotRibosomes":
      return <Link href="/elements/index">Index</Link>
  }
}

export function FlashcardLocations({children}: {children: string}) {
  switch(children) {
    case "Ribosomes":
      return <Link href="/elements/ribosomes/flashcard">Ribosomes</Link>
      case "NotRibosomes":
      return <Link href="/elements/index">Index</Link>
  }
}

export function StudyLocations({children}: {children: string}) {
  switch(children) {
    case "Ribosomes":
      return <Link href="/elements/ribosomes/study">Ribosomes</Link>
      case "NotRibosomes":
      return <Link href="/elements/index">Index</Link>
  }
}
