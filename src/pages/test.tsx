import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

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
      <Footer>
        {new Date().toLocaleDateString()}
      </Footer>
    </div>
  );
}
