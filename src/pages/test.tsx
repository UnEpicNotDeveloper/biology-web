import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function test() {
  return (
    <div>
      <Layout>
        <Link  
          className="rounded-full border"
          href="/"
        >
          Home
        </Link>
        <p>TEST PAGE</p>
      </Layout>
    </div>
  );
}
