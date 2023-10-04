import React, { FormHTMLAttributes, HTMLAttributes, useRef } from "react";
import ColorsList from "./ColorsList";
import { righteous } from "@/constants/fonts";
import { ColorBtnListMethods } from "@/types/components/FormDTO.ts/ColorsDTO";
import { Chip } from "@/components/Chips/Chip";
import { AnimatePresence, motion } from "framer-motion";
import Chips from "@/components/Chips";
import Button from "@/components/Button";

const COLORS_FORM = {};

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
		<AnimatePresence>
			<div>
				<header
					className={`text-3xl mb-8 ${righteous.className} text-secondary`}
				>
					Let's Create your Cake!
				</header>
				<form>
					<label htmlFor="colors">
						What colors will you love on your cake?
					</label>
					<motion.div layout id="colors" className="mt-3 mb-8">
						<ColorsList ref={selectedColorsRef} type="display" />
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
						<Chips />
					</motion.div>
					<label htmlFor="flavour">Any toppings for your cake?</label>
					<motion.div layout id="flavour" className="mt-3 mb-8">
						<Chips
							data={[
								{ id: "cherries", label: "Cherries" },
								{ id: "chocoballs", label: "Chocolate Balls" },
								{ id: "oreos", label: "Oreos" },
							]}
						/>
					</motion.div>
					<label htmlFor="flavour">How large do you want it?</label>
					<motion.div layout id="flavour" className="mt-3 mb-8">
						<Chips
							data={[
								{ id: "xs", label: "Very Small" },
								{ id: "sm", label: "Small" },
								{ id: "lg", label: "Large" },
								{ id: "xl", label: "Extra Large" },
							]}
						/>
					</motion.div>
					<div className="mt-16">
						<Button
							type="button"
							borderWidth="0"
							bg="secondary"
							textColor="white"
							label="Next"
							iconProps={{ name: "ArrowRight" }}
						/>
					</div>
				</form>
			</div>
		</AnimatePresence>
	);
};
