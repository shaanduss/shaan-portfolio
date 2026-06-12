import HobbiesCarousel from "@/components/home/hobbiesCarousel";
import IntroCard from "@/components/home/introCard";
import RecentExperiences from "@/components/home/recentExperiences";
import SkillsCarousel from "@/components/home/skillsSection";
import React from "react";

export const HomeView: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-8 lg:px-20 mt-7 gap-10">
      {/* <Alert variant="destructive">
        <Loader />
        <AlertTitle>Website still under construction...</AlertTitle>
      </Alert> */}
      <IntroCard />
      <SkillsCarousel />
      <HobbiesCarousel />
      <RecentExperiences />
    </div>
  );
};
