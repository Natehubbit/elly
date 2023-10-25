import React, { FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "../../Icon";
import { RadioButtonProps } from "@/types/components/RadioDTO";

export const RadioButton: FC<RadioButtonProps> = ({
	label,
	icon,
	value,
	id = "large",
	field = "options",
	onClick,
	active,
	text,
}) => {
	const [isActive, setIsActive] = useState(active ?? false);

	const radioRef = useRef<HTMLInputElement>(null);

	const onClickRadio = (val = true) => {
		if (radioRef.current) {
			radioRef.current.checked = val;
		}
		setIsActive(val);
	};

	useEffect(() => {
		onClickRadio(active ?? false);
	}, [active]);

	const borderColor = isActive ? "border-primary" : "border-gray-300";
	const iconColor = isActive ? "stroke-primary" : "stroke-gray-400";
	const textColor = isActive ? "text-primary" : "text-gray-400";

	return (
		<motion.button
			type="button"
			onClick={onClick}
			className="inline-flex relative items-center justify-center flex-col"
		>
			<label className="cursor-pointer" htmlFor={id}>
				<span
					className={`bg-white h-16 w-16 flex justify-center items-center rounded-lg ${borderColor} border-2`}
				>
					{icon && (
						<Icon
							svgProps={{ className: `${iconColor}` }}
							name={icon}
						/>
					)}
					{<p className={textColor}>{text}</p>}
				</span>
				{label && <p>{label}</p>}
			</label>
			<motion.input
				ref={radioRef}
				id={id}
				type="radio"
				name={field}
				defaultChecked={active}
				value={value}
				className="invisible absolute"
			></motion.input>
		</motion.button>
	);
};
