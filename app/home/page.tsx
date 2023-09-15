"use client";

import ProductCardList from "@/components/Card/ProductList";
import Container from "@/components/Container";
import HomePanel from "@/components/Panel/HomePanel";
import PanelGroup from "@/components/Panel/PanelGroup";
import { righteous } from "@/constants/fonts";
import { CATEGORY_DATA } from "@/constants/ui";
import { ProductCardListMethods } from "@/types/components/CardDTO";
import { PanelGroupMethods } from "@/types/components/PanelDTO";
import { useRef } from "react";

export default function Home() {
  const panelRef = useRef<PanelGroupMethods>(null);
  const productCardListRef = useRef<ProductCardListMethods>(null);

  const onSelectCategory = (id?: string) => {
    panelRef.current?.switch(id);
  };

  const onClosePanel = () => {
    productCardListRef.current?.switch();
    panelRef.current?.switch();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <Container>
        <section className="px-20 flex flex-1 justify-center flex-col pb-36">
          <header className="mb-14">
            <h1 className={`${righteous.className} text-5xl text-secondary`}>
              Want a delicacy?
              {/* <TextGroupAnimated />? */}
            </h1>
            <p className="text-primary">Choose your pick</p>
          </header>
          <ProductCardList
            ref={productCardListRef}
            data={CATEGORY_DATA}
            callback={onSelectCategory}
          />
        </section>
        <section className="flex flex-1 relative pb-8 pr-4">
          <div className="absolute h-full w-full flex">
            <HomePanel />
          </div>
          <PanelGroup onClose={onClosePanel} ref={panelRef} />
        </section>
      </Container>
    </main>
  );
}
