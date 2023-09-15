import { ProductCardProps } from "@/types/components/CardDTO";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { motion } from "framer-motion";

const ProductCard: FC<ProductCardProps> = ({
  imgUrl,
  name,
  amount,
  path,
  width,
  height,
  selected,
  label,
  type,
  onClick,
}) => {
  const isGallery = type !== "gallery";

  return (
    <Link href={`/${path ?? ""}`} onClick={onClick}>
      <motion.div
        whileHover={
          isGallery ? { y: -10, scale: 1.05, type: "spring" } : undefined
        }
        className={`hover:cursor-pointer ${width ?? "w-60"} ${
          height ?? "h-[400px]"
        }`}
        whileTap={{
          scale: 0.98,
        }}
        animate={selected ? { y: -10, scale: 1.05 } : undefined}
      >
        <div
          className={`${
            height ?? "h-[400px]"
          } rounded-3xl overflow-hidden relative`}
        >
          <Image src={imgUrl} alt={name!} fill style={{ objectFit: "cover" }} />
          {label ? (
            <div className="h-[40px] bg-opacity-90 bg-primary items-center w-full flex justify-center bottom-0 absolute">
              {label}
            </div>
          ) : null}
        </div>
        <div className="mt-2">
          <h5 className={`text-xl font-bold ${selected && "text-primary"}`}>
            {name}
          </h5>
          <h5 className="text-lg text-primary font-semibold">{amount}</h5>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
