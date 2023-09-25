"use client";

import ProductCardList from "@/components/Card/ProductList";
import Container from "@/components/Container";
import HomePanel from "@/components/Panel/HomePanel";
import PanelGroup from "@/components/Panel/PanelGroup";
import { righteous } from "@/constants/fonts";
import { CATEGORY_DATA } from "@/constants/ui";
import { ProductCardListMethods } from "@/types/components/CardDTO";
import { PanelGroupMethods } from "@/types/components/PanelDTO";
import { debounce } from "@/utils/helpers";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef } from "react";

export default function Home() {
  const search = useSearchParams();

  const panelRef = useRef<PanelGroupMethods>(null);
  const productCardListRef = useRef<ProductCardListMethods>(null);

  const onSelectCategory = (id?: string) => {
    panelRef.current?.switch(id);
  };

  const onClosePanel = () => {
    productCardListRef.current?.switch();
    panelRef.current?.switch();
  };

  const init = useCallback(() => {
    const currentType = search.get("type");
    productCardListRef.current?.switch(currentType!);
    panelRef.current?.switch(currentType!);
  }, [search]);

  const debounceRef = useMemo(() => {
    return debounce(init, 500);
  }, [init]);

  useEffect(() => {
    debounceRef();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="flex h-screen flex-col items-center justify-between overflow-hidden">
      <Container>
        <section className="px-20 flex flex-1 justify-center flex-col pb-36">
          <header className="mb-14">
            <h1 className={` text-5xl text-secondary`}>
              <span className={righteous.className}>
                Want a delicacy?
                {/* <TextGroupAnimated />? */}
              </span>
            </h1>
            <p className="text-primary">Choose your pick</p>
          </header>
          <ProductCardList
            ref={productCardListRef}
            data={CATEGORY_DATA}
            callback={onSelectCategory}
          />
        </section>
        <section className="flex h-full w-full relative pb-8 pr-4">
          <div className="absolute h-full w-full flex">
            <HomePanel />
          </div>
          <PanelGroup onClose={onClosePanel} ref={panelRef} />
        </section>
      </Container>
    </main>
  );
}
