import { cn } from "@/utils/cn";
import { Search, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import AccountLinks from "../common/account-links";
import Logo from "../common/Logo";
import Nav from "../navigation/nav";
import HamburgerIcon from "./humburger-icon";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleStickyHeaderDesktop = () => {
    const scrollPosition = window.scrollY;

    // Check if should be sticky
    if (scrollPosition > 80) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }

    // Handle visibility for slide animation
    if (scrollPosition > lastScrollY && scrollPosition > 150) {
      // Scrolling down and past threshold
      setIsVisible(false);
    } else {
      // Scrolling up or at top
      setIsVisible(true);
    }

    setLastScrollY(scrollPosition);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleStickyHeaderDesktop);

      return () => {
        window.removeEventListener("scroll", handleStickyHeaderDesktop);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "bg-none text-black transition-all duration-300 ease-in-out",
        isSticky &&
          "fixed w-full z-index-[var(--header-z-index)] bg-black text-white",
        isSticky && isVisible
          ? "translate-y-0"
          : isSticky
            ? "-translate-y-full"
            : "",
        isSticky && "shadow-md",
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
