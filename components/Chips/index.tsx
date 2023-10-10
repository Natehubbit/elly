import React, {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from "react";
import { motion } from "framer-motion";
import {
	ChipProps,
	ChipsMethods,
	ChipsProps,
} from "@/types/components/ChipDTO";
import { Chip } from "./Chip";

const Chips = forwardRef<ChipsMethods, ChipsProps>(
	(
		{
			data = [
				{ id: "chocolate", label: "Chocolate" },
				{ id: "cheese", label: "Cheese" },
				{ id: "carrot", label: "carrot" },
			],
			callback,
		},
		ref
	) => {
		console.log(data.length);
		const [selected, setSelected] = useState<string[]>([]);
		const selectedRef = useRef(selected);

		const onUpdate = (id?: string) => {
			console.log("III", id);
			if (id) {
				setSelected((val) =>
					val.includes(id)
						? val.filter((item) => item !== id)
						: [...val, id]
				);
			}
		};

		const isActive = (id: string) => {
			return selected.includes(id);
		};

		useImperativeHandle(
			ref,
			() => ({
				getChips() {
					return selectedRef.current;
				},
			}),
			[]
		);

		useEffect(() => {
			selectedRef.current = selected;
		}, [selected]);

		return (
			<motion.div
				layout
				className="flex flex-row gap-x-2 gap-y-2 content-end flex-wrap"
			>
				{data.map((item) => {
					const onClick = () => onUpdate(item.id);

					return (
						<Chip
							{...item}
							active={isActive(item.id!)}
							key={item.id}
							onClick={onClick}
						/>
					);
				})}
			</motion.div>
		);
	}
);

Chips.displayName = "Chips";

export default Chips;
