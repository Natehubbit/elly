import React, { FC } from "react";
import { Icon } from "../Icon";
import IconButton from "../IconButton";
import Counter from "../Form/Counter";

interface CartItemProps {
	label: string;
	count: string;
	amount: string;
}

export const CartItem: FC<CartItemProps> = ({ amount, count, label }) => {
	return (
		<div className="flex">
			<div className="h-24 w-24 rounded-lg bg-slate-400 flex justify-center items-center">
				<Icon name="AtSign" />
			</div>
			<div className="px-4 flex flex-1 justify-center flex-col">
				<h1 className="font-bold text-lg">{label}</h1>
				<p className="mb-2">{amount}</p>
				<Counter small value={Number(count) ?? 1} />
			</div>
			<div className="flex items-center justify-end">
				<IconButton
					svgProps={{ size: 16 }}
					className="bg-slate-200"
					name="Trash"
				/>
			</div>
		</div>
	);
};
