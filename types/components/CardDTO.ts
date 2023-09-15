export interface ProductCardProps {
  id?: string;
  imgUrl: string;
  amount?: string;
  name?: string;
  path?: string;
  width?: string;
  label?: string;
  height?: string;
  type?: "gallery" | "card";
  selected?: boolean;
  onClick?: () => void;
}

export interface ProductCardListProps {
  data: ProductCardProps[];
  active?: string;
  callback?: (id?: string) => void;
}

export interface ProductCardListMethods {
  switch: (id?: string) => void;
}
