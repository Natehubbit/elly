"use client";
import {
	ColorBtnListMethods,
	ColorBtnListProps,
	CustomColorPickerMethods,
} from "@/types/components/FormDTO.ts/ColorsDTO";
import React, {
	FC,
	forwardRef,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
	useState,
} from "react";
import ColorBtn from "./ColorBtn";
import { CUSTOMIZE_CAKE_FORM } from "@/constants/ui";
import { SketchPicker } from "react-color";
import CustomColorPicker from "./CustomColorPicker";
import { LayoutGroup, motion } from "framer-motion";
import { Icon } from "@/components/Icon";

// const genColors = (): string[]|undefined => {
//   const colors = CUSTOMIZE_CAKE_FORM['colors']
//   const id = Math.floor(Math.random()*colors.length+1).toString()
//   const randomColors = colors.find(item=>item.id===id)
//   return randomColors?.value
// }

const getMyColors = (): string[] | undefined => {
	const colors = CUSTOMIZE_CAKE_FORM["colors"];
	const randomColors = colors.find((item) => item.id === "1");
	return randomColors?.value;
};

const ColorsList = forwardRef<ColorBtnListMethods, ColorBtnListProps>(
	({ colors, type = "picker", length = 5, onDelete, callback }, ref) => {
		const [color, setColor] = useState<string>();
		const [selected, setSelected] = useState(colors);

		const colorsRef = useRef<typeof colors>(colors);
		const selectedRef = useRef<string[]>();
		const pickerRef = useRef<CustomColorPickerMethods>(null);

		const isPicker = type === "picker";

		const onClick = (val?: string) => {
			if (isPicker) {
				pickerRef.current?.delete();
				setColor((prevColor) => (prevColor === val ? undefined : val));
			}
		};

		const onSelectCustom = (val?: string) => {
			setColor(val);
		};

		const onDeleteColor = (color?: string) => {
			console.log("hdh", color);
			if (!color) return;
			onDelete && onDelete(color);
			setSelected((val) =>
				val ? val.filter((item) => item !== color) : [color]
			);
		};

		const onAddColor = (color?: string) => {
			console.log("sssaddd", color);
			if (!color) return;
			setSelected((val) => {
				if (val && val.includes(color)) return val;
				return val ? [...val, color] : [color];
			});
		};

		const getColors = () => {
			return selectedRef.current;
		};

		const colorList = isPicker ? colors ?? colorsRef.current : selected;
		const isMaxLength = colorList && colorList?.length >= length;

		useEffect(() => {
			selectedRef.current = selected;
		}, [selected]);

		useEffect(() => {
			callback && callback(color);
		}, [color]);

		useImperativeHandle(
			ref,
			() => ({
				delete: onDeleteColor,
				add: onAddColor,
				getColors,
			}),
			[]
		);

		return (
			<motion.div layout className="flex flex-row space-x-1 items-center">
				{colorList?.slice(0, length)?.map((item) => {
					const isActive = color === item;
					return (
						<ColorBtn
							onDelete={onDeleteColor}
							closeable={!isPicker}
							active={isActive}
							onClick={onClick}
							key={item}
							color={item}
						/>
					);
				})}
				{!isPicker && !isMaxLength && (
					<motion.button
						type="button"
						layout
						className={`italic text-xs text-gray-500 rounded-lg h-16 w-16 relative border-2 border-gray-300 border-dashed justify-center items-center flex`}
					>
						Choose a color below
					</motion.button>
				)}
				{isPicker && (
					<CustomColorPicker
						onDelete={onDeleteColor}
						ref={pickerRef}
						onSelect={onSelectCustom}
					/>
				)}
			</motion.div>
		);
	}
);

ColorsList.displayName = "ColorsList";

export default ColorsList;
