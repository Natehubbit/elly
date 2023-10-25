export interface SelectProps {
	id: string;
	options: {
		id: string;
		label: string;
	}[];
	value?: string;
	placeholder: string;
	onChange: (val?: string) => void;
}
