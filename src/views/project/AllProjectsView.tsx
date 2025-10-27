import { ProjectCard } from "@/components/projectCard";
import { projectData } from "@/data/projectData";

export const AllProjectsView: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-20 mt-7 gap-10">
      <div className="w-full mb-10">
        <p className="text-left text-3xl font-bold">
          All Projects & Experiences
        </p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-5">
          {projectData
            .slice() // create a shallow copy to avoid mutating original
            .sort((a, b) => b.projectDate.getTime() - a.projectDate.getTime())
            .map((project) => (
              <ProjectCard {...project} key={project.projectID} />
            ))}
        </div>
      </div>
    </div>
  );
};
