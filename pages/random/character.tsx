import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
                        <h1 className="scroll-m-20 text-center p-5 text-4xl font-extrabold tracking-tight lg:text-5xl">
                            {character.name}
                        </h1>
                        <Card className="w-[250px]">
                            <Image src={character.image} alt={character.name} width={250} height={330} />
                        </Card>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}