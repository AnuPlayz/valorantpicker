import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <>
            <div className="flex flex-row items-center p-20">
                <div className="flex flex-col">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        Valorant Picker
                    </h2>
                    <blockquote className="mt-6 border-l-2 pl-6 italic">
                        "After all," they said, "the best valorant random picker, so it's only fair that
                        I should be the best."
                    </blockquote>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        <li>Cute Picker</li>
                        <li>The besto westo</li>
                        <li>E-daters are gay</li>
                    </ul>
                </div>
                <Link href="/random/character">
                    <Button>Get Random Character</Button>
                </Link>
            </div>
        </>
    );
}