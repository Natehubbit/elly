import COLORS from "@/constants/colors";
import * as FeatherIcon from "react-feather";

export interface IconProps {
  name: keyof typeof FeatherIcon;
  color?: keyof typeof COLORS;
  svgProps?: FeatherIcon.IconProps;
}
