import React from "react";
import ProductCard from "../Card/ProductCard";
import { GalleryItem } from "./GalleryItem";

const Gallery = ({ data = [] }) => {
  return (
    <div className="h-full relative grid grid-cols-4 gap-3 pr-4">
      {data.map((item, i) => {
        return <GalleryItem key={i} />;
      })}
    </div>
  );
};

export default Gallery;
