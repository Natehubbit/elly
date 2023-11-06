export interface CartItem {
	label: string;
	amount: string;
	count: string;
}

export interface CartMethods {
	deleteProduct: (id: string) => void;
	addProduct: (data: any) => void;
	checkout: () => Promise<void>;
	setProducts: (data: any) => void;
	open: () => void;
}
