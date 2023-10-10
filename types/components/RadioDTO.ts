export interface RadioButtonProps {
	value: string;
	label?: string;
	icon?: any;
	id: string;
	field: string;
	active?: boolean;
	text?: string;
	onClick?: () => void;
}

export interface RadioButtonsProps {
	data: RadioButtonProps[];
	callback: (val: string) => void;
}
