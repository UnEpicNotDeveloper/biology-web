import {Header, Definition, Connections, NoteLocations, FlashcardLocations, StudyLocations} from './Data';


export function Title({children}: {children: string}) {
  return (
    <div className="px-[40px] pt-[20px] min-page-100%">
      <main className="mb-6 pb-2 border-b border-gray-700 text-5xl font-bold">
        <Header>{children}</Header>
      </main>
    </div>
  );
}

export function Note({children}: {children: string}) {
  return (
    <div>
      <div className="px-[40px] py-[20px]">
        <main className="text-2xl font-Verdana pb-[40px]">
          <Definition>{children}</Definition>
        </main>
      </div>
      <div className="px-[40px] py-[20px]">
        <main className="pt-2 border-t border-gray-700">
          <div className="flex gap-[30px]">
            <div className="font-bold text-['Inter', sans-serif] text-stone-400">
              Flashcards: 
            </div>
            <div className="text-md font-['Montserrat', sans-serif]">
              <FlashcardLocations>{children}</FlashcardLocations>
            </div>
            <div className="pl-[50px] font-bold text-['Inter', sans-serif] text-stone-400">
              Study Cards:
            </div>
            <div className="text-md font-['Montserrat', sans-serif]">
              <StudyLocations>{children}</StudyLocations>
            </div>
          </div>
          <div className="pt-[20px] font-bold text-['Inter', sans-serif] text-stone-400">
            Connections to Other Terms:
          </div>
          <Connections>{children}</Connections>
        </main>
      </div>
    </div>
  );
}

export function Flashcard({children}: {children: string}) {
  switch (children) {
    case "ribosomes":
      return <div>Ribosomes</div>;
    case "notRibosomes":
      return <div>it actually worked</div>;
    default:
      return "error: information not found for " + children;
  }
}

export function Study({children}: {children: string}) {
  switch (children) {
    case "ribosomes":
      return <div>Ribosomes</div>;
    case "notRibosomes":
      return <div>it actually worked</div>;
    default:
      return "error: information not found for " + children;
  }
}
