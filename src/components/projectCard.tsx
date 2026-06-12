import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ProjectInterface } from "@/interfaces/projectInterface";
import { ClockFading } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectCard: React.FC<ProjectInterface> = (props) => {
  return (
    <Link to={`/projects/${props.projectID}`}>
      <Card className="pb-0">
        <CardHeader className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <CardTitle className="text-xl">{props.projectName}</CardTitle>
            <CardDescription className="text-lg">
              {props.projectDescription}
            </CardDescription>
          </div>
          <div className="flex flex-col items-end">
            <Badge variant="secondary">
              <ClockFading /> {props.projectDateStr}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pb-0 px-0">
          <div className="aspect-video">
            <img
              src={`/projects/${props.projectID}/1.png`}
              className="object-cover w-full h-full"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
