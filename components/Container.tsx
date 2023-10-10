import React, { FC } from "react";
import Navbar from "./Navbar";
import { ContainerProps } from "@/types/components/ContainerDTO";
import { Footer } from "./Footer";

const Container: FC<ContainerProps> = ({ children, bg = "bg-bg" }) => {
	return (
		<section
			className={`flex flex-1 flex-col w-full relative overflow-hidden`}
		>
			<Navbar />
			<div className="flex flex-1 relative overflow-hidden flex-row">
				{children}
			</div>
			<Footer />
		</section>
	);
};

export default Container;
