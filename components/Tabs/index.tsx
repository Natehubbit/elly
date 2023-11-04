import React, { FC, ReactNode, useMemo, useState } from "react";
import Map from "../Map";
import { TabProps, TabsProps } from "@/types/components/TabsDTO";

export const Tabs: FC<TabsProps> = ({ tabs = [] }) => {
	const [active, setActive] = useState(tabs[0]?.id);

	const onTabClick = (id: string) => {
		setActive(id);
	};

	const tabBody = useMemo(
		() => tabs.find((item) => item.id === active)?.body,
		[active, tabs]
	);

	return (
		<div className="flex flex-col">
			<ul className="flex self-start text-sm overflow-hidden font-medium text-center divide-x divide-gray-200 rounded-lg shadow">
				{tabs.map((tab) => {
					const isActive =
						tab.id === active
							? "bg-primary text-white"
							: "bg-white";
					const onClick = () => onTabClick(tab.id);
					return (
						<li key={tab.id}>
							<button
								type="button"
								className={`${isActive} inline-block active p-2 text-gray-500 focus:outline-none`}
								onClick={onClick}
							>
								{tab.label}
							</button>
						</li>
					);
				})}
			</ul>
			{tabBody && <div>{tabBody}</div>}
		</div>
	);
};
