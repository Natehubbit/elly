import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Modal } from "./Modal";
import {
	LoginModalMethods,
	LoginModalProps,
	ModalMethods,
} from "@/types/components/ModalDTO";
import { righteous } from "@/constants/fonts";
import Input from "./Form/Input";
import { Icon } from "./Icon";
import Button from "./Button";
import IconButton from "./IconButton";

export const LoginModal = forwardRef<LoginModalMethods, LoginModalProps>(
	({}, ref) => {
		const modal = useRef<ModalMethods>(null);

		const onClose = () => {
			console.log("CLOSING");
			modal.current?.close();
		};

		useImperativeHandle(
			ref,
			() => ({
				open: modal.current?.open!,
				close: modal.current?.close!,
				login: () => {},
			}),
			[]
		);

		return (
			<Modal ref={modal}>
				<div className="p-10 bg-white flex flex-col items-center justify-center rounded-xl relative shadow-lg">
					<IconButton
						name="X"
						className="absolute right-2 top-2"
						color="primary"
						onClick={onClose}
					/>
					<div className="flex justify-center flex-col">
						<h1
							className={`${righteous.className} text-center mb-3 text-xl`}
						>
							Login
						</h1>
						<form className="flex flex-col flex-1 justify-center items-center space-y-4">
							<Input required placeholder="E-mail" type="email" />
							<Input
								required
								placeholder="Password"
								type="password"
							/>
							<Button label="Login" />
						</form>
					</div>
				</div>
			</Modal>
		);
	}
);

LoginModal.displayName = "LoginModal";
