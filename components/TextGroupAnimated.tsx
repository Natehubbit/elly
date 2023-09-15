"use client";

import React, { FC, useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, AnimationLifecycles } from "framer-motion";

const TEXTS = ["cake", "drink", "pastry"];

const TextGroupAnimated: FC = () => {
  const [active, setActive] = useState(0);
  const textsRef = useRef<HTMLSpanElement[]>([]);

  //   useEffect(() => {
  //     setInterval(() => {
  //       setActive((val) => (val + 1) % TEXTS.length);
  //     }, 5000);
  //   }, []);

  const onCompleteAnimation: AnimationLifecycles["onAnimationComplete"] = (
    def
  ) => {
    console.log(def);
  };

  const initRefs = (ref: HTMLSpanElement) => {
    textsRef.current.push(ref);
  };

  return (
    <span className="inline-flex flex-col overflow-hidden">
      {TEXTS.map((text, id) => {
        const isActive = id === active;
        return (
          isActive && (
            <motion.span
              key={id}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 500 }}
              onAnimationComplete={onCompleteAnimation}
              ref={initRefs}
            >
              {text}
            </motion.span>
          )
        );
      })}
    </span>
  );
};

export default TextGroupAnimated;
