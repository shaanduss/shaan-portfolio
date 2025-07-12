import type React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

const SkillsCarousel:React.FC = () => {
  const skills = ["SpringBoot", "Docker", "React", "Github", "MySQL", "MongoDB"]
  return(
    <div className="w-full">
      <p className="text-left text-3xl font-bold">Core Skills</p>
      <Carousel className="w-full mt-6">
        <CarouselContent>
          {skills.map((skill, index) => {
            const imgName = "/" + skill.toLowerCase() + ".png";
            return(
              <CarouselItem key={index} className="basis-1/3">
                <div>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-between pt-6">
                      <img src={imgName} className="text-white h-20" />
                      <div className="text-card-foreground mt-7">
                        {skill}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default SkillsCarousel