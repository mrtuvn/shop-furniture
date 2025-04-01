import { HomeIcon, SearchIcon, ShoppingCartIcon, UserIcon } from "lucide-react";

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-[var(--z-index-menu)] border-t border-gray-300">
        <div className="flex justify-around items-center py-2 safe-area-bottom">
          <a
            href="/"
            className="flex flex-col items-center text-gray-700 hover:text-primary"
          >
            <HomeIcon className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </a>
          <a
            href="/cart"
            className="flex flex-col items-center text-gray-700 hover:text-primary"
          >
            <ShoppingCartIcon className="w-6 h-6" />
            <span className="text-xs">Cart</span>
          </a>
          <a
            href="/search"
            className="flex flex-col items-center text-gray-700 hover:text-primary"
          >
            <SearchIcon className="w-6 h-6" />
            <span className="text-xs">Search</span>
          </a>
          <a
            href="/user"
            className="flex flex-col items-center text-gray-700 hover:text-primary"
          >
            <UserIcon className="w-6 h-6" />
            <span className="text-xs">User</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
