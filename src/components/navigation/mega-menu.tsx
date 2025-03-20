import { NavItemType } from "@/types/navigation";
import React from "react";

const MegaMenu: React.FC<{ menuItem: NavItemType }> = ({ menuItem }) => {
  return (
    <div className="hidden group-hover:block top-[100%] isolation mega-menu-subcontent translate-y-[-24px] absolute right-0 left-0 z-[var(--z-index-mega-menu)] md:w-full min-w-[200px] bg-white py-[40px] shadow-lg group-hover:block">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-4 gap-4">
          {menuItem.children?.map((child) => (
            <div key={child.id} className="mega-menu-item">
              <a
                href={child.href}
                target={child.targetBlank ? "_blank" : "_self"}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {child.name}
              </a>
              {child.children && (
                <div className="mt-2">
                  {child.children.map((subChild) => (
                    <a
                      key={subChild.id}
                      href={subChild.href}
                      target={subChild.targetBlank ? "_blank" : "_self"}
                      className="block px-4 py-2 text-xs text-gray-500 hover:bg-gray-50"
                    >
                      {subChild.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* Render banner content side by side with menu items */}
          <div className="mega-menu-banner col-span-4">
            <div className="banner-content bg-gray-200 p-4 text-center">
              <h2 className="text-lg font-bold">Special Offer!</h2>
              <p className="text-sm text-gray-600">
                Check out our latest deals and discounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
