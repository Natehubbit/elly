import { IconButtonProps } from "@/types/components/IconButtonDTO";
import React, { FC } from "react";
import { Icon } from "./Icon";
import { motion } from "framer-motion";

const IconButton: FC<IconButtonProps> = ({ onClick, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="justify-center items-center p-1"
      onClick={onClick}
    >
      <Icon {...props} />
    </motion.button>
  );
};

export default IconButton;
