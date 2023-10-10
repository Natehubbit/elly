import Container from "@/components/Container";
import HomeSegment from "@/components/HomeSegment";
import React from "react";

export default function Home() {
	return (
		<section className="flex h-screen flex-col items-center justify-between overflow-hidden">
			<Container>
				<HomeSegment />
			</Container>
		</section>
	);
}
