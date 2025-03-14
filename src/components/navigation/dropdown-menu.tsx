import React from "react";
import { NavItemType } from "@/types/navigation";

const DropdownMenu: React.FC<{ menuItem: NavItemType }> = ({ menuItem }) => {
  return (
    <div className="dropdown-item dropdown-menu-container py-[40px] min-w-[200px] absolute w-full bg-white shadow-lg isolation  z-[var(--z-index-menu)]">
      {menuItem.children?.map((child) => (
        <div key={child.id}>
          <a
            key={child.id}
            href={child.href}
            target={child.targetBlank ? "_blank" : "_self"}
            className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {child.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
