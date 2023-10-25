import { ButtonProps } from "@/types/components/ButtonDTO";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC, useMemo } from "react";
import { Icon } from "./Icon";
import { ANIMATIONS } from "@/constants/animations";

const Button: FC<ButtonProps> = ({
	label,
	iconProps,
	bg,
	borderWidth = "2",
	borderColor = "primary",
	textColor = "primary",
	textClass,
	type = "submit",
	href,
}) => {
	const hasHref = !!href;

	const btn = useMemo(() => {
		return (
			<motion.button
				variants={ANIMATIONS}
				initial="hide"
				animate="show"
				exit="hide"
				layout
				type={type}
				className={`rounded-full flex-row items-center inline-flex px-6 py-2 ${
					bg && "hover:shadow-lg"
				} ring-${borderWidth} ring-${borderColor} bg-${bg}`}
				whileHover={{
					scale: 1.05,
				}}
				whileTap={{ scale: 0.9 }}
			>
				{Boolean(iconProps?.name) && (
					<span className="mr-2">
						<Icon
							{...iconProps}
							color={`${iconProps?.color ?? textColor}`}
							name={iconProps?.name!}
						/>
					</span>
				)}
				<span
					className={`text-${textColor} font-semibold ${textClass}`}
				>
					{label}
				</span>
			</motion.button>
		);
	}, [
		iconProps,
		label,
		borderWidth,
		borderColor,
		bg,
		textClass,
		textColor,
		type,
	]);

	return hasHref ? <Link href={href}>{btn}</Link> : btn;
};

export default Button;
