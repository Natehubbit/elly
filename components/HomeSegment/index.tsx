"use client";

import { righteous } from "@/constants/fonts";
import { ProductCardListMethods } from "@/types/components/CardDTO";
import { PanelGroupMethods } from "@/types/components/PanelDTO";
import { debounce } from "@/utils/helpers";
import { useSearchParams } from "next/navigation";
import React, { useRef, useMemo, useCallback, useEffect } from "react";
import ProductCardList from "../Card/ProductList";
import { CATEGORY_DATA } from "@/constants/ui";
import HomePanel from "../Panel/HomePanel";
import PanelGroup from "../Panel/PanelGroup";

const HomeSegment = () => {
	const search = useSearchParams();

	const panelRef = useRef<PanelGroupMethods>(null);
	const productCardListRef = useRef<ProductCardListMethods>(null);

	const onSelectCategory = (id?: string) => {
		panelRef.current?.switch(id);
	};

	const onClosePanel = () => {
		productCardListRef.current?.switch();
		panelRef.current?.switch();
	};

	const init = useCallback(() => {
		const currentType = search.get("type");
		productCardListRef.current?.switch(currentType!);
		panelRef.current?.switch(currentType!);
	}, [search]);

	const debounceRef = useMemo(() => {
		return debounce(init, 500);
	}, [init]);

	useEffect(() => {
		debounceRef();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<section className="px-20 flex flex-1 justify-center pb-16 flex-col">
				<header className="mb-14">
					<h1 className={` text-5xl text-secondary`}>
						<span className={righteous.className}>
							Want a delicacy?
							{/* <TextGroupAnimated />? */}
						</span>
					</h1>
					<p className="text-primary">Choose your pick</p>
				</header>
				<ProductCardList
					ref={productCardListRef}
					data={CATEGORY_DATA}
					callback={onSelectCategory}
				/>
			</section>
			<section className="flex h-full w-full relative pb-8 pr-4">
				<div className="absolute h-full w-full flex">
					<HomePanel />
				</div>
				<PanelGroup onClose={onClosePanel} ref={panelRef} />
			</section>
		</>
	);
};

export default HomeSegment;
