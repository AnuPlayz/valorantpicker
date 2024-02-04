import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Head from "next/head";

export default function Maps() {
    const [maps, setMap] = useState<any>(null);

    const getRandomMap = () => {
        fetch("/api/map")
            .then((response) => response.json())
            .then((data) => setMap(data));
    };

    useEffect(() => {
        fetch("/api/map")
            .then((response) => response.json())
            .then((data) => setMap(data));
    }, []);

    return (
        <main
            className={`flex flex-col items-center justify-between p-10 ${inter.className}`}
        >
            <Head>
                <title>Random Map</title>
            </Head>
            <Navbar />
            <div className="flex flex-row items-center p-20">
                <Button onClick={getRandomMap} className="m-10">Get Random Map</Button>
                {maps && (
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
        </main>
    );
}