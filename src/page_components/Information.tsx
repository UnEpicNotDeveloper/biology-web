'use client'

import {useContext} from 'react';
import {Term} from './Context';
import {Header, Definition, Connections} from './Elements';


export function Title() {
  const selectedTerm = useContext(Term)
  switch (selectedTerm) {
    case "ribosomes":
      return <Header>Ribosomes</Header>;
    case "notRibosomes":
      return <Header>Finally</Header>;
    default:
      return "error: information not found for " + selectedTerm;
  }
}

export function Note() {
  const selectedTerm = useContext(Term)
  switch (selectedTerm) {
    case "ribosomes":
      let home: number = Math.random();
      return (
        <div>
          <Definition>Ribosomes</Definition>
          <Connections>
            <div>{home}</div>
            <div>two</div>
            <div>three</div>
            <div>four</div>
          </Connections>
        </div>
      );
    case "notRibosomes":
      return <Definition>it actually worked</Definition>;
    default:
      return "error: information not found for " + selectedTerm;
  }
}

export function Flashcard() {
  const selectedTerm = useContext(Term)
  switch (selectedTerm) {
    case "ribosomes":
      return <div>Ribosomes</div>;
    case "notRibosomes":
      return <div>it actually worked</div>;
    default:
      return "error: information not found for " + selectedTerm;
  }
}

export function Study() {
  const selectedTerm = useContext(Term)
  switch (selectedTerm) {
    case "ribosomes":
      return <div>Ribosomes</div>;
    case "notRibosomes":
      return <div>it actually worked</div>;
    default:
      return "error: information not found for " + selectedTerm;
  }
}
