import { Icon } from "@/components/Icon";
import COLORS from "@/constants/colors";
import { ColorBtnProps } from "@/types/components/FormDTO.ts/ColorsDTO";
import { motion } from "framer-motion";
import { FC } from "react";

const ColorBtn: FC<ColorBtnProps> = ({
	color,
	active,
	onDelete,
	closeable = false,
	onClick,
}) => {
	const onColorClick = () => {
		onClick && onClick(color);
	};

	const onDeleteColor = () => {
		// onClick && onClick(undefined)
		onDelete && onDelete(color);
	};

	return (
		<motion.button
			layout
			type="button"
			exit={{ scale: 0 }}
			onClick={onColorClick}
			style={{ background: color }}
			className={`rounded-lg h-16 w-16 relative border-4 ${
				active ? "border-primary z-20" : "transparent"
			}`}
		>
			{closeable && (
				<motion.div
					layout
					exit={{ scale: 0 }}
					onClick={onDeleteColor}
					className="cursor-pointer absolute bg-white rounded-full -top-1 -right-1 z-20"
				>
					<Icon
						name="XCircle"
						svgProps={{ size: 16 }}
						color="primary"
					/>
				</motion.div>
			)}
		</motion.button>
	);
};

export default ColorBtn;
