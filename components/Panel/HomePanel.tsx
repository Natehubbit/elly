import React from "react";
import lady from "@/assets/lady1.jpeg";
import cake from "@/assets/cakeNoBG.png";
import cupCake from "@/assets/cupcake.png";
import milk from "@/assets/milk.png";
import home from "@/assets/home.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ANIMATIONS } from "@/constants/animations";

const HomePanel = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={ANIMATIONS}
        initial="hide"
        animate="show"
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-1 justify-center opacity-0 items-center"
      >
        <div className="relative">
          <Image src={home} className="h-4/5" alt="elvian" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HomePanel;
