import React, { FC } from "react";
import { motion } from "framer-motion";
import { Icon } from "../Icon";
import { ChipProps } from "@/types/components/ChipDTO";
import { ANIMATIONS } from "@/constants/animations";

export const Chip: FC<ChipProps> = ({ active, label, id, onClick }) => {
	const borderColor = active ? "border-primary" : "border-gray-300";
	return (
		<motion.button
			layout
			onClick={onClick}
			variants={ANIMATIONS}
			animate="scaleShow"
			initial="scaleHide"
			whileTap="scaleTap"
			whileHover="scaleUp"
			type="button"
			className={`border-2 inline-flex px-4 items-center py-1 shadow-sm rounded-full ${borderColor}`}
		>
			<p className={active ? "text-primary" : "text-gray-500"}>{label}</p>
			{active && (
				<motion.span
					variants={ANIMATIONS}
					initial="scaleHide"
					animate="scaleShow"
				>
					<Icon
						svgProps={{
							size: 16,
							className: "absolute -right-2 relative",
						}}
						color="primary"
						name="XCircle"
					/>
				</motion.span>
			)}
		</motion.button>
	);
};
