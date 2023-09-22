import { IconButtonProps } from "@/types/components/IconButtonDTO";
import React, { FC } from "react";
import { Icon } from "./Icon";
import { motion } from "framer-motion";
import COLORS from "@/constants/colors";

const IconButton: FC<IconButtonProps> = ({ onClick, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex justify-center rounded-full items-center p-2"
      style={{ backgroundColor: props?.bg && COLORS[props.bg] }}
      onClick={onClick}
    >
      <Icon {...props} />
    </motion.button>
  );
};

export default IconButton;
