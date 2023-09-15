import COLORS from "@/constants/colors";
import { IconProps } from "@/types/components/IconDTO";
import React, { FC } from "react";
import * as FeatherIcon from "react-feather";

export const Icon: FC<IconProps> = ({ name, color = "text", svgProps }) => {
  const IconComponent = FeatherIcon[name];
  return <IconComponent {...svgProps} color={COLORS[color]} />;
};
