import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ANIMATIONS } from "@/constants/animations";
import Link from "next/link";
import Button from "../Button";
import IconButton from "../IconButton";
import { righteous } from "@/constants/fonts";

export const GalleryItem = () => {
  return (
    <div className="group relative flex flex-col cursor-pointer h-72 tem">
      <div className="rounded-xl flex-1 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            alt="cake"
            fill
            style={{ objectFit: "cover" }}
            className="group-hover:scale-110 transition-all duration-500"
            src={
              "https://images.unsplash.com/photo-1635117492718-695a17a5977a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
            }
          />
          <div className="flex bottom-0 right-0 bg-primary rounded-tl-xl justify-center p-1 items-center absolute align-middle">
            <p className={righteous.className}>
              GHs50<strong className="text-xs">(min)</strong>
            </p>
            {/* <div className="bg-secondary bg-opacity-90 h-full w-full justify-center rounded-xl items-center flex">
              <ul className="text-white flex justify-center flex-col items-center">
                <li>
                  ~GHs100<strong className="text-xs">(min)</strong>
                </li>
                <li>
                  ~0.5kg<strong className="text-xs">(min)</strong>
                </li>
                <li>
                  <div className="flex flex-col justify-center items-center text-xs mt-2">
                    <h1>Icing</h1>
                    <p>Butter, Fondant, Whipcream</p>
                  </div>
                </li>
                <li className="mt-4">
                  <IconButton
                    color="text"
                    svgProps={{ size: 20 }}
                    bg="primary"
                    name="ShoppingCart"
                  />
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <p>Chocolate Cake</p>
      </div>
    </div>
  );
};
