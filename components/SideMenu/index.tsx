"use client";

import {
  SideMenuOptionProps,
  SideMenuProps,
} from "@/types/components/SideMenuDTO";
import React, { FC, useEffect, useMemo, useState } from "react";
import OptionItem from "./OptionItem";
import { usePathname } from "next/navigation";

const SideMenu: FC<SideMenuProps> = ({ options = [], callback, activeId }) => {
  const pathname = usePathname();
  const [selected, setSelected] = useState<string | undefined>(activeId);

  const OPTIONS: SideMenuOptionProps[] = useMemo(
    () =>
      options.map((item) => ({
        ...item,
        href: { pathname, query: { active: item.id } },
      })),
    [pathname, options]
  );

  const onPress = (id?: string) => {
    setSelected(id);
  };

  useEffect(() => {
    callback && callback(selected);
  }, [selected, callback]);

  return (
    <section className="flex flex-col justify-center items-center space-y-4 p-4">
      {OPTIONS.map((option) => {
        const onOptionPress = () => onPress(option.id);
        return (
          <OptionItem
            key={option.id}
            {...option}
            onPress={onOptionPress}
            active={selected === option.id}
          />
        );
      })}
    </section>
  );
};

export default SideMenu;
