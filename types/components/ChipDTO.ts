export interface ChipProps {
	id?: string;
	label: string;
	active?: boolean;
	bg?: string;
	onClick?: () => void;
}

export interface ChipsMethods {
	// add: (val?: string) => void;
	// remove: (val?: string) => void;
	getChips: () => string[];
}

export interface ChipsProps {
	data: ChipProps[];
	callback: (val: string[]) => void;
}

export interface ChipListProps {
	data?: ChipProps[];
	callback?: (val: string[]) => void;
}
