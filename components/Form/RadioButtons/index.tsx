import { RadioButtonsProps } from "@/types/components/RadioDTO";
import { FC, useState } from "react";
import { RadioButton } from "./Button";

export const RadioButtons: FC<RadioButtonsProps> = ({ data = [] }, ref) => {
	const [active, setActive] = useState<string>();
	return (
		<div className="flex gap-x-4 items-baseline">
			{data.map((item) => {
				const onClickRadio = () => setActive(item.id);
				const isActive = active === item.id;
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
