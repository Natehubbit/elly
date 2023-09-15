import React from "react";
import wave from "@/assets/wave.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full -z-10">
      <Image
        src={wave}
        alt="wave"
        style={{ width: "100%", position: "absolute", bottom: 0 }}
      />
    </footer>
  );
};
