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

const ProductPanel: FC<ProductPanelProps> = ({ type, onClose }) => {
  return (
    <motion.div
      initial={{ x: "100%", display: "none" }}
      animate={{ x: 0, display: "block" }}
      exit={{ x: "100%" }}
      className="justify-center items-center rounded-xl px-4  shadow-md relative w-full h-full translate-x-full bg-white"
    >
      <header className="flex justify-between items-center border-b-4 border-bg">
        <motion.h3
          variants={ANIMATIONS}
          initial="slideOutLeft"
          animate="slideInLeft"
          className={`${righteous.className} text-primary`}
          key={type}
        >
          {type.toUpperCase()}
        </motion.h3>
        <IconButton onClick={onClose} color="primary" name="XCircle" />
      </header>
    </motion.div>
  );
};

export default ProductPanel;
