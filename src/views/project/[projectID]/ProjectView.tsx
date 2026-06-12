import { GithubSVG } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { projectData } from "@/data/projectData";
import { Link, useParams } from "react-router-dom";

interface ZoomableImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({
  src,
  alt = "",
  className,
}) => (
  <Dialog>
    <DialogTrigger asChild>
      <img
        src={src}
        alt={alt}
        className={`${className ?? ""} cursor-zoom-in transition-opacity hover:opacity-90`}
      />
    </DialogTrigger>
    <DialogContent
      className="!max-w-[95vw] w-fit p-2 bg-background border-border"
      showCloseButton
    >
      <DialogTitle className="sr-only">{alt || "Image preview"}</DialogTitle>
      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain rounded-sm"
      />
    </DialogContent>
  </Dialog>
);

export const ProjectView: React.FC = () => {
  const { projectID } = useParams();
  const project =
    projectData.find((project) => project.projectID === projectID) ??
    projectData[0];

  const isPortrait = project.isPortrait ?? false;

  const images = Array.from({ length: project.numImages }, (_, i) => {
    const imageNum = i + 1;
    if (i == 0) return null;
    return (
      <div
        key={`${project.projectID}-image-${imageNum}`}
        className="flex flex-col gap-y-2"
      >
        {project.imageLabels?.[i] && (
          <p className="font-normal font-mono text-sm">
            {project.imageLabels[i]}
          </p>
        )}
        <ZoomableImage
          src={`/projects/${project.projectID}/${imageNum}.png`}
          alt={project.imageLabels?.[i] ?? `${project.projectName} image ${imageNum}`}
          className={
            isPortrait
              ? "w-full max-h-[70vh] object-contain rounded-sm"
              : "w-full rounded-sm"
          }
        />
      </div>
    );
  });

  return (
    <div className="flex w-full h-full items-center justify-center px-4 sm:px-6">
      <div className="flex flex-col justify-center items-center mt-7 gap-10 w-full max-w-2xl">
        <div className="mb-2 w-full px-2 sm:px-4 flex flex-col items-center text-center">
          <p className="text-2xl sm:text-3xl font-semibold text-card-foreground mb-2">
            {project.projectName}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground font-normal">
            {project.projectDescription}
          </p>
        </div>

        {/* Thumbnail + Badges + Text Section*/}
        <div className="w-full">
          {/* Thumbnail */}
          {isPortrait ? (
            <div className="flex justify-center">
              <ZoomableImage
                src={`/projects/${project.projectID}/1.png`}
                alt={project.projectName}
                className="max-h-[70vh] w-auto rounded-sm"
              />
            </div>
          ) : (
            <div className="aspect-video">
              <ZoomableImage
                src={`/projects/${project.projectID}/1.png`}
                alt={project.projectName}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          )}

          {/* Badges and Basic Project Info */}
          <div className="flex flex-col gap-y-5 my-10">
            {/* Date Sections */}
            <div className="flex gap-x-3 items-end">
              <p className="font-normal font-mono text-md">PROJECT DATE:</p>
              <p className="font-bold text-xl">{project.projectDateStr}</p>
            </div>

            <div className="flex items-start">
              {project.githubLink && (
                <>
                  <Button
                    className="cursor-pointer"
                    variant="secondary"
                    asChild
                  >
                    <Link to={project.githubLink} target="_blank">
                      <GithubSVG />
                      Repository
                    </Link>
                  </Button>
                </>
              )}
            </div>

            {/* Video/First Image Section */}
            <div className="flex flex-col gap-y-1">
              {project.hasVideo && (
                <video className="w-full rounded-sm" controls>
                  <source
                    src={`/projects/${project.projectID}/sr.mp4`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Text Sections */}
            {project.details?.map((item, idx) => (
              <div
                key={`${project.projectID}-detail-${idx}`}
                className="mb-2 px-2 sm:px-4 flex flex-col ident-2"
              >
                <p className="text-lg sm:text-xl font-semibold text-card-foreground mb-2">
                  {item.title}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground font-normal w-full">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Badges Section */}
            <div className="flex flex-wrap gap-x-3 items-center w-full gap-y-3">
              {project.badges?.map((name) => (
                <Badge key={name} variant="project" className="text-sm sm:text-md px-3">
                  {name}
                </Badge>
              ))}
            </div>

            {/* Images Section */}
            {project.numImages > 1 && (
              <div className="flex flex-col gap-y-1 mt-10">
                <p className="font-normal font-mono text-md">OTHER IMAGES</p>
                <div
                  className={
                    isPortrait
                      ? "grid grid-cols-2 gap-x-4 gap-y-8 mt-4"
                      : "flex flex-col gap-y-10"
                  }
                >
                  {images}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
