import COLORS from "@/constants/colors";
import { IconProps } from "./IconDTO";
import { LinkProps } from "next/link";
import { HTMLAttributes } from "react";

export interface IconButtonProps extends IconProps {
	bg?: keyof typeof COLORS;
	href?: LinkProps["href"];
	className?: HTMLAttributes<HTMLButtonElement>["className"];
	onClick?: () => void;
}
