import COLORS from "@/constants/colors";
import { IconProps } from "./IconDTO";
import { LinkProps } from "next/link";

export interface IconButtonProps extends IconProps {
  bg?: keyof typeof COLORS;
  href?: LinkProps["href"];
  onClick?: () => void;
}
