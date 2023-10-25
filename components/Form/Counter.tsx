import React, { useState } from "react";
import { motion } from "framer-motion";
import IconButton from "../IconButton";

const Counter = ({ value = 1, max = 5, min = 1, name = "" }) => {
	const [count, setCount] = useState(value);

	const increase = () => {
		if (count < max) {
			setCount((val) => val + 1);
		}
	};

	const decrease = () => {
		if (count > min) {
			setCount((val) => val - 1);
		}
	};

	return (
		<motion.div className="flex items-center">
			<motion.input
				defaultValue={count}
				className="invisible absolute"
				type="number"
				name={name}
			/>
			<IconButton
				name="Minus"
				bg="white"
				color="primary"
				svgProps={{ size: 12 }}
				onClick={decrease}
				className="border-primary border-2 p-0 ${}"
			/>
			<p className="w-8 text-center text-xl">{count}</p>
			<IconButton
				name="Plus"
				bg="white"
				color="primary"
				svgProps={{ size: 12 }}
				onClick={increase}
				className="border-primary border-2 p-0"
			/>
		</motion.div>
	);
};

export default Counter;
