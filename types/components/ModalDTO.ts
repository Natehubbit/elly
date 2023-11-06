import { ReactNode } from "react";

export interface ModalProps {
	children?: ReactNode;
}

export interface ModalMethods {
	open: () => void;
	close: () => void;
	login: () => void;
}

export interface LoginModalProps extends ModalProps {}

export interface LoginModalMethods extends ModalMethods {}
