"use client";

import React, { FC, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CutomizePanel: FC<{ children: ReactNode; active?: string }> = ({
	children,
	active,
}) => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{
					opacity: 0,
					translateX: 200,
					// position: "absolute",
					// width: "100%",
				}}
				animate={{
					opacity: 1,
					translateX: 0,
					// transitionEnd: {
					// 	position: "relative",
					// },
				}}
				transition={{
					duration: 0.5,
					// delay: 1,
				}}
				exit={{
					opacity: 0,
					translateX: -500,
					// position: "absolute",
					// width: "100%",
				}}
				className="absolute w-full h-full pb-24 overflow-y-auto items-center"
				// key={active}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default CutomizePanel;
