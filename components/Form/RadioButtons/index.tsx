import React, { FC, forwardRef, useState } from "react";
import { RadioButton } from "./Button";
import { RadioButtonsProps } from "@/types/components/RadioDTO";

export const RadioButtons: FC<RadioButtonsProps> = ({ data = [] }, ref) => {
	const [active, setActive] = useState<string>();
	console.log("acc", active);
	return (
		<div className="flex gap-x-4 items-baseline">
			{data.map((item) => {
				const onClickRadio = () => setActive(item.id);
				const isActive = active === item.id;
				console.log("isACTIVE", isActive);
				return (
					<RadioButton
						key={item.id}
						{...item}
						onClick={onClickRadio}
						active={isActive}
					/>
				);
			})}
		</div>
	);
};
