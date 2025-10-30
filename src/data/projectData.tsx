import type { ProjectInterface } from "@/interfaces/projectInterface";

export const projectData: ProjectInterface[] = [
  {
    projectID: "market-sentiment",
    projectName: "Market Sentiment using LLMs",
    projectDescription:
      "Negative, Neutral or Positive Rating for Financial Headlines with Confidence Score.",
    projectDate: new Date(2025, 10 - 1, 1),
    projectDateStr: "Oct '25",
    numImages: 1,
    badges: ["AI", "Natural Language Processing", "LLMs"],
    details: [
      {
        title: "What I've learnt.",
        description:
          "How to leverage LLMs through APIs like SambaNova \
          to assist with financial model analysis. I would like to \
          extend the project in the future to perform scheduled \
          Web-Scraping on Yahoo Finance Headlines and to store \
          it in a MongoDB Atlas Instance.",
      },
    ],
  },
  {
    projectID: "rabbit-credit",
    projectName: "Rabbit Credit - Internship",
    projectDescription: "Worked as an Application Developer for 7 months.",
    projectDate: new Date(2025, 9 - 1, 1),
    projectDateStr: "Sep '25",
    numImages: 6,
  },
  {
    projectID: "market-data",
    projectName: "Market Data Aggregator",
    projectDescription:
      "Stock Ticker Search using a WS connected to several Financial APIs.",
    projectDate: new Date(2025, 8 - 1, 1),
    projectDateStr: "Aug '25",
    numImages: 3,
    details: [
      {
        title: "What I've learnt.",
        description:
          "How to leverage LLMs through APIs like SambaNova \
          to assist with financial model analysis. I would like to \
          extend the project in the future to perform scheduled \
          Web-Scraping on Yahoo Finance Headlines and to store \
          it in a MongoDB Atlas Instance.",
      },
    ],
  },
  {
    projectID: "form-generator",
    projectName: "Form Generator",
    projectDescription: "Dynamic Form Builder with Input Types & Validation",
    projectDate: new Date(2025, 7 - 1, 1),
    projectDateStr: "Jul '25",
    numImages: 1,
  },
  {
    projectID: "alpha-sherpa-test",
    projectName: "Alpha Sherpa Test",
    projectDescription: "Technical Test for ASC Hedge Fund",
    projectDate: new Date(2024, 4 - 1, 1),
    projectDateStr: "Apr '24",
    numImages: 2,
  },
  {
    projectID: "discord-bot",
    projectName: "Personalized Discord Bot",
    projectDescription: "A bot for my friends & I using discord.py API",
    projectDate: new Date(2023, 1 - 1, 1),
    projectDateStr: "Jan '23",
    numImages: 7,
  },
  {
    projectID: "jlau",
    projectName: "Personal Chef Website",
    projectDescription: "Portfolio Website with Resume",
    projectDate: new Date(2022, 8 - 1, 1),
    projectDateStr: "Aug '22",
    numImages: 5,
  },
];
