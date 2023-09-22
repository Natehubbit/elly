import COLORS from "@/constants/colors";
import { IconProps } from "./IconDTO";

export interface IconButtonProps extends IconProps {
  bg?: keyof typeof COLORS;
  onClick?: () => void;
}
