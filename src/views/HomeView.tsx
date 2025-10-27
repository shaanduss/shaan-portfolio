import IntroCard from "@/components/home/introCard";
import RecentExperiences from "@/components/home/recentExperiences";
import SkillsCarousel from "@/components/home/skillsCarousel";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Loader } from "lucide-react";
import React from "react";

export const HomeView: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-20 mt-7 gap-10">
      <Alert variant="destructive">
        <Loader />
        <AlertTitle>Website still under construction...</AlertTitle>
      </Alert>
      <IntroCard />
      <SkillsCarousel />
      <RecentExperiences />
    </div>
  );
};
