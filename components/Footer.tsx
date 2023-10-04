import React from "react";
import wave from "@/assets/wave.svg";
import Image from "next/image";

export const Footer = () => {
	return (
		<footer
			className={`
        flex
        -z-2 
        w-screen
        before:flex
        before:h-80
        before:w-full
        before:absolute
        before:bg-footer 
        before:bottom-0
        before:bg-cover 
        before:bg-no-repeat 
        before:-z-20 
        before:bg-center`}
		></footer>
	);
};
