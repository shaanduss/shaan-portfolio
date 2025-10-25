import type { ProjectInterface } from "@/interfaces/projectInterface";

export const projectData: ProjectInterface[] = [
  {
    projectID: "market-sentiment",
    projectName: "Market Sentiment using LLMs",
    projectDescription:
      "Negative, Neutral or Positive Rating for Financial Headlines with Confidence Score.",
    projectImg: "projects/market-sentiment-1.png",
    projectDate: "Oct '25",
  },
  {
    projectID: "market-data",
    projectName: "Market Data Aggregator",
    projectDescription:
      "Stock Ticker Search using a WS connected to several Financial APIs.",
    projectImg: "projects/market-data-1.png",
    projectDate: "Aug '25",
  },
  {
    projectID: "form-generator",
    projectName: "Form Generator",
    projectDescription: "Dynamic Form Builder with Input Types & Validation",
    projectImg: "projects/form-generator-1.png", // TODO - Fix Image
    projectDate: "Jul '25",
  },
  {
    projectID: "jlau",
    projectName: "Personal Chef Website",
    projectDescription: "Portfolio Website with Resume",
    projectImg: "projects/jlau-1.png",
    projectDate: "Aug '22",
  },
];
