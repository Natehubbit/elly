import React, {
	EventHandler,
	MutableRefObject,
	RefObject,
	useEffect,
	useRef,
	useState,
} from "react";

const useOutsideClick = <T>(
	ref: MutableRefObject<T>,
	cb: () => void,
	show = false
) => {
	useEffect(() => {
		// Bind the event listener'
		const onClickOutside = (event: any) => {
			if (ref.current && !(ref.current as any).contains(event.target)) {
				cb();
			}
		};
		if (show) {
			document.addEventListener("mousedown", onClickOutside);
		} else
			document.removeEventListener("mousedown", () =>
				console.log("Removed")
			);

		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", () =>
				console.log("Removed")
			);
		};
	}, [ref, show]);
};

export default useOutsideClick;
