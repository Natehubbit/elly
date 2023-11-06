import { karla } from "@/constants/fonts";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Elvian Cakes",
	description: "Center for worldclass cakes",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/logo.png" sizes="any" />
			</head>
			<body className={karla.className}>{children}</body>
		</html>
	);
}
