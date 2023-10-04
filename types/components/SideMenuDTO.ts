import { LinkProps } from "next/link";

export interface SideMenuOptionProps {
  id?: string;
  href?: LinkProps["href"];
  active?: boolean;
  label?: string;
  onPress?: () => void;
}

export interface SideMenuProps {
  options: SideMenuOptionProps[];
  activeId?: string;
  callback?: (id?: string) => void;
}
