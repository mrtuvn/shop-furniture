import { NAVIGATION_DEMO_2 } from "@/data/navigation";
import { cn } from "@/utils/cn";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (name: string) => {
    setExpandedItems((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name],
    );
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
      />

      {/* Slide-in menu */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-xl flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Menu header */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Navigation items */}
        <div className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {NAVIGATION_DEMO_2.map((item) => (
              <li key={item.id} className="border-b border-gray-100 pb-2">
                {item.type ? (
                  <div>
                    <button
                      onClick={() => toggleItem(item.name)}
                      className="flex w-full items-center justify-between py-2 px-3 text-left font-medium hover:bg-gray-50 rounded-md"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          expandedItems.includes(item.name) ? "rotate-180" : "",
                        )}
                      />
                    </button>

                    {expandedItems.includes(item.name) && item.children && (
                      <div className="mt-1 ml-4 space-y-1">
                        {item.children.map((child) => (
                          <a
                            key={child.id}
                            href={child.href}
                            className="block py-2 px-3 text-sm hover:bg-gray-50 rounded-md"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block py-2 px-3 font-medium hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="border-t p-4">
          <div className="space-y-2">
            <a
              href="/login"
              className="block w-full text-center py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md font-medium"
            >
              Log in
            </a>
            <a
              href="/signup"
              className="block w-full text-center py-2 px-4 bg-black text-white hover:bg-gray-800 rounded-md font-medium"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
