import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Character() {
    const [character, setCharacter] = useState<any>(null);

    const getRandomCharacter = () => {
        fetch("/api/character")
            .then((response) => response.json())
            .then((data) => setCharacter(data));
    };

    useEffect(() => {
        fetch("/api/character")
            .then((response) => response.json())
            .then((data) => setCharacter(data));
    }, []);

    return (
        <main
            className={`flex flex-col items-center justify-between p-10 ${inter.className}`}
        >
            <Navbar />
            <div className="flex flex-row items-center p-20">
                <Button onClick={getRandomCharacter} className="m-10">Get Random Character</Button>
                {character && (
                    <>
                        <div className="flex flex-col">
                            <code className="relative rounded bg-muted m-5 font-mono text-4xl font-semibold text-center">
                                {character.name}
                            </code>
                            <Card className="w-[250px]">
                                <CardContent className="flex aspect-square items-center justify-center p-3">
                                    <Image
                                        src={character.image}
                                        alt={character.name}
                                        width={224}
                                        height={299}
                                        className="max-w-[250px] max-h-[300px]"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}