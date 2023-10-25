import React, { ReactNode, useMemo, useState } from "react";
import Map from "../Map";

interface TabProps {
	id: string;
	label: string;
	body: ReactNode;
}

const TABS: TabProps[] = [
	{ id: "dropoff", label: "Dropoff", body: undefined },
	{
		id: "pickup",
		label: "Pickup",
		body: (
			<section className="flex py-5 space-x-2">
				<div className="h-60 w-80 rounded-md overflow-hidden border">
					<Map />
				</div>
				<div>
					<p>Location</p>
				</div>
			</section>
		),
	},
];

export const Tabs = ({ tabs = TABS }) => {
	const [active, setActive] = useState(TABS[0].id);

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
				{TABS.map((tab) => {
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
