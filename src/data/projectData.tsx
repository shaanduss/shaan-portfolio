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
    githubLink: "https://github.com/shaanduss/market-sentiment",
  },
  {
    projectID: "rabbit-credit",
    projectName: "Rabbit Credit —` Internship",
    projectDescription: "Worked as an Application Developer for 7 months.",
    projectDate: new Date(2025, 9 - 1, 1),
    projectDateStr: "Sep '25",
    numImages: 6,
    badges: [
      "Frontend Coordinator",
      "PR Reviewer",
      "Documentation Writer",
      "Redux",
      "React",
      "SpringBoot",
      "PGSQL",
      "MySQL",
      "Powershell",
      "Docker",
      "JUnit",
      "Jacoco",
    ],
    details: [
      {
        title: "Key Experience 1 — Loan Management System (LMS)",
        description:
          "I spearheaded the front-end development effort \
        for the LMS. The first month's workload was quite heavy, I had \
        written 38,648 lines of code just setting up the front-end and its base \
        components (navbar, form blocks, etc.). To evaluate the system, I would \
        schedule and lead meetings with the COO to get user feedback on the UI/Functionality.",
      },
      {
        title: "Key Experience 2 — Managing an Intern",
        description:
          "The company hired a Front-End Developer Intern to help with \
        the workload of the front-end and I was in-charge of his tasks and code reviews.\
        I had to take him through onboarding, delegate tasks and review all his Pull Requests. \
        It was a very unique experience that has pushed me to be much more clear \
        on the development process and ensuring the codebase stays consistent & organized.",
      },
      {
        title: "Key Experience 3 — MCRA Compliant API",
        description:
          "I wrote quite a few endpoints and services for our API which connects to the \
        Hong Kong Credit Reference Platform. The API was written in SpringBoot. A memorable \
        task I worked on were the Email Notification Service + LogMonitor — it would watch the \
        API response log for any failed requests and would email these as a notification \
        to the staff.",
      },
    ],
    imageLabels: [null, "Loan Management System", null, null, null, null],
  },
  {
    projectID: "market-data",
    projectName: "Market Data Aggregator",
    projectDescription:
      "Stock Ticker Search using a WS connected to several Financial APIs.",
    projectDate: new Date(2025, 8 - 1, 1),
    projectDateStr: "Aug '25",
    numImages: 3,
    badges: [
      "WebSockets",
      "Supabase",
      "Rest APIs",
      "Recharts",
      "ShadCN-UI",
      "TailwindCSS",
      "Reusable Components",
      "React",
      "Vite",
    ],
    details: [
      {
        title: "What I've learnt.",
        description:
          "I understood and have used WebSockets before but this was my first \
          time building one. I learnt how to handle data from different sources, \
          I also had to learn workarounds for API restrictions, like the fact that \
          YFinance's (unofficial) API didn't really send Historical Prices, so I would \
          cache any into a Supabase DB instance when the WebSocket was open for more \
          historical data.",
      },
      {
        title: "Possible Extensions.",
        description:
          "I'd like to try to show Broker Ratings for the searched stock \
          on the Chart, maybe fetch some more data that would help a trader \
          with analysis and try a more robust API source. Most of the APIs being \
          used are only the free versions and the endpoints I can get data from are \
          very limited. I'd maybe add a web-scraper to find more useful data.",
      },
    ],
    githubLink: "https://github.com/shaanduss/market-data-aggregator",
  },
  {
    projectID: "form-generator",
    projectName: "Form Generator",
    projectDescription: "Dynamic Form Builder with Input Types & Validation",
    projectDate: new Date(2025, 7 - 1, 1),
    projectDateStr: "Jul '25",
    numImages: 1,
    githubLink: "https://github.com/shaanduss/dussy-reusable-components",
  },
  {
    projectID: "alpha-sherpa",
    projectName: "Alpha Sherpa — Internship",
    projectDescription: "Worked as a Full-Stack Engineer for 3 months.",
    projectDate: new Date(2024, 8 - 1, 1),
    projectDateStr: "Aug '24",
    numImages: 5,
    imageLabels: [
      null,
      "Tickers Page — Before",
      null,
      "Tickers Page — After",
      null,
    ],
  },
  {
    projectID: "alpha-sherpa-test",
    projectName: "Alpha Sherpa Test",
    projectDescription: "Technical Test for ASC Hedge Fund",
    projectDate: new Date(2024, 4 - 1, 1),
    projectDateStr: "Apr '24",
    numImages: 2,
    githubLink: "https://github.com/shaanduss/alphasherpa",
  },
  {
    projectID: "discord-bot",
    projectName: "Personalized Discord Bot",
    projectDescription: "A bot for my friends & I using discord.py API",
    projectDate: new Date(2023, 1 - 1, 1),
    projectDateStr: "Jan '23",
    numImages: 7,
    githubLink: "https://github.com/shaanduss/discord-bot",
  },
  {
    projectID: "jlau",
    projectName: "Personal Chef Website",
    projectDescription: "Portfolio Website with Resume",
    projectDate: new Date(2022, 8 - 1, 1),
    projectDateStr: "Aug '22",
    numImages: 5,
    githubLink: "https://github.com/shaanduss/jordan-lau",
  },
];
