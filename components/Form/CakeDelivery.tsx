import React, { ChangeEventHandler } from "react";
import { motion } from "framer-motion";
import Input from "./Input";
import { Tabs } from "../Tabs";

const CakeDeliveryForm = () => {
	const onDateChange: ChangeEventHandler<HTMLInputElement> = ({
		target: { value },
	}) => {
		console.log(value);
	};

	return (
		<div>
			<label htmlFor="when">When do you want it?</label>
			<motion.div layout id="when" className="mt-3 mb-8 flex space-x-2">
				<Input type="date" onChange={onDateChange} />
			</motion.div>
			<label htmlFor="delivery">Want us to deliver to you?</label>
			<motion.div
				layout
				id="delivery"
				className="mt-3 mb-8 flex space-x-2"
			>
				<Tabs />
			</motion.div>
		</div>
	);
};

export default CakeDeliveryForm;
