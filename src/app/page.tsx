import Image from "next/image";
import Link from "next/link";
import Footer from "../page_components/Footer";
import Navbar from "../page_components/Navbar";
import {Title, Note, Flashcard, Study} from "../page_components/Styles";

export default function Web() {
  let term: string = "Ribosomes";
  return (
    <div>
      <Navbar />
      <Link href="/elements/ribosomes/note">go to page</Link>
      <Footer>
        {new Date("2025/5/16").toLocaleDateString()}
      </Footer>
    </div>
  );
}
