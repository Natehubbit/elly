import { ButtonProps } from "@/types/components/ButtonDTO";
import React, { FC } from "react";
import { Icon } from "./Icon";
import COLORS from "@/constants/colors";
import { motion } from "framer-motion";

const Button: FC<ButtonProps> = ({
  label,
  iconProps,
  bg,
  borderWidth = "2",
  borderColor = "primary",
  textColor = "primary",
  textClass,
}) => {
  return (
    <motion.button
      className={`rounded-full flex-row items-center inline-flex px-6 py-2 ring-${borderWidth} ring-${borderColor} bg-${bg}`}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.9 }}
    >
      {Boolean(iconProps?.name) && (
        <span className="mr-2">
          <Icon
            {...iconProps}
            color={`${iconProps?.color ?? textColor}`}
            name={iconProps?.name!}
          />
        </span>
      )}
      <span className={`text-${textColor} font-semibold ${textClass}`}>
        {label}
      </span>
    </motion.button>
  );
};

export default Button;
