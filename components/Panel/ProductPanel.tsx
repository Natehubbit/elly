import Image from "next/image";
import React, { FC } from "react";
import lady from "@/assets/lady1.jpeg";
import cake from "@/assets/cakeNoBG.png";
import cupCake from "@/assets/cupcake.png";
import milk from "@/assets/milk.png";
import { motion, AnimatePresence } from "framer-motion";
import { ProductPanelProps } from "@/types/components/PanelDTO";
import { righteous } from "@/constants/fonts";
import { Icon } from "../Icon";
import IconButton from "../IconButton";
import Button from "../Button";
import { ANIMATIONS } from "@/constants/animations";
import Link from "next/link";
import Gallery from "../Gallery";

const ProductPanel: FC<ProductPanelProps> = ({ type, onClose }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="justify-center flex flex-col overflow-hidden rounded-xl px-4 shadow-md w-full translate-x-full bg-white"
    >
      <header className="flex relative justify-between items-center border-b-4 border-bg mb-4">
        <motion.h3
          variants={ANIMATIONS}
          initial="slideOutLeft"
          animate="slideInLeft"
          className={`${righteous.className} text-primary`}
          key={type}
        >
          {type.toUpperCase()}
        </motion.h3>
        <div className="flex flex-row items-center space-x-4">
          <IconButton onClick={onClose} color="primary" name="XCircle" />
        </div>
      </header>
      <div className=" flex-1 relative overflow-y-auto">
        <Gallery data={["1", "2", "3", "4", "5", "6", "7", "8", "9"]} />
      </div>
    </motion.div>
  );
};

export default ProductPanel;
