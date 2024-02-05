import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { SkeletonCard } from "@/components/skeletonall";
const inter = Inter({ subsets: ["latin"] });
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Head from "next/head";
import GitHubButton from "react-github-btn";

export default function Maps() {
    const [all, setAll] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getRandomAll = () => {
        setLoading(true);
        fetch("/api/all")
            .then((response) => response.json())
            .then((data) => {
                setAll(data);
                setTimeout(() => setLoading(false), 500); // Delay for 0.5 seconds
            });


    };

    useEffect(() => {
        fetch("/api/all")
            .then((response) => response.json())
            .then((data) => {
                setAll(data);
                console.log(data);
                setTimeout(() => setLoading(false), 500); // Delay for 0.5 seconds
            });
    }, []);

    return (
        <main
            className={`flex flex-col items-center justify-between p-10 ${inter.className}`}
        >
            <Head>
                <title>Random Challange</title>
            </Head>
            <Navbar />
            <div className="flex flex-row items-center p-5">
                <Button onClick={getRandomAll} className="m-10">Get Challange</Button>
                {loading ? (
                    <SkeletonCard />
                ) : (
                    <>
                        <div className="flex flex-row items-center justify-center">
                            <div className="p-3">
                                <h1 className="scroll-m-20 text-center p-5 text-4xl font-extrabold tracking-tight lg:text-5xl">
                                    {all.character.name}
                                </h1>
                                <Card className="w-[250px]">
                                    <CardContent className="flex aspect-square items-center justify-center p-5">
                                        {all && (
                                            <img
                                                src={all.character.image}
                                                alt={all.character.name}
                                                width={500}
                                                height={300}
                                                className="max-w-[500px] max-h-[400px]"
                                            />
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="p-3">
                                <h1 className="scroll-m-20 text-center p-5 text-4xl font-extrabold tracking-tight lg:text-5xl">
                                    {all.map.name}
                                </h1>
                                <Card className="w-[450px]">
                                    <CardContent className="flex items-center justify-center p-3">
                                        <img src={all.map.image} alt={all.map.name} width={450} height={330} />
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="p-3">
                                <h1 className="scroll-m-20 text-center p-5 text-4xl font-extrabold tracking-tight lg:text-5xl">
                                    {all.mode.name}
                                </h1>
                                <Card className="w-[450px]">
                                    <CardContent className="flex items-center justify-center p-3">
                                        <img src={all.mode.image} alt={all.mode.name} width={450} height={330} />
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <GitHubButton href="https://github.com/AnuPlayz/valorantpicker" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star AnuPlayz/valorantpicker on GitHub">Star</GitHubButton>
        </main>
    );
}