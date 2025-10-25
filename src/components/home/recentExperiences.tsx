import React from "react";
import { projectData } from "@/data/projectData";
import { ProjectCard } from "../projectCard";

const RecentExperiences: React.FC = () => {
  return (
    <div className="w-full mb-10">
      <p className="text-left text-3xl font-bold">Projects & Experiences</p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-5">
        {projectData.map((project) => {
          return <ProjectCard {...project} />;
        })}
      </div>
    </div>
  );
};

export default RecentExperiences;
