"use client";

import Button from "@/components/Button";
import Chips from "@/components/Chips";
import { RadioButtons } from "@/components/Form/RadioButtons";
import { righteous } from "@/constants/fonts";
import { CAKE_SIZE_RADIO, FLAVOURS, OCCASSIONS } from "@/constants/ui";
import { ColorBtnListMethods } from "@/types/components/FormDTO.ts/ColorsDTO";
import { AnimatePresence, motion } from "framer-motion";
import {
	FormEvent,
	FormEventHandler,
	Fragment,
	useEffect,
	useRef,
	useState,
} from "react";
import ColorsList from "./Colors/ColorsList";
import Input from "./Input";
import { ANIMATIONS } from "@/constants/animations";
import Counter from "./Counter";
import {
	usePathname,
	useRouter,
	useParams,
	useSearchParams,
} from "next/navigation";
import { Select } from "../Select";
import { SelectProps } from "@/types/components/SelectDTO";
import { debounce } from "@/utils/helpers";
import { formToJSON } from "axios";
import { Textarea } from "./Textarea";
import CakeDeliveryForm from "./CakeDelivery";

const CakeInfoForm = ({ colors }: { colors: string[] }) => {
	const [showOccassionInput, setShowOccassionInput] = useState(false);

	const selectedColorsRef = useRef<ColorBtnListMethods>(null);
	const colorPickerRef = useRef<ColorBtnListMethods>(null);
	const occassionInputRef = useRef<HTMLInputElement>(null);

	const { push } = useRouter();
	const search = useSearchParams();

	const mode = search.get("form") ?? "info";

	const isInfo = mode === "info";
	const isTheme = mode === "theme";

	const getHeader = () => {
		if (isTheme) return "Let's get your cake to you!";
		return "Let's Create your Cake!";
	};

	const onSelect = (val?: string) => {
		selectedColorsRef.current?.add(val);
	};

	const onDelete = (val?: string) => {
		selectedColorsRef.current?.delete(val);
	};

	const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		console.log(selectedColorsRef.current?.getColors());
		e.preventDefault();
		if (isInfo) {
			push("?form=theme");
			return; //e.preventDefault();
		}
		const result = formToJSON(e.currentTarget);
		console.log("RESULT", result);
	};

	const onSelectChange: SelectProps["onChange"] = (val) => {
		const isOther = val === "other";
		setShowOccassionInput(isOther);
	};

	const focusOccassionInput = () => {
		// TODO: `Fix Uncaught TypeError: Illegal invocation`
		occassionInputRef.current?.focus &&
			debounce(occassionInputRef.current.focus)();
	};

	useEffect(() => {
		if (showOccassionInput) {
			focusOccassionInput();
		}
	}, [showOccassionInput]);

	return (
		<div className="flex h-full items-center flex-col">
			<motion.form
				variants={ANIMATIONS}
				exit={"hide"}
				className="flex pl-5 h-full flex-col lg:w-1/2 relative"
				onSubmit={onSubmit}
			>
				<AnimatePresence key={mode}>
					<header
						className={`text-3xl mb-8 ${righteous.className} text-secondary`}
						key={"header"}
					>
						{getHeader()}
					</header>
					{isInfo ? (
						<Fragment key={"info"}>
							<div className="flex-1 pr-8 relative overflow-x-visible overflow-y-auto">
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
										colors={colors}
										onDelete={onDelete}
										callback={onSelect}
									/>
								</motion.div>
								<label htmlFor="flavour">
									What flavour(s) do you want?
								</label>
								<motion.div
									layout
									id="flavour"
									className="mt-3 mb-8"
								>
									<Chips
										data={FLAVOURS}
										callback={console.log}
									/>
								</motion.div>
								<label htmlFor="flavour">
									Want any toppings on your cake?
								</label>
								<motion.div
									layout
									id="flavour"
									className="mt-3 mb-8"
								>
									<Chips
										data={[
											{
												id: "cherries",
												label: "Cherries",
											},
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
								<motion.div
									layout
									id="flavour"
									className="mt-3 mb-8"
								>
									<RadioButtons
										callback={console.log}
										data={CAKE_SIZE_RADIO}
									/>
								</motion.div>
								<label htmlFor="flavour">
									How many tiers do you want your cake to
									have?
								</label>
								<motion.div
									layout
									id="flavour"
									className="mt-3 mb-8"
								>
									<Counter name="tiers" />
								</motion.div>
								<label htmlFor="occassion">
									What is the occassion?
								</label>
								<motion.div
									layout
									id="flavour"
									className="mt-3 mb-8 flex space-x-2"
								>
									<Select
										placeholder="Occassion"
										id="occassion"
										options={OCCASSIONS}
										onChange={onSelectChange}
									/>
									{showOccassionInput && (
										<Input
											ref={occassionInputRef}
											placeholder="Occassion"
										/>
									)}
								</motion.div>
								<label htmlFor="inscription">
									Want an inscription on the cake?
								</label>
								<motion.div
									layout
									id="flavour"
									className="mt-3 mb-8 flex space-x-2"
								>
									<Input
										ref={occassionInputRef}
										placeholder="Happy Birthday Jessie"
									/>
								</motion.div>
								<label htmlFor="inscription">
									Anything we should take note of?
								</label>
								<motion.div
									layout
									id="flavour"
									className="mt-3 mb-8 flex space-x-2"
								>
									<Textarea placeholder="No peanuts. I am highly allergic..." />
								</motion.div>
							</div>
						</Fragment>
					) : (
						<div className="h-full" key="theme">
							<CakeDeliveryForm />
						</div>
					)}
					<div key="submit" className="mt-10 flex">
						<Button
							type="submit"
							borderWidth="0"
							bg="secondary"
							textColor="white"
							label="Next"
							iconProps={{ name: "ArrowRight" }}
						/>
					</div>
				</AnimatePresence>
			</motion.form>
		</div>
	);
};

export default CakeInfoForm;
