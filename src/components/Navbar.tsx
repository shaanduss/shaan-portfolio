import { motion } from "motion/react";
import { useState } from "react";

export const Navbar: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const tabs = ["Home", "Projects", "About", "Contact"];

  return (
    <div className="sticky top-0 w-full">
      <nav className="bg-[#fdfdfd] py-2 px-20 border-b border-gray-200">
        <ul className="flex font-medium text-sm gap-x-10">
          {tabs.map((item) => (
            <motion.li
              key={item}
              initial={false}
              onClick={() => setSelectedTab(item)}
              className="relative rounded-t-[5px] rounded-bl-none rounded-br-none px-4 py-2 cursor-pointer flex justify-between
                items-center min-w-0 select-none text-foreground bg-none"
            >
              {item}
              {item === selectedTab && (
                <motion.div
                  layoutId="underline"
                  id="underline"
                  className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-[var(--secondary)]"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
