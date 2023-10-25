import React, {
	FC,
	InputHTMLAttributes,
	forwardRef,
	useImperativeHandle,
	useRef,
} from "react";

const Input = forwardRef<
	HTMLInputElement,
	InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
	return (
		<input
			ref={ref}
			className={`
					py-2 px-4 focus:outline-none rounded-lg border-2 focus:bg-white focus:border-primary ${className}
				`}
			{...props}
		/>
	);
});

export default Input;
