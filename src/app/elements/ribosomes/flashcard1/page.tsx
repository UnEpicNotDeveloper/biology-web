import Image from "next/image";
import Link from "next/link";
import Footer from "../../../../page_components/Footer";
import Navbar from "../../../../page_components/Navbar";
import {Title, Note, Flashcard, Study} from "../../../../page_components/Styles";
import {term} from "../term";

export default function Web() {
  return (
    <div>
      <Navbar />
      <Title>{term}</Title>
      <Note>{term}</Note>
      <Footer>
        {new Date("2025/5/16").toLocaleDateString()}
      </Footer>
    </div>
  );
}
