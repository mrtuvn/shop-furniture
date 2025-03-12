import React from "react";
import { NavItemType } from "@/types/navigation";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "lucide-react";


const NavItem = ({ menuItem }: { menuItem: NavItemType }) => {

  const renderMegaMenu = () => {

    return (
      <div className="w-full min-w-[200px] visible bg-white child-item px-[20px] py-[10px] absolute z-90 left-0 top-full bg-white shadow-lg">
        <ul className=" min-h-min">
          {menuItem.children.map((child) => (
            <NavItem key={child.id} menuItem={child} />
          ))}
        </ul>
      </div>
    )
  }

  const renderDropDownMenu = () => {
    return (
      <div className="w-full min-w-[200px] visible bg-white child-item px-[20px] py-[10px] absolute z-90 left-0 top-full bg-white shadow-lg">
        <ul className=" min-h-min">
          {menuItem.children.map((child) => (
            <NavItem key={child.id} menuItem={child} />
          ))}
        </ul>
      </div>
    )
  }


  return (
    <Link
      to={menuItem.href}
      className={`relative text-sm hover:text-primary ${
        menuItem.children ? "has-child" : ""
      }`}
    >
      <span className="flex items-center gap-2">
        {menuItem.name}
        {menuItem.children && <ChevronDownIcon className="w-4 h-4" />}
      </span>
      {menuItem.children && (
        <div className="w-full min-w-[200px] visible bg-white child-item px-[20px] py-[10px] absolute z-90 left-0 top-full bg-white shadow-lg">
          <ul className=" min-h-min">
            {menuItem.children.map((child) => (
              <NavItem key={child.id} menuItem={child} />
            ))}
          </ul>
        </div>
      )}
    </Link>
  );
};

export default NavItem;
