import Image from "next/image";
import Link from "next/link";
import Footer from "../page_components/Footer";
import Navbar from "../page_components/Navbar";
import Section from "../page_components/Section";
import {Title, Note, Flashcard, Study} from "../page_components/Information";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Section selectedTerm="ribosomes">
        <Title />
        <Note />
      </Section>
      <Footer>
        {new Date("2025/5/16").toLocaleDateString()}
      </Footer>
    </div>
  );
}
