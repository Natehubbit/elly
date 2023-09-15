import COLORS from "@/constants/colors";
import { IconProps } from "./IconDTO";
import React, { HTMLProps } from "react";

export interface ButtonProps {
  label: string;
  iconProps?: Partial<IconProps>;
  bg?: string;
  borderColor?: string;
  textColor?: keyof typeof COLORS;
  borderWidth?: string;
  textClass?: HTMLProps<HTMLElement>["className"];
  onClick?: () => void;
}
