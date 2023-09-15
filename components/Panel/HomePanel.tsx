import React from "react";
import lady from "@/assets/lady1.jpeg";
import cake from "@/assets/cakeNoBG.png";
import cupCake from "@/assets/cupcake.png";
import milk from "@/assets/milk.png";
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
          <Image src={lady} height={500} className="rounded-full" alt="lady" />
          <Image
            src={cake}
            alt="cake"
            className="absolute -left-4 -top-24 -rotate-12"
            height={200}
          />
          <Image
            src={cupCake}
            alt="cupcake"
            height={200}
            className="-right-32 absolute top-28 rotate-12"
          />
          <Image
            src={milk}
            alt="milk"
            height={200}
            className="absolute -bottom-10 -left-6 rotate-12"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HomePanel;
