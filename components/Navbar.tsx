import React, { FC } from "react";
import Button from "./Button";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <nav className="w-full inline-flex flex-row justify-between px-20 items-center ">
      <div className="flex items-center justify-center">
        <Link href="/">
          <Image src={logo} alt="logo" height={100} />
        </Link>
      </div>
      <div className="flex flex-row">
        <Button
          label="Contact"
          borderWidth="0"
          textColor="secondary"
          iconProps={{ name: "Phone", svgProps: { size: 20 } }}
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
        />
        <Button
          textColor="secondary"
          borderWidth="0"
          label="Login"
          iconProps={{ name: "User" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
