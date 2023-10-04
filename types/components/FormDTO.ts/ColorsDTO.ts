export interface ColorBtnProps {
  id?: string;
  color: string;
  active?: boolean;
  closeable?: boolean;
  onClick?: (val?:string) => void;
  onDelete?: (val?:string) => void;
}

export interface ColorBtnListProps {
  length?:number;
  colors?: string[];
  type?: 'display' | 'picker'
  callback?: (value?: string) => void;
  onDelete?: (val?:string)=>void
}

export interface ColorBtnListMethods {
  // select:(val?:string)=>void
  delete:(val?:string)=>void
  add:(val?:string)=>void
  getColors:()=>string[]|undefined
}

export interface CustomColorPickerProps {
  onSelect:(val?:string)=>void
  onDelete:(val?:string)=>void
}

export interface CustomColorPickerMethods {
  delete:()=>void
}
