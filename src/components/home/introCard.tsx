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
    "I am a Computer Science student at HKUST with hands-on experience in fintech and hedge fund environments, developing scalable APIs and automating complex investment data workflows.\n Proficient in Python, Java, and cloud technologies, I leverage strong technical skills to drive efficiency and innovation in finance. Passionate about applying technology to solve real-world financial challenges.";
  const cardDescriptionArr = cardDescription.split("\n");
  return (
    <Card className="w-full">
      <CardContent>
        <div className="flex px-20 justify-between items-center mt-4">
          <div className="flex flex-col gap-8 basis-[60%]">
            <CardTitle className="text-4xl text-left">
              👋 I'm Shaan - a Full-Stack Developer
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
                className="w-32 border-border text-card-foreground hover:bg-accent"
              >
                Contact Me
              </Button>
            </a>
          </div>
          <Avatar className="size-64">
            <AvatarImage src="/shaan.jpg" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntroCard;
