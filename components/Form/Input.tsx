import React, { FC, InputHTMLAttributes } from "react";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
	className,
	...props
}) => {
	return (
		<input
			className={`
                py-2 px-4 focus:outline-none rounded-lg border-2 focus:bg-white focus:border-primary ${className}
            `}
			{...props}
		/>
	);
};

export default Input;
