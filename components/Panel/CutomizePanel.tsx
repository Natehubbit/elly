import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";

const CutomizePanel: FC<{ children: ReactNode; active?: string }> = ({
  children,
  active,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: 200,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="flex flex-1 items-center"
      key={active}
    >
      {children}
    </motion.div>
  );
};

export default CutomizePanel;
