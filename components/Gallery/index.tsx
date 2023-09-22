import React from "react";
import ProductCard from "../Card/ProductCard";
import { GalleryItem } from "./GalleryItem";

const Gallery = ({ data = [] }) => {
  return (
    <div className="h-full relative flex-col grid grid-cols-3 grid-rows- gap-2">
      {data.map((item, i) => {
        return <GalleryItem key={i} />;
      })}
    </div>
  );
};

export default Gallery;
