import React, { ReactNode } from "react";

const CustomizeCakeLayout = ({ children }: { children: ReactNode }) => {
	return (
		<section className="flex flex-1 absolute h-full w-full flex-row">
			{children}
		</section>
	);
};

export default CustomizeCakeLayout;
