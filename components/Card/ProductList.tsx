"use client";

import React, {
	FC,
	forwardRef,
	useEffect,
	useImperativeHandle,
	useState,
} from "react";
import ProductCard from "./ProductCard";
import { AnimatePresence, motion } from "framer-motion";
import {
	ProductCardListMethods,
	ProductCardListProps,
} from "@/types/components/CardDTO";
import { ANIMATIONS } from "@/constants/animations";
import { useRouter } from "next/router";
import { ProductGrid } from "./ProductGrid";

const ProductCardList = forwardRef<
	ProductCardListMethods,
	ProductCardListProps
>(({ data = [], active, callback }, ref) => {
	const [activeId, setActiveId] = useState(active);

	const onClick = (id?: string) => {
		setActiveId(id);
	};

	useEffect(() => {
		callback && callback(activeId);
	}, [activeId]);

	useImperativeHandle(
		ref,
		() => ({
			switch: onClick,
		}),
		[]
	);

	return (
		<AnimatePresence>
			<motion.div className="space-x-6 hidden lg:flex">
				{data.map((item, i) => {
					const clickCb = () => onClick(item.id);
					return (
						<motion.div
							variants={ANIMATIONS}
							initial="slideOutLeft"
							animate="slideInLeft"
							transition={{ delay: 0.1 * (data.length - 1 - i) }}
							key={item.id!}
						>
							<ProductCard
								{...item}
								selected={activeId === item.id}
								onClick={clickCb}
							/>
						</motion.div>
					);
				})}
			</motion.div>
			<ProductGrid onSelect={onClick} />
		</AnimatePresence>
	);
});

ProductCardList.displayName = "ProductCardList";

export default ProductCardList;
