import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function Caro() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  const agents = ["astra", "breach", "brimstone", "chamber", "cypher", "jett", "omen", "raze", "reyna", "sage", "sova", "viper", "yoru"];
  
  const getImagePath = (index: number) => `/agents/${agents[index]}.jpg`;

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
    >
      <CarouselContent>
        {agents.map((agent, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    src={getImagePath(index)}
                    alt={`${agent} Image`}
                    className="max-w-full max-h-full"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
