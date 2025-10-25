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

export const ProjectCard: React.FC<ProjectInterface> = (props) => {
  return (
    <div>
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
              <ClockFading /> {props.projectDate}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pb-0 px-0">
          <div className="aspect-video">
            <img
              src={props.projectImg}
              className="object-cover w-full h-full"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
