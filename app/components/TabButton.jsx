import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "" : "text-[#ADB7BE]";

  return (
    <button
      onClick={selectTab}
      className={`px-4 py-2 rounded-md transition-colors duration-300 focus:outline-none ${buttonClasses} ${
        active ? "bg-primary-700 hover:bg-primary-600" : "hover:bg-gray-700"
      }`}
    >
      <p className={`font-semibold ${buttonClasses}`}>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2"
      ></motion.div>
    </button>
  );
};

export default TabButton;
