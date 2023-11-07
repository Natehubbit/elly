import { righteous } from "@/constants/fonts";
import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Button from "../Button";
import IconButton from "../IconButton";
import { CartItem } from "./CartItem";
import { CartMethods } from "@/types/components/CartDTO";
import useOutsideClick from "@/hooks/useOutsideClick";

interface CartProps {}

const Cart = forwardRef<CartMethods, CartProps>(({}, ref) => {
	const [items, setItems] = useState<any[]>([]);
	const [show, setShow] = useState(false);

	const panelRef = useRef<HTMLDivElement>(null);

	const onClose = () => {
		setShow(false);
	};

	const addProduct = () => {};

	const deleteProduct = () => {};

	const checkout = async () => {};

	const setProducts = (data: typeof items) => {
		setItems(data);
	};

	const onOpen = () => {
		setShow(true);
	};

	useImperativeHandle(
		ref,
		() => ({
			deleteProduct,
			addProduct,
			checkout,
			setProducts,
			close: onClose,
			open: onOpen,
		}),
		[]
	);

	useOutsideClick(panelRef, onClose, show);

	const hasItems = !!items?.length;

	return (
		<AnimatePresence>
			{show && (
				<>
					<motion.section
						key="backdrop"
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
						}}
						exit={{
							opacity: 0,
							transitionEnd: { display: "none" },
						}}
						className="absolute z-50 h-screen w-screen bg-[rgba(0,0,0,0.5)]"
					/>
					<motion.div
						key="menu"
						ref={panelRef}
						initial={{
							translateX: "100%",
						}}
						transition={{
							type: "just",
						}}
						exit={{ translateX: "100%" }}
						animate={{ translateX: 0 }}
						className="xl:w-1/4 md:w-1/2 w-full bg-white h-screen flex flex-col right-0 absolute p-5 z-50"
					>
						<header className="flex justify-between items-center mb-6">
							<h1 className={`text-2xl ${righteous.className}`}>
								My Cart
							</h1>
							<IconButton
								name="X"
								color="primary"
								onClick={onClose}
							/>
						</header>
						<div className="max-h-[100%] overflow-hidden relative">
							<div className="space-y-2 pt-2 pb-10 overflow-y-auto h-full relative pr-4">
								{hasItems ? (
									items.map((product) => {
										return (
											<CartItem
												key={product.id}
												amount="GHs200"
												count="2"
												label="Carrot Cake"
											/>
										);
									})
								) : (
									<p className="text-center text-gray-400">
										You have no item in your cart
									</p>
								)}
							</div>
							<div className="bg-gradient-to-b from-transparent to-white h-8 w-[80%] absolute bottom-0 " />
						</div>
						{hasItems && (
							<div className="py-2 flex relative">
								<Button label="Checkout" className="w-full" />
							</div>
						)}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
});

Cart.displayName = "Cart";

export default Cart;
