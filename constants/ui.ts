import { ChipProps } from "@/types/components/ChipDTO";
import { RadioButtonProps } from "@/types/components/RadioDTO";
import { SelectProps } from "@/types/components/SelectDTO";

export const CATEGORY_DATA = [
	{
		id: "cakes",
		imgUrl: "https://images.unsplash.com/photo-1584629748167-730825741a5e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
		name: "Cakes",
		path: "?type=cakes",
	},
	{
		id: "drinks",
		imgUrl: "https://images.unsplash.com/photo-1645783916385-1c99860a2a42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
		name: "Drinks",
		path: "?type=drinks",
	},
	{
		id: "pastries",
		imgUrl: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
		name: "Pastries",
		path: "?type=pastries",
	},
];

export const PASTRIES = [
	{
		name: "Spring Rolls",
		minAmount: 20,
		minPieces: 5,
		fillings: ["meat", "fish", "cabbage"],
	},
	{
		name: "Chips",
		minAmount: 5,
		minWeight: 0.5,
	},
	{
		name: "Cookies",
		minPieces: 4,
		minAmount: "GHs10",
	},
	{
		name: "Pizza",
		minAmount: 60,
		fillings: ["tuna", "chicken", "sausage"],
	},
	{
		name: "Atwomo",
		minAmount: 5,
		minWeight: 0.5,
	},
	{
		name: "Pie",
		minAmount: 10,
		fillings: ["meat", "vegetables", "fish"],
	},
	{
		name: "Cup Cake",
		minPieces: 3,
		minAmount: 40,
	},
];

export const DRINKS = [
	{
		name: "Milky Splash",
		flavor: "vanilla",
		amount: 10,
	},
];

export const CAKES = [
	{
		name: "Chocolate Cake",
		minWeight: 0.5,
		icing: ["butter", "whipcream", "fondant"],
	},
	{
		name: "Red-Velvet Cake",
		minWeight: 0.5,
		icing: ["butter", "whipcream", "fondant"],
	},
	{
		name: "Sponge Cake",
		minWeight: 0.5,
		icing: ["butter", "whipcream", "fondant"],
	},
	{
		name: "Cheese Cake",
	},
];

export const CUSTOMIZE_CAKE_SIDE_MENU = [
	{
		id: "flavour",
		label: "Flavour",
	},
	{
		id: "tier",
		label: "Tier",
	},
	{
		id: "theme",
		label: "Theme",
	},
	{
		id: "colors",
		label: "Colors",
	},
	{
		id: "icing",
		label: "Icing",
	},
];

export const CUSTOMIZE_CAKE_FORM = {
	flavour: [
		{
			id: "redVelvet",
			label: "Red Velvet",
		},
		{
			id: "chocolate",
			label: "Chocolate Cake",
		},
		{
			id: "cheesecake",
			label: "Cheese Cake",
		},
		{
			id: "carrotcake",
			label: "Carrot Cake",
		},
	],
	tier: [],
	theme: [
		{
			id: "wedding",
			label: "Wedding",
		},
		{
			id: "birthday",
			label: "Birthday",
		},
		{
			id: "graduation",
			label: "Graduation",
		},
		{
			id: "other",
			label: "Other",
		},
	],
	colors: [
		{
			id: "1",
			value: ["#003049", "#D62828", "#F77F00", "#FCBF49", "#EAE2B7"],
		},
		{
			id: "2",
			value: ["#3D5A80", "#98C1D9", "#E0FBFC", "#EE6C4D", "#293241"],
		},
		{
			id: "3",
			value: ["#EF476F", "#FFD166", "#06D6A0", "#118AB2", "#073B4C"],
		},
		{
			id: "4",
			value: ["#000814", "#8F2D56", "#003566", "#FFC300", "#136F63"],
		},
		{
			id: "5",
			value: ["#E1CA96", "#073B3A", "#0B6E4F", "#3CCDBA", "#AF929D"],
		},
	],
	icing: [
		{ id: "butter", label: "Butter" },
		{ id: "whipcream", label: "Whip Cream" },
		{ id: "fondant", label: "Fondant" },
	],
};

export const CAKE_SIZE_RADIO: RadioButtonProps[] = [
	{
		field: "size",
		// label: "Small",
		value: "SM",
		id: "SM",
		text: "SM",
	},
	{
		field: "size",
		// label: "Medium",
		value: "MD",
		id: "MD",
		text: "MD",
	},
	{
		field: "size",
		// label: "Large",
		value: "L",
		id: "L",
		text: "L",
	},
	{
		field: "size",
		// label: "Extra Large",
		value: "XL",
		id: "XL",
		text: "XL",
	},
];

export const OCCASSIONS: SelectProps["options"] = [
	{ id: "wedding", label: "Wedding" },
	{ id: "graduation", label: "Graduation" },
	{ id: "birthday", label: "Birthday" },
	{ id: "party", label: "Party" },
	{ id: "other", label: "Other" },
];

export const FLAVOURS: ChipProps[] = [
	{
		label: "Chocolate Cake",
		id: "CHOCOLATE",
	},
	{
		label: "Cheese Cake",
		id: "CHEESE",
	},
	{
		label: "Red Velvet",
		id: "RED_VELVET",
	},
	{
		label: "Milk Cake",
		id: "MILK_CAKE",
	},
];
