"use client";

import React, { useMemo, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import SideMenu from "@/components/SideMenu";
import CustomizePanel from "@/components/Panel/CutomizePanel";
import { CUSTOMIZE_CAKE_FORM, CUSTOMIZE_CAKE_SIDE_MENU } from "@/constants/ui";
import Colors from "@/components/Form/Colors/ColorsList";
import { ColorsForm } from "@/components/Form/Colors";
import { Footer } from "@/components/Footer";
import Container from "@/components/Container";
import { AnimatePresence } from "framer-motion";

const CustomCake = () => {
	const query = useSearchParams();
	const activeRouteItem = useMemo(
		() => query.get("active") ?? undefined,
		[query]
	);

	const [activeItem, setActiveItem] = useState(activeRouteItem);

	const onSideMenuChange = (id?: string) => {
		setActiveItem(id);
	};

	return (
		<Container>
			<SideMenu
				options={CUSTOMIZE_CAKE_SIDE_MENU}
				activeId={activeItem}
				callback={onSideMenuChange}
			/>
			<AnimatePresence>
				<CustomizePanel key={activeItem}>
					<div className="px-[30%] w-full h-full flex flex-col">
						<ColorsForm />
					</div>
				</CustomizePanel>
			</AnimatePresence>
		</Container>
	);
};

export default CustomCake;
