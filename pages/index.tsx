import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Caro } from "@/components/carousel";
import { Hero } from "@/components/hero";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-between p-10 ${inter.className}`}
    >
      <Head>
        <title>Valorant Picker</title>
      </Head>
      <Navbar />
      <div className="flex flex-row items-center p-20">
        <Hero />
        <Caro />
      </div>
    </main>
  );
}
