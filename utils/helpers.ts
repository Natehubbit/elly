import { CUSTOMIZE_CAKE_FORM } from "@/constants/ui";
import { resolve } from "path";

const getImageMeta = (url: string, cb: (val: HTMLImageElement) => void) => {
	const img = new Image();
	img.onload = () => cb(img);
	img.onerror = (err) => {
		throw err;
	};
	img.src = url;
};

export const debounce = (
	cb: (val?: any) => void | Promise<void>,
	delay = 300
) => {
	let timer: ReturnType<typeof setTimeout> | undefined;

	return function (...args: any) {
		clearTimeout(timer);

		timer = setTimeout(() => {
			cb(args);
			timer = undefined;
		}, delay);
	};
};

export const delay = (cb: Function, ms = 300) =>
	new Promise((resolve) => {
		let timer = setTimeout(() => {
			console.log(typeof cb);
			cb();
			clearTimeout(timer);
			resolve(true);
		}, ms);
	});

export const getMyColors = async (): Promise<string[]> => {
	const colors = CUSTOMIZE_CAKE_FORM["colors"];
	const randomId = Math.ceil(Math.random() * colors.length).toString();
	const randomColors = colors.find((item) => item.id === randomId)!;
	return new Promise((resolve) => {
		resolve(randomColors.value);
	});
};
