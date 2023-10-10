"use client";

import React, { FormHTMLAttributes, HTMLAttributes, useRef } from "react";
import ColorsList from "./ColorsList";
import { righteous } from "@/constants/fonts";
import { ColorBtnListMethods } from "@/types/components/FormDTO.ts/ColorsDTO";
import { Chip } from "@/components/Chips/Chip";
import { AnimatePresence, motion } from "framer-motion";
import Chips from "@/components/Chips";
import Button from "@/components/Button";
import { RadioButtons } from "@/components/Form/RadioButtons";
import { CAKE_SIZE_RADIO } from "@/constants/ui";
import Input from "../Input";

export const ColorsForm = () => {
	const selectedColorsRef = useRef<ColorBtnListMethods>(null);
	const colorPickerRef = useRef<ColorBtnListMethods>(null);

	const onSelect = (val?: string) => {
		selectedColorsRef.current?.add(val);
	};

	const onDelete = (val?: string) => {
		selectedColorsRef.current?.delete(val);
	};

	return (
		<div className="flex h-full flex-grow flex-col">
			<AnimatePresence>
				<header
					className={`text-3xl mb-8 ${righteous.className} text-secondary`}
				>
					{`Let's Create your Cake!`}
				</header>
				{/* <div className="flex-1 flex relative"> */}
				<form className="h-full flex flex-col relative">
					<div className="flex-1 pr-8 relative overflow-hidden overflow-y-auto">
						<label htmlFor="colors">
							What colors will you love on your cake?
						</label>
						<motion.div
							layout
							id="colors"
							className="mt-3 mb-8 space-y-4"
						>
							<ColorsList
								ref={selectedColorsRef}
								type="display"
							/>
							<ColorsList
								ref={colorPickerRef}
								onDelete={onDelete}
								callback={onSelect}
							/>
						</motion.div>
						<label htmlFor="flavour">
							What flavour(s) do you want?
						</label>
						<motion.div layout id="flavour" className="mt-3 mb-8">
							<Chips data={[]} callback={console.log} />
						</motion.div>
						<label htmlFor="flavour">
							Any toppings for your cake?
						</label>
						<motion.div layout id="flavour" className="mt-3 mb-8">
							<Chips
								data={[
									{ id: "cherries", label: "Cherries" },
									{
										id: "chocoballs",
										label: "Chocolate Balls",
									},
									{ id: "oreos", label: "Oreos" },
								]}
								callback={console.log}
							/>
						</motion.div>
						<label htmlFor="flavour">
							How large do you want your cake?
						</label>
						<motion.div layout id="flavour" className="mt-3 mb-8">
							<RadioButtons
								callback={console.log}
								data={CAKE_SIZE_RADIO}
							/>
						</motion.div>
						<label htmlFor="flavour">
							How many tiers do you want your cake to have?
						</label>
						<motion.div layout id="flavour" className="mt-3">
							<Input
								className="w-20"
								defaultValue={"1"}
								type="number"
								max={5}
								min={1}
								maxLength={1}
							/>
						</motion.div>
					</div>
					<div className="mt-16 flex">
						<Button
							type="submit"
							borderWidth="0"
							bg="secondary"
							textColor="white"
							label="Next"
							iconProps={{ name: "ArrowRight" }}
						/>
					</div>
				</form>
			</AnimatePresence>
		</div>
	);
};
