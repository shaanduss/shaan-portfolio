import React from "react";
import { projectData } from "@/data/projectData";
import { ProjectCard } from "../projectCard";

const RecentExperiences: React.FC = () => {
  return (
    <div className="w-full mb-10">
      <p className="text-left text-2xl sm:text-3xl font-bold">
        Recent Projects & Experiences
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mt-5">
        {projectData
          .slice() // create a shallow copy to avoid mutating original
          .sort((a, b) => b.projectDate.getTime() - a.projectDate.getTime())
          .map((project, i) => {
            if (i < 4)
              return <ProjectCard {...project} key={project.projectID} />;
            else return <></>;
          })}
      </div>
    </div>
  );
};

export default RecentExperiences;
