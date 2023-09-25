import { IconButtonProps } from "@/types/components/IconButtonDTO";
import React, { FC } from "react";
import { Icon } from "./Icon";
import { motion } from "framer-motion";
import COLORS from "@/constants/colors";
import Link from "next/link";

const IconButton: FC<IconButtonProps> = ({ href, onClick, ...props }) => {
  const btn = (
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
  return href ? <Link href={href}>{btn}</Link> : btn;
};

export default IconButton;
