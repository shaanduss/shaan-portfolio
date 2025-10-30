import { Badge } from "@/components/ui/badge";
import { projectData } from "@/data/projectData";
import { useParams } from "react-router-dom";

export const ProjectView: React.FC = () => {
  const { projectID } = useParams();
  const project =
    projectData.find((project) => project.projectID === projectID) ??
    projectData[0];

  const images = Array.from({ length: project.numImages }, (_, i) => {
    const imageNum = i + 1;
    if (i == 0) return <div></div>;
    else
      return (
        <div key={`${project.projectID}-image-${imageNum}`}>
          <img
            src={`/projects/${project.projectID}/${imageNum}.png`}
            className="w-full rounded-sm"
          />
        </div>
      );
  });

  console.log(images);

  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="flex flex-col justify-center items-center mt-7 gap-10 w-lg">
        <div className="mb-2 w-full px-4 flex flex-col items-center">
          <p className="text-3xl font-semibold text-card-foreground mb-2">
            {project.projectName}
          </p>
          <p className="text-base text-muted-foreground font-normal">
            {project.projectDescription}
          </p>
        </div>

        {/* Thumbnail + Badges + Text Section*/}
        <div>
          {/* Thumbnail */}
          <div className="aspect-video">
            <img
              src={`/projects/${project.projectID}/1.png`}
              className="object-cover  rounded-sm"
            />
          </div>

          {/* Badges and Basic Project Info */}
          <div className="flex flex-col gap-y-5 mt-10">
            {/* Date Sections */}
            <div className="flex gap-x-3 items-end">
              <p className="font-normal font-mono text-md">PROJECT DATE:</p>
              <p className="font-bold text-xl">{project.projectDateStr}</p>
            </div>

            {/* Badges Section */}
            <div className="flex gap-x-3 items-center">
              {project.badges?.map((name) => (
                <Badge variant="project" className="text-md px-3">
                  {name}
                </Badge>
              ))}
            </div>

            {/* Text Sections */}
            {project.details?.map((item) => (
              <>
                <div className="mb-2 px-4 flex flex-col ident-2">
                  <p className="text-xl font-semibold text-card-foreground mb-2">
                    {item.title}
                  </p>
                  <p className="text-base text-muted-foreground font-normal w-150">
                    {item.description}
                  </p>
                </div>
              </>
            ))}

            {/* Images Section */}
            <div className="flex flex-col gap-y-3 mt-10 mb-10">
              <p className="font-normal font-mono text-md">OTHER IMAGES</p>
              <div className="flex flex-col gap-y-8">{images}</div>
            </div>
          </div>
        </div>
        {/* Other Images Section */}
      </div>
    </div>
  );
};
