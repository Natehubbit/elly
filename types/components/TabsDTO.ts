import { ReactNode } from "react";

export interface TabProps {
	id: string;
	label: string;
	body: ReactNode;
}

export interface TabsProps {
	tabs: TabProps[];
}
