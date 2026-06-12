import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

const FESkills = [
  "React",
  "Redux",
  "Next.js",
  "React Native",
  "TailwindCSS",
  "ShadCN",
  "Sass",
  "AG Grid",
  "Zod",
  "React Hook Form",
  "Vite",
];

const BESkills = [
  "Spring Boot",
  "FastAPI",
  "Express.js",
  "REST APIs",
  "WebSockets",
  "BullMQ",
  "Celery",
  "JWT Auth",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Mongoose",
  "Redis",
  "Supabase",
];

const DevOpsSkills = [
  "Docker",
  "GitHub Actions",
  "Nginx",
  "Bash",
  "PowerShell",
  "Cron",
  "JUnit",
  "Jacoco",
];

const ProgLanguages = ["TypeScript", "Python", "Java", "C++", "SQL"];

type SkillVariant =
  | "skillBlue"
  | "skillGreen"
  | "skillOrange"
  | "skillPurple";

interface SkillCardProps {
  title: string;
  skills: string[];
  variant: SkillVariant;
  dotColor: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  skills,
  variant,
  dotColor,
}) => (
  <Card className="border border-border bg-card rounded-2xl shadow-sm gap-3 transition-colors hover:border-muted-foreground/30">
    <CardHeader>
      <CardTitle className="flex items-center gap-2.5 text-xl font-semibold text-card-foreground">
        <span
          className="inline-block h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: dotColor }}
        />
        {title}
        <span className="ml-auto text-sm font-normal text-muted-foreground">
          {skills.length}
        </span>
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-wrap gap-1.5">
      {skills.map((skill) => (
        <Badge
          key={skill}
          variant={variant}
          className="text-sm px-3 py-1 font-normal"
        >
          {skill}
        </Badge>
      ))}
    </CardContent>
  </Card>
);

const SkillsSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="mb-6 w-full px-4">
        <p className="text-left text-3xl font-semibold text-card-foreground mb-2">
          Skills & Technologies
        </p>
        <p className="text-left text-base text-muted-foreground mb-6 font-normal">
          Technologies central to my professional toolkit.
        </p>
      </div>
      <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-5">
        <SkillCard
          title="Front-End"
          skills={FESkills}
          variant="skillBlue"
          dotColor="#A8C7E5"
        />
        <SkillCard
          title="Back-End"
          skills={BESkills}
          variant="skillGreen"
          dotColor="#A6D9B9"
        />
        <SkillCard
          title="DevOps & Tooling"
          skills={DevOpsSkills}
          variant="skillOrange"
          dotColor="#F0CFA1"
        />
        <SkillCard
          title="Languages"
          skills={ProgLanguages}
          variant="skillPurple"
          dotColor="#D5B8E5"
        />
      </div>
    </div>
  );
};

export default SkillsSection;
