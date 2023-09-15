import React from "react";
import ProductCard from "./Card/ProductCard";

const Gallery = () => {
  return (
    <div className="h-full w-full overflow-y-auto">
      <div className="bg-[#FBE7EF] grid gap-4 pl-4 py-4 rounded-2xl grid-rows-repeat grid-flow-dense grid-col-3 grid-cols-3 h-[100%] w-[100%] overflow-y-auto">
        <div className=" rounded-lg row-start-1 row-end-3">
          <ProductCard
            imgUrl="https://images.unsplash.com/photo-1562777717-dc6984f65a63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            height="h-full"
            width="w-full"
            type="gallery"
            label="Ice cream Cake"
          />
        </div>
        <div className="rounded-lg">
          <ProductCard
            imgUrl="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2003&q=80"
            height="h-full"
            width="w-full"
            type="gallery"
            label="Chocolate Cake"
          />
        </div>
        <div className=" rounded-lg">
          <ProductCard
            imgUrl="https://images.unsplash.com/photo-1595272568891-123402d0fb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            height="h-full"
            width="w-full"
            type="gallery"
            label="Vanilla Cake"
          />
        </div>
        <div className="row-start-2 row-end-3 col-start-2 col-end-4 rounded-lg">
          <ProductCard
            imgUrl="https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80"
            height="h-full"
            width="w-full"
            type="gallery"
            label="Red Velvet Cake"
          />
        </div>
        <div className=" rounded-lg row-start-1 row-end-3">
          <ProductCard
            imgUrl="https://images.unsplash.com/photo-1562777717-dc6984f65a63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            height="h-full"
            width="w-full"
            type="gallery"
            label="Ice cream Cake"
          />
        </div>
        <div className="rounded-lg">
          <ProductCard
            imgUrl="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2003&q=80"
            height="h-full"
            width="w-full"
            type="gallery"
            label="Chocolate Cake"
          />
        </div>
        <div className=" rounded-lg">
          <ProductCard
            imgUrl="https://images.unsplash.com/photo-1595272568891-123402d0fb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            height="h-full"
            width="w-full"
            type="gallery"
            label="Vanilla Cake"
          />
        </div>
        <div className="bg-secondary" />
        <div className="bg-secondary" />
        <div className="bg-secondary" />
        <div className="bg-secondary" />
        <div className="bg-secondary" />
        <div className="bg-secondary" />
        <div className="bg-secondary" />
        <div className="bg-secondary" />
        <div className="bg-secondary" />
        <div className="bg-secondary" />
      </div>
    </div>
  );
};

export default Gallery;
