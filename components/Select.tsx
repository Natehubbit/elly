import { SelectProps } from "@/types/components/SelectDTO";
import React, { ChangeEventHandler, FC, useEffect, useState } from "react";

export const Select: FC<SelectProps> = ({
	id = "",
	options = [],
	placeholder = "Occassion",
	value: defaultValue,
	onChange: onChangeValue,
}) => {
	const [value, setValue] = useState(defaultValue);

	const onChange: ChangeEventHandler<HTMLSelectElement> = ({ target }) => {
		setValue(target.value);
	};

	useEffect(() => {
		if (onChangeValue) {
			onChangeValue(value);
		}
	}, [value]);

	return (
		<select
			id={id}
			onChange={onChange}
			value={value}
			className="bg-white text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary cursor-pointer block p-2.5 dark:focus:ring-primary outline-none dark:focus:border-primary"
		>
			<option value="placeholder">{placeholder}</option>
			{options &&
				options.length &&
				options.map((option) => {
					return (
						<option key={option.id} value={option.id}>
							{option.label}
						</option>
					);
				})}
		</select>
	);
};
