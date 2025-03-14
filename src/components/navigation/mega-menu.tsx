import React from "react";
import { NavItemType } from "@/types/navigation";

const MegaMenu: React.FC<{ menuItem: NavItemType }> = ({ menuItem }) => {
  return (
    <div className="mega-menu-container w-full min-w-[100vư] py-[40px] absolute left-0 right-0 bg-white shadow-lg isolation top-full z-[var(--z-index-mega-menu)] hidden group-hover:block">
      <div className="container mx-auto py-6 px-4">
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
