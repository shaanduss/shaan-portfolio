import type { ProjectInterface } from "@/interfaces/projectInterface";

export const projectData: ProjectInterface[] = [
  {
    projectID: "hkust-fyp",
    projectName: "HKUST — Final Year Project",
    projectDescription:
      "AI-Powered Student Progress Tracking & Intervention System.",
    projectDate: new Date(2026, 5 - 1, 1),
    projectDateStr: "May '26",
    numImages: 5,
    isPortrait: true,
    badges: [
      "React Native",
      "Typescript",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Auth",
      "REST APIs",
      "Bash",
      "Mock API",
      "Role-Based Access",
    ],
    details: [
      {
        title: "Key Experience 1 — Mock Canvas LMS",
        description:
          "HKUST's ITSC declined our request for access to the university's \
          Canvas API, so I built a simulated Canvas LMS that mirrors the real \
          Canvas REST API — same endpoints, same request/response shapes, same \
          field names. It's a standalone Express.js server on port 4000, fully \
          stateless, with all mock data stored as JSON files loaded into memory \
          at startup. The whole thing is designed so that moving to a real \
          Canvas deployment in production would only need a base URL swap and \
          OAuth headers — no application logic changes.",
      },
      {
        title: "Key Experience 2 — Simulation Script",
        description:
          "I wrote an interactive bash script (simulate-demo.sh) that lets a \
          grader reproduce every flow in the system end-to-end without touching \
          source code. It's a menu loop — grade an assignment, advance the \
          simulated semester clock, trigger a Canvas sync, run predictions at a \
          specific checkpoint, etc. The most fun part was the full-semester \
          simulation: it resets both databases, activates all four courses, \
          then loops through the 25%/50%/75% checkpoints — for each one it \
          rolls the clock forward, creates a new assignment, randomly grades \
          every submission (skewed so the demo cohort looks like a real class), \
          syncs Canvas → server, and runs batch predictions.",
      },
      {
        title: "Key Experience 3 — React Native Front-End",
        description:
          "I built the cross-platform mobile app with React Native + Typescript. \
          The interesting part was the role-adaptive UI — the same screens render \
          completely differently depending on whether the user is a student, TA, \
          or professor in that specific course. A user can even be a TA in one \
          course and a student in another, and the home screen shows them both \
          cards side by side. I built reusable components (CourseCard, \
          PredictionCard, GoalProgress, GradeList) so the visual language stays \
          consistent across the student and professor views.",
      },
      {
        title: "What I've learnt.",
        description:
          "This was the largest cross-functional system I've worked on — a \
          mobile app, a main server, a separate Canvas mock, and an ML \
          prediction pipeline all talking to each other. The biggest takeaway \
          was API design: building endpoints that return different response \
          shapes based on the requester's role forced me to think much more \
          carefully about contracts than I had to in past projects. I also got \
          a lot more comfortable with append-only data models — predictions and \
          warnings are never overwritten, which preserves a full history of how \
          each student's trajectory evolves over the semester.",
      },
    ],
  },
  {
    projectID: "market-sentiment",
    projectName: "Market Sentiment using LLMs",
    projectDescription:
      "Negative, Neutral or Positive Rating for Financial Headlines with Confidence Score.",
    projectDate: new Date(2025, 10 - 1, 1),
    projectDateStr: "Oct '25",
    numImages: 1,
    badges: ["AI", "Natural Language Processing", "LLMs"],
    hasVideo: true,
    details: [
      {
        title: "How this was built.",
        description:
          "This project was built using Python, nltk, \
        and SambaNova API. It takes headlines as input (currently \
        a static array) and passes them to AI LLM models to classify \
        the headline into a sentiment label: Negative, Neutral or \
        Positive. NLTK cleans any stop words from the headlines. It \
        uses 3 models to classify each headline and shows the result \
        with the confidence score. The models are called through the \
        SambaNova API.",
      },
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
    projectName: "Rabbit Credit — Internship",
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
          "The company hired a front-end developer intern to help with \
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
      {
        title: "React Hooks",
        description:
          "I had used React Hooks a lot in previous projects, without \
        properly realizing in what use cases they needed to be used. I also didn't \
        know their functions very well - like the reason for useEffect or useCallback. \
        During this internship, I learnt about using the right Hooks cleverly in the code. \
        As a full-stack engineer, that was a very important skill to learn.",
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
    badges: [
      "React",
      "React-Hook-Form",
      "Reusable Components",
      "Zod",
      "ShadCN-UI",
      "Front-end",
      "UI Design",
    ],
    details: [],
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
    badges: [
      "Typescript",
      "Docker",
      "Celery",
      "Python",
      "FastAPI",
      "Linux",
      "NextJS",
      "React",
      "Sass",
      "Material UI",
      "AGGridReact",
      "MongoDB",
      "Windows Task Scheduler",
      "TailwindCSS",
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
    badges: [
      "React",
      "ChakraUI",
      "Typescript",
      "AGGridReact",
      "Framer Motion",
      "Lightweight Charts",
      "NextJS",
      "Emotion Styles",
    ],
  },
  {
    projectID: "discord-bot",
    projectName: "Personalized Discord Bot",
    projectDescription: "A bot for my friends & I using discord.py API",
    projectDate: new Date(2023, 1 - 1, 1),
    projectDateStr: "Jan '23",
    numImages: 7,
    isPortrait: true,
    githubLink: "https://github.com/shaanduss/discord-bot",
    badges: ["discord.py", "Python", "MongoDB", "Selenium"],
    details: [
      {
        title: "Key Aspects",
        description:
          "This project was my first backend oriented project. \
          I learnt how to call an external API, manage the .env secrets and \
          create features that my friends and I wanted to have. The best \
          feature I built was definitely the time tracking with MongoDB, \
          it was challenging to sync up my Mongo cluster with the related \
          discord tracking - once I decided to track for multiple servers - \
          but it turned out to be a very useful and fun feature.",
      },
      {
        title: "Web Scraping",
        description:
          "The best things I learnt about this project were \
        that I learnt how to use Selenium to web-scrape Pinterest links \
        to a .txt file to then send in a Discord.embed message. While the \
        code is lost (due to poor version control), it was a core part to \
        my journey as a developer as I tried web-scraping for the first time \
        - successfully.",
      },
    ],
  },
  {
    projectID: "jlau",
    projectName: "Personal Chef Website",
    projectDescription: "Portfolio Website with Resume",
    projectDate: new Date(2022, 8 - 1, 1),
    projectDateStr: "Aug '22",
    numImages: 5,
    githubLink: "https://github.com/shaanduss/jordan-lau",
    badges: [
      "React",
      "ChakraUI",
      "UI Design",
      "Front-end",
      "Typescript",
      "Framer Motion",
      "Lightweight Charts",
      "NextJS",
      "Emotion Styles",
      "Theming",
    ],
  },
];
