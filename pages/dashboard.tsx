import { Inter } from "next/font/google";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Navbar } from "@/components/navbar";
import Head from "next/head";
import GitHubButton from 'react-github-btn';
import { Overview } from "@/components/chart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main
            className={`flex flex-col items-center justify-between p-10 ${inter.className}`}
        >
            <Head>
                <title>Picker Dashboard</title>
            </Head>
            <Navbar />
            <blockquote className="p-20 m-20">In development</blockquote>
            <GitHubButton href="https://github.com/AnuPlayz/valorantpicker" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star AnuPlayz/valorantpicker on GitHub">Star</GitHubButton>
        </main>
    );
}
