import { IconProps } from "./IconDTO";

export interface IconButtonProps extends IconProps {
  onClick?: () => void;
}
