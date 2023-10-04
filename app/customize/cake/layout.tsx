import React, { ReactNode } from "react";

const CustomizeCakeLayout = ({ children }: { children: ReactNode }) => {
	return <section className="flex flex-row h-screen">{children}</section>;
};

export default CustomizeCakeLayout;
