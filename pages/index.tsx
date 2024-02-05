import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Caro } from "@/components/carousel";
import { Hero } from "@/components/hero";
import Head from "next/head";
import GitHubButton from 'react-github-btn';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <main
        className={`flex flex-col items-center justify-between p-10 scrollbar-hide ${inter.className}`}
      >
        <Head>
          <title>Valorant Picker</title>
        </Head>
        <Navbar />
        <div className="flex flex-row items-center p-20">
          <Hero />
          <Caro />
        </div>
        <GitHubButton href="https://github.com/AnuPlayz/valorantpicker" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star AnuPlayz/valorantpicker on GitHub">Star</GitHubButton>
      </main>
  );
}
