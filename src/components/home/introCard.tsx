import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const IntroCard: React.FC = () => {
  const cardDescription =
    "I am a Computer Science student at HKUST with hands-on experience in fintech, medical AI and hedge fund environments, developing scalable APIs and automating complex investment data workflows.\n Proficient in Typescript, Python, Java, and cloud technologies, I leverage strong technical skills to drive efficiency and innovation in finance. Passionate about applying technology to solve real-world financial challenges.";
  const cardDescriptionArr = cardDescription.split("\n");
  return (
    <Card className="w-full">
      <CardContent>
        <div className="flex flex-col-reverse md:flex-row px-2 sm:px-6 lg:px-20 justify-between items-center gap-8 md:gap-10 mt-4">
          <div className="flex flex-col gap-6 md:gap-8 w-full md:basis-[60%]">
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl text-left">
              Full-Stack Developer | HKUST
            </CardTitle>
            <CardDescription className="text-left text-md">
              {cardDescriptionArr.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index != cardDescriptionArr.length - 1 ? (
                    <>
                      <br />
                      <br />
                    </>
                  ) : (
                    <></>
                  )}
                </React.Fragment>
              ))}
            </CardDescription>
            <a href="/contact" className="pl-0">
              <Button
                variant="secondary"
                className="w-32 border-border text-card-foreground hover:bg-accent cursor-pointer"
              >
                Contact Me
              </Button>
            </a>
          </div>
          <Avatar className="size-40 sm:size-52 md:size-64 shrink-0">
            <AvatarImage src="/home/shaan.jpg" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntroCard;
