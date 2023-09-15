export interface ProductPanelProps {
  type: string;
  onClose?: (id?: string) => void;
}

export interface PanelGroupMethods {
  switch: (id?: string) => void;
}

export interface PanelGroupProps {
  onClose: () => void;
}
