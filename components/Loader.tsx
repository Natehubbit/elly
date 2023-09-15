import React from "react";
import Lottie from "react-lottie";
import * as animationData from "@/assets/cakeLoad.json";

export const Loader = () => {
  return (
    <div className="absolute bg-opacity-80 w-full h-full flex justify-center items-center bg-text">
      <Lottie
        options={{
          animationData,
          loop: true,
          autoplay: true,
        }}
        height={250}
      />
    </div>
  );
};
