import React from "react";
import { NavItemType } from "@/types/navigation";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "lucide-react";
import DropdownMenu from "./dropdown-menu";
import MegaMenu from "./mega-menu";

const NavItem = ({ menuItem }: { menuItem: NavItemType }) => {
  return (
    <div
      className={`relative text-sm hover:text-primary ${
        menuItem.children ? "has-child group" : ""
      }`}
    >
      <Link to={menuItem.href} className="flex items-center gap-2">
        {menuItem.name}
        {menuItem.children && <ChevronDownIcon className="w-4 h-4" />}
      </Link>
      {menuItem.children &&
        (menuItem?.type === "dropdown" ? (
          <div className="hidden relative flex group-hover:block">
            <DropdownMenu menuItem={menuItem} />
          </div>
        ) : menuItem?.type === "megaMenu" ? (
          <div className="hidden relative flex group-hover:block">
            <MegaMenu menuItem={menuItem} />
          </div>
        ) : null)}
    </div>
  );
};

export default NavItem;
