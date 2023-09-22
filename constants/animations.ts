import { Variants } from "framer-motion";
export const ANIMATIONS: Variants = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
  slideOutRight: {
    x: "100%",
  },
  slideInRight: {
    x: 0,
  },
  slideOutLeft: {
    x: "-50%",
    opacity: 0,
  },
  slideOutLeft50: {
    x: -50,
    opacity: 0,
  },
  slideInLeft50: {
    x: 0,
    opacity: 1,
  },
  slideInLeft: {
    x: 0,
    opacity: 1,
  },
  scaleUp: {
    scale: 1.01,
  },
  scaleDown: {
    scale: 1,
  },
};
