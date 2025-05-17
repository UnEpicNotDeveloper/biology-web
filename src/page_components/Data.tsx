import React from 'react';

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

export function Connections({children}: {children: string}) {
  switch(children) {
    case "Ribosomes":
      return "__links__";
  }
}

export function Location({children}: {children: string}) {
  switch(children) {
    case "Ribosomes":
      return "";
  }
}
