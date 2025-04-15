import useDebounce from "@/hooks/use-debounce";
import { toggleCart } from "@/redux/cart.slice";
import { useAppDispatch, useAppSelector } from "@/store";
import { cn } from "@/utils/cn";
import { Search, ShoppingBag } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import CartDrawer from "../cart/cart-drawer";
import AccountLinks from "../common/account-links";
import Logo from "../common/Logo";
import MobileNav from "../navigation/mobile-nav";
import Nav from "../navigation/nav";
import HamburgerIcon from "./humburger-icon";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Close mobile menu when scrolling
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [debouncedScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Cart functionality (Redux)
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);

  const openCart = () => {
    dispatch(toggleCart());
  };

  return (
    <>
      <header
        className={cn(
          "xs:bg-black md:bg-transparent md:absolute xs:text-white md:text-black transition-all duration-300 ease-in-out w-full",
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
              <span className="md:hidden">
                <HamburgerIcon
                  onClick={toggleMobileMenu}
                  isOpen={isMobileMenuOpen}
                />
              </span>
              <Logo />
              <Nav />
              <div className="flex items-center justify-center gap-3">
                <AccountLinks />
                <Search />
                <button
                  onClick={openCart}
                  className="relative md:block"
                  aria-label="Open cart"
                >
                  <ShoppingBag />
                  <span className="cart-count absolute top-[-5px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {items.length}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Cart Drawer */}
      <CartDrawer />
    </>
  );
};

export default Header;
