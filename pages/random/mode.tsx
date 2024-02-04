import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { SkeletonCard } from "@/components/skeletonmode";
const inter = Inter({ subsets: ["latin"] });
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Head from "next/head";
import GitHubButton from "react-github-btn";

export default function Maps() {
    const [maps, setMap] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getRandomMap = () => {
        setLoading(true);
        fetch("/api/mode")
            .then((response) => response.json())
            .then((data) => {
                setMap(data);
                setTimeout(() => setLoading(false), 500); // Delay for 0.5 seconds
            });


    };

    useEffect(() => {
        fetch("/api/mode")
            .then((response) => response.json())
            .then((data) => {
                setMap(data)
                setTimeout(() => setLoading(false), 500); // Delay for 0.5 seconds
            });
    }, []);

    return (
        <main
            className={`flex flex-col items-center justify-between p-10 ${inter.className}`}
        >
            <Head>
                <title>Random Mode</title>
            </Head>
            <Navbar />
            <div className="flex flex-row items-center p-20">
                <Button onClick={getRandomMap} className="m-10">Get Random Mode</Button>
                {loading ? (
                    <SkeletonCard />
                ) : (
                    <>
                        <div className="flex flex-col">
                            <h1 className="scroll-m-20 text-center p-5 text-4xl font-extrabold tracking-tight lg:text-5xl">
                                {maps.name}
                            </h1>
                            <Card className="w-[450px]">
                                <CardContent className="flex items-center justify-center p-3">
                                    <img src={maps.image} alt={maps.name} width={450} height={330} />
                                </CardContent>
                            </Card>
                        </div>
                    </>
                )}
            </div>
            <GitHubButton href="https://github.com/AnuPlayz/valorantpicker" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star AnuPlayz/valorantpicker on GitHub">Star</GitHubButton>
        </main>
    );
}