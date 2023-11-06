import { ModalMethods, ModalProps } from "@/types/components/ModalDTO";
import React, { FC, forwardRef, useState, useImperativeHandle } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Modal = forwardRef<ModalMethods, ModalProps>(
	({ children }, ref) => {
		const [show, setShow] = useState(false);

		const onClose = () => {
			setShow(false);
		};

		const onOpen = () => {
			setShow(true);
		};

		useImperativeHandle(
			ref,
			() => ({
				close: onClose,
				open: onOpen,
				login: () => {},
			}),
			[]
		);

		return (
			<AnimatePresence>
				{show && (
					<motion.section
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="h-screen w-screen absolute flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-50"
					>
						{children}
					</motion.section>
				)}
			</AnimatePresence>
		);
	}
);

Modal.displayName = "Modal";
