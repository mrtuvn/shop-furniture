import { NavItemType } from "@/types/navigation";
import { ChevronDownIcon } from "lucide-react";
import { Link } from "react-router-dom";
import DropdownMenu from "./dropdown-menu";
import MegaMenu from "./mega-menu";
const NavItem = ({ menuItem }: { menuItem: NavItemType }) => {
  return (
    <li
      className={`hover:text-primary text-sm ${
        menuItem.children ? "has-child group" : ""
      }`}
    >
      <Link
        to={menuItem.href}
        className="relative flex items-center gap-2 px-2 py-4 after:content-[''] relative transition-all w-min-content
          after:w-0 after:h-1 after:absolute after:bottom-0 after:right-0 after:bg-blue-400 after:transition-all after:duration-500
          hover:after:w-full hover:after:left-0 hover:after:bg-[var(--menu-item-hover-bg)]"
      >
        {menuItem.name}
        {menuItem.children && <ChevronDownIcon className="h-4 w-4" />}
      </Link>
      {menuItem.children &&
        (menuItem?.type === "dropdown" ? (
          <div className="relative flex hidden group-hover:block">
            <DropdownMenu menuItem={menuItem} />
          </div>
        ) : menuItem?.type === "megaMenu" ? (
          <MegaMenu menuItem={menuItem} />
        ) : null)}
    </li>
  );
};

export default NavItem;
