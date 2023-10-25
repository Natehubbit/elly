import React, { FC, TextareaHTMLAttributes } from "react";

export const Textarea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
	className,
	...props
}) => {
	return (
		<textarea
			className={`py-2 px-4 w-72 h-28 focus:outline-none rounded-lg border-2 focus:bg-white focus:border-primary ${className}`}
			{...props}
		/>
	);
};
