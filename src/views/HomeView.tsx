import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";
import { Link } from "react-router-dom";

export const HomeView: React.FC = () => {
  const cardDescription = "I am a Computer Science student at HKUST with hands-on experience in fintech and hedge fund environments, developing scalable APIs and automating complex investment data workflows.\n Proficient in Python, Java, and cloud technologies, I leverage strong technical skills to drive efficiency and innovation in finance. Passionate about applying technology to solve real-world financial challenges.";
  const cardDescriptionArr = cardDescription.split('\n');
  const skills = ["SpringBoot", "Docker", "NextJS", "React", "Github"]

  return(
    <div className="flex flex-col justify-center items-center px-20 mt-7 gap-10">
      {/* Intro Card */}
      <Card className="w-full">
        <CardContent>
          <div className="flex px-20 justify-between items-center mt-4">
            <div className="flex flex-col gap-8 basis-[60%]">
              <CardTitle className="text-4xl text-left">👋 I'm Shaan - a Full-Stack Developer</CardTitle>
              <CardDescription className="text-left text-md">
                {cardDescriptionArr.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {(index != cardDescriptionArr.length -1) ?
                    <>
                      <br />
                      <br />
                    </> : <></>
                    }
                  </React.Fragment>
                ))}
              </CardDescription>
              <a href="/contact" className="pl-2"><Button variant="secondary" className="w-32 cursor-pointer">Contact Me</Button></a>
            </div>
            <Avatar className="size-64">
              <AvatarImage src="/public/shaan.jpg" />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>
      {/* Skills Carousel */}
      <Carousel className="w-full">
        <CarouselContent>
          {skills.map((skill, index) => {
            const imgName = "/public/" + skill.toLowerCase() + ".png";
            return(
              <CarouselItem key={index} className="basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">

                      <img src={imgName} className="text-white h-32" />
                      <div className="text-muted-foreground">
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