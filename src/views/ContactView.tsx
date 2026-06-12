import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const LinkedInSVG = ({ className = "size-6" }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="24"
    height="24"
    className={className}
  >
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = ({ className = "size-6" }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="24"
    height="24"
    className={className}
  >
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const MailSVG = ({ className = "size-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LocationSVG = ({ className = "size-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const DownloadSVG = ({ className = "size-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
    className={className}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

export const ContactView: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-8 lg:px-20 mt-7 mb-10 gap-6 w-full">
      <Card className="w-full max-w-3xl">
        <CardContent className="flex flex-col gap-8 p-6 sm:p-10">
          <div className="flex flex-col gap-3 text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold">Get in touch</h1>
            <p className="text-muted-foreground text-md">
              I'm a Computer Science student at HKUST, currently open to{" "}
              <span className="text-foreground font-medium">internships</span>{" "}
              and{" "}
              <span className="text-foreground font-medium">
                full-time roles
              </span>
              . Whether it's a project, opportunity, or just a chat, feel free
              to reach out.
            </p>
            <div className="flex gap-2 flex-wrap mt-1">
              <Badge variant="secondary">Open to Internships</Badge>
              <Badge variant="secondary">Open to Full-Time</Badge>
              <Badge variant="secondary">Usually replies within 48h</Badge>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:shaanduss@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-accent transition-colors"
            >
              <div className="size-10 flex items-center justify-center shrink-0 text-foreground">
                <MailSVG />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="text-sm text-muted-foreground">Email</span>
                <span className="font-medium truncate">
                  shaanduss@gmail.com
                </span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/shaan-dussoye-a5970122a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-accent transition-colors"
            >
              <div className="size-10 flex items-center justify-center shrink-0 text-foreground">
                <LinkedInSVG />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="text-sm text-muted-foreground">LinkedIn</span>
                <span className="font-medium truncate">
                  linkedin.com/in/shaan-dussoye-a5970122a
                </span>
              </div>
            </a>

            <a
              href="https://github.com/shaanduss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-accent transition-colors"
            >
              <div className="size-10 flex items-center justify-center shrink-0 text-foreground">
                <GithubIcon />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="text-sm text-muted-foreground">GitHub</span>
                <span className="font-medium truncate">
                  github.com/shaanduss
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-lg border border-border">
              <div className="size-10 flex items-center justify-center shrink-0 text-foreground">
                <LocationSVG />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="text-sm text-muted-foreground">Location</span>
                <span className="font-medium">Hong Kong &middot; HKT (UTC+8)</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/Resume.pdf" download className="w-full sm:w-auto">
              <Button className="w-full cursor-pointer gap-2">
                <DownloadSVG />
                Download Resume
              </Button>
            </a>
            <a href="/resume" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full cursor-pointer"
              >
                View Resume
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
