"use client";

import React, { FC, useMemo, useRef, useState, useEffect } from "react";
import Button from "./Button";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
import { CartMethods } from "@/types/components/CartDTO";
import { LoginModalMethods } from "@/types/components/ModalDTO";
import { LoginModal } from "./LoginModal";
import { Icon } from "./Icon";
import IconButton from "./IconButton";
import { AnimatePresence, motion } from "framer-motion";
import { ANIMATIONS } from "@/constants/animations";
import useOutsideClick from "@/hooks/useOutsideClick";

const Navbar: FC = () => {
	const cartRef = useRef<CartMethods>(null);
	const authRef = useRef<LoginModalMethods>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	const [showMenu, setShowMenu] = useState(false);

	const openCart = () => {
		console.log("OPENING");
		cartRef.current?.open();
	};

	const onLogin = () => {
		authRef.current?.open();
	};

	const onCloseMenu = () => {
		setShowMenu(false);
	};

	const toggleMenu = () => {
		setShowMenu((val) => !val);
	};

	useOutsideClick(menuRef, onCloseMenu, showMenu);

	const btns = useMemo(
		() => (
			<>
				<Button
					label="Contact"
					borderWidth="0"
					textColor="secondary"
					iconProps={{
						name: "Phone",
						svgProps: { size: 20 },
					}}
				/>
				<Button
					iconProps={{
						svgProps: { size: 20 },
						color: "secondary",
						name: "ShoppingCart",
					}}
					borderColor="secondary"
					borderWidth="0"
					textColor="secondary"
					label="Cart"
					onClick={openCart}
				/>
				<Button
					onClick={onLogin}
					textColor="secondary"
					iconProps={{
						svgProps: { size: 20 },
						color: "secondary",
						name: "User",
					}}
					borderWidth="0"
					label="Login"
				/>
			</>
		),
		[]
	);

	return (
		<>
			<nav className="w-full overflow-visible inline-flex flex-row justify-between items-center">
				<div className="flex items-center justify-center">
					<Link href="/">
						<Image src={logo} alt="logo" priority height={100} />
					</Link>
				</div>
				<div className="flex-row hidden lg:flex">{btns}</div>
				<div ref={menuRef} className="pr-5 relative lg:hidden">
					<IconButton
						name="Menu"
						color="secondary"
						onClick={toggleMenu}
					/>
					<AnimatePresence>
						{showMenu && (
							<motion.div
								variants={ANIMATIONS}
								initial={"scaleHide"}
								animate={"scaleShow"}
								exit={"scaleHide"}
								className="absolute py-2 cursor-pointer overflow-hidden bg-white right-7 rounded-lg shadow-2xl z-50"
							>
								{btns}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</nav>
			<Cart ref={cartRef} />
			<LoginModal ref={authRef} />
		</>
	);
};

export default Navbar;
