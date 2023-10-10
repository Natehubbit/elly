import { ANIMATIONS } from "@/constants/animations";
import { righteous } from "@/constants/fonts";
import { ProductPanelProps } from "@/types/components/PanelDTO";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import Gallery from "../Gallery";
import IconButton from "../IconButton";
import Button from "../Button";

const ProductPanel: FC<ProductPanelProps> = ({ type, onClose }) => {
	const isCake = type === "cakes";
	return (
		<motion.div
			initial={{ x: "100%" }}
			animate={{ x: 0 }}
			exit={{ x: "100%" }}
			className="justify-center flex flex-col absolute h-full overflow-hidden rounded-xl px-4 shadow-md w-full pb-4 bg-white"
		>
			<header className="flex relative justify-between items-center py-4">
				<motion.h3
					variants={ANIMATIONS}
					initial="slideOutLeft"
					animate="slideInLeft"
					className={`${righteous.className} text-primary`}
					key={type}
				>
					{type.toUpperCase()}
				</motion.h3>
				<div className="flex flex-row items-center space-x-4">
					<AnimatePresence>
						{isCake && (
							<Button
								href={"/customize/cake"}
								iconProps={{ name: "Plus" }}
								label="Custom Cake"
							/>
						)}
					</AnimatePresence>
					<IconButton
						href={"/"}
						onClick={onClose}
						color="primary"
						name="XCircle"
					/>
				</div>
			</header>
			<div className=" flex-1 relative overflow-y-auto">
				{/* TODO: OPTIMIZE GALLERY TO CUT DOWN ANIMATION STUTTER ON RENDER */}
				<Gallery data={["1", "2", "3", "4", "5", "6", "7", "8", "9"]} />
			</div>
		</motion.div>
	);
};

export default ProductPanel;
