import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const tabs = ["Home", "Projects", "Resume", "Contact"];
const routes = ["/", "/projects", "/resume", "/contact"];

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
    <div className="sticky top-0 w-full">
      <nav className="pb-2 pt-3 px-20 border-b border-gray-800">
        <ul className="flex font-medium text-md gap-x-10">
          {tabs.map((item, index) => (
            <motion.li
              key={item}
              initial={false}
              animate={{
                color: item === selectedTab ? "var(--foreground)" : "var(--muted-foreground)",
              }}
              onClick={() => setSelectedTab(item)}
              className="relative rounded-t-[5px] rounded-bl-none rounded-br-none px-4 py-2 cursor-pointer flex justify-between
                items-center min-w-0 select-none bg-none"
            >
              <Link
                to={routes[index]}
                onClick={() => setSelectedTab(item)}
                className="w-full"
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
      </nav>
    </div>
  );
};
