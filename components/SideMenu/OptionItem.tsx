"use client";

import Link from "next/link";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { SideMenuOptionProps } from "@/types/components/SideMenuDTO";

const OptionItem: FC<SideMenuOptionProps> = ({
	href = "",
	active = false,
	label,
	onPress,
}) => {
	return (
		<motion.div
			whileHover={{
				translateX: 10,
				scale: 1.1,
			}}
			whileTap={{
				scale: 1,
			}}
			animate={
				active
					? {
							translateX: 15,
							scale: 1.1,
					  }
					: undefined
			}
			onClick={onPress}
			className={`h-16 w-16 shadow-lg border-2 bg-slate-300 ${
				active ? "border-primary" : "border-transparent"
			} overflow-hidden inline-flex rounded-lg cursor-pointer`}
		>
			<Link
				className="inline-flex h-full w-full items-center justify-center"
				href={href}
			>
				{label}
			</Link>
		</motion.div>
	);
};

export default OptionItem;
