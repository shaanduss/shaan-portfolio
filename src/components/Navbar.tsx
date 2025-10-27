import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const tabs = ["Home", "Projects", "Resume", "Contact"];
const routes = ["/", "/projects", "/resume", "/contact"];

const GithubSVG = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("Home");

  useEffect(() => {
    const index = routes.indexOf(location.pathname);
    if (index !== -1) {
      setSelectedTab(tabs[index]);
    } else {
      setSelectedTab(""); // or some default/fallback
    }
  }, [location.pathname]);

  return (
    <div className="sticky top-0 w-full z-100 backdrop-blur-3xl">
      <nav className="pb-2 pt-3 px-20 shadow-xl flex justify-between">
        <ul className="flex font-medium text-md gap-x-10">
          {tabs.map((item, index) => (
            <motion.li
              key={item}
              initial={false}
              animate={{
                color:
                  item === selectedTab
                    ? "var(--foreground)"
                    : "var(--muted-foreground)",
              }}
              onClick={() => setSelectedTab(item)}
              className="relative rounded-t-[5px] rounded-bl-none rounded-br-none px-4 py-2 cursor-pointer flex justify-between
                items-center min-w-0 select-none bg-none"
            >
              <Link
                to={routes[index]}
                onClick={() => setSelectedTab(item)}
                className="w-full cursor-pointer"
              >
                {item}
              </Link>
              {item === selectedTab && (
                <motion.div
                  layoutId="underline"
                  id="underline"
                  className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[var(--primary)]"
                />
              )}
            </motion.li>
          ))}
        </ul>
        <a href="/">
          <Button className="cursor-pointer" variant="outline">
            <GithubSVG />
            GitHub
          </Button>
        </a>
      </nav>
    </div>
  );
};
