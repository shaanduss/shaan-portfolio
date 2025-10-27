import type React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

const SkillsCarousel: React.FC = () => {
  const skills = [
    "React",
    "Docker",
    "SpringBoot",
    "Python",
    "NextJS",
    "Typescript",
    "Rest API",
    "Redux",
    "NodeJS",
    "Tailwind",
    "Supabase",
    "PGSQL",
    "MongoDB",
  ];
  return (
    <div className="w-full flex flex-col items-center">
      {/* Title and description outside the card */}
      <div className="mb-6 w-full px-4">
        <p className="text-left text-3xl font-semibold text-card-foreground mb-2">
          Skills & Technologies
        </p>
        <p className="text-left text-base text-muted-foreground mb-6 font-normal">
          Technologies central to my professional toolkit (drag to see all).
        </p>
      </div>
      {/* Carousel card, wider */}
      <div
        className="w-full max-w-7x rounded-2xl p-0"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <div className="rounded-2xl p-6 relative flex flex-col">
          <div className="relative flex items-center w-full">
            <Carousel
              opts={{
                align: "start", // or "center"
                dragFree: true, // allow free dragging across multiple items
                skipSnaps: false, // allow skipping snaps for multiple items
                containScroll: "trimSnaps", // constrain scroll within carousel
              }}
              className="w-full py-10"
            >
              <CarouselContent className="px-12">
                {skills.map((skill, index) => {
                  const imgName = "/skills/" + skill.toLowerCase() + ".png";
                  return (
                    <CarouselItem
                      key={index}
                      className="basis-1/1 lg:basis-1/3 xl:basis-1/5 my-2 select-none"
                    >
                      <div className="h-full flex items-center justify-center">
                        <Card className="border border-border bg-background shadow-sm rounded-2xl">
                          <CardContent className="flex flex-col items-center justify-between pt-8 pb-6 mx-10">
                            <div className="flex items-center justify-center ">
                              <img
                                src={imgName}
                                className="h-20 w-20 object-contain filter grayscale opacity-80 group-hover:opacity-100 transition duration-200"
                                alt={skill}
                              />
                            </div>
                            <div className="text-card-foreground mt-7 text-lg font-semibold tracking-wide group-hover:text-accent-foreground transition-colors duration-200">
                              {skill}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 !bg-card !border-border !text-muted-foreground hover:!bg-accent z-10" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 !bg-card !border-border !text-muted-foreground hover:!bg-accent z-10" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel;
