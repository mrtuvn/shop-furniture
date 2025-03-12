export interface NavItemType {
  id: string;
  name: string;
  href: string;
  targetBlank?: boolean;
  children?: NavItemType[];
  type?: "dropdown" | "megaMenu" | "none";
  isNew?: boolean;
}
