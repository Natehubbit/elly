import React, { forwardRef, useImperativeHandle, useState } from "react";
import ProductPanel from "./ProductPanel";
import HomePanel from "./HomePanel";
import { motion, AnimatePresence } from "framer-motion";
import {
  PanelGroupMethods,
  PanelGroupProps,
} from "@/types/components/PanelDTO";

const PanelGroup = forwardRef<PanelGroupMethods, PanelGroupProps>(
  ({ onClose }, ref) => {
    const [activeId, setActiveId] = useState<string>();

    const switchPanel = (id?: string) => {
      setActiveId(id);
    };

    useImperativeHandle(
      ref,
      () => ({
        switch: switchPanel,
      }),
      []
    );

    const renderPanel = () => {
      switch (activeId) {
        case "cakes":
        case "drinks":
        case "pastries":
          return (
            <ProductPanel key={"product"} onClose={onClose} type={activeId} />
          );

        default:
          return;
      }
    };

    return <AnimatePresence>{renderPanel()}</AnimatePresence>;
  }
);

export default PanelGroup;
