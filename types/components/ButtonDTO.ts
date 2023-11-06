import COLORS from "@/constants/colors";
import { IconProps } from "./IconDTO";
import React, { HTMLProps } from "react";
import { LinkProps } from "next/link";

export interface ButtonProps {
	label: string;
	iconProps?: Partial<IconProps>;
	bg?: string;
	borderColor?: string;
	textColor?: keyof typeof COLORS;
	borderWidth?: string;
	textClass?: HTMLProps<HTMLElement>["className"];
	className?: HTMLProps<HTMLElement>["className"];
	href?: LinkProps["href"];
	type?: "submit" | "button" | "reset";
	onClick?: () => void;
}
