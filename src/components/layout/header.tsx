import useDebounce from "@/hooks/use-debounce";
import { cn } from "@/utils/cn";
import { Search, ShoppingBag } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import AccountLinks from "../common/account-links";
import Logo from "../common/Logo";
import Nav from "../navigation/nav";
import HamburgerIcon from "./humburger-icon";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Debounce the scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setLastScrollY(scrollPosition);
  }, []);

  // Apply a debounced version of the useEffect
  const debouncedScrollY = useDebounce(lastScrollY, 100);

  // Update sticky state based on debounced scroll position
  useEffect(() => {
    // Check if should be sticky
    if (debouncedScrollY > 80) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }

    // Handle visibility for slide animation
    if (debouncedScrollY > lastScrollY && debouncedScrollY > 150) {
      // Scrolling down and past threshold
      setIsVisible(false);
    } else {
      // Scrolling up or at top
      setIsVisible(true);
    }
  }, [debouncedScrollY, lastScrollY]);

  // Add scroll event listener
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <header
      className={cn(
        "bg-none text-black transition-all duration-300 ease-in-out w-full",
        // Use a high z-index value to ensure header is above other elements
        "z-[var(--z-index-overlay)]",
        isSticky && "fixed top-0 left-0 bg-black text-white shadow-md",
        isSticky && isVisible
          ? "translate-y-0"
          : isSticky
            ? "-translate-y-full"
            : "",
      )}
    >
      <div className="mx-auto flex flex-col">
        <div className="bottom-header py-2 relative">
          <div className="container xs:px-2 top-0 mx-auto flex justify-between py-4 items-center">
            <Logo />
            <Nav />
            <div className="flex items-center justify-center gap-3">
              <AccountLinks />
              <Search />
              <span className="xs:hidden relative md:block">
                <ShoppingBag />
                <span className="cart-count absolute top-[-5px] right-[-10px] ">
                  0
                </span>
              </span>
              <span className="md:hidden">
                <HamburgerIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
