"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

import { MobileMenu } from "./mobile-menu";
import { MegaMenu } from "./mega-menu";
import { DropdownMenu } from "./dropdown-menu";
import { cn } from "@/utils/cn";
import { Button } from "@/components/common/button";

// Navigation data structure
const navigationData = [
  {
    title: "Products",
    type: "mega",
    items: [
      {
        title: "Development",
        items: [
          {
            title: "Next.js",
            href: "#",
            description: "React framework for production",
          },
          {
            title: "Vercel",
            href: "#",
            description: "Develop. Preview. Ship.",
          },
          {
            title: "Turborepo",
            href: "#",
            description: "High-performance build system",
          },
        ],
      },
      {
        title: "Design",
        items: [
          {
            title: "Figma",
            href: "#",
            description: "Design and prototype together",
          },
          {
            title: "Framer",
            href: "#",
            description: "Interactive design tool",
          },
          { title: "Sketch", href: "#", description: "Digital design toolkit" },
        ],
      },
      {
        title: "Analytics",
        items: [
          {
            title: "Google Analytics",
            href: "#",
            description: "Web analytics service",
          },
          {
            title: "Mixpanel",
            href: "#",
            description: "Product analytics for product people",
          },
          { title: "Hotjar", href: "#", description: "Behavior analytics" },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    type: "dropdown",
    items: [
      { title: "For Startups", href: "#" },
      { title: "For Enterprise", href: "#" },
      { title: "For E-commerce", href: "#" },
      { title: "For Developers", href: "#" },
    ],
  },
  {
    title: "Resources",
    type: "dropdown",
    items: [
      { title: "Documentation", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Guides", href: "#" },
      { title: "Help Center", href: "#" },
    ],
  },
  {
    title: "Company",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
];

export default function Navigation2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize to determine mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle click outside to close menus
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".nav-item") && !target.closest(".menu-content")) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (title: string) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground">
                M
              </span>
            </div>
            <span className="text-xl font-bold">MegaNav</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigationData.map((item) => (
              <div key={item.title} className="nav-item relative">
                {item.type ? (
                  <button
                    onClick={() => toggleMenu(item.title)}
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      activeMenu === item.title
                        ? "bg-accent text-accent-foreground"
                        : ""
                    )}
                  >
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <a
                    href={item.href || "#"}
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.title}
                  </a>
                )}

                {/* Render appropriate menu type */}
                {activeMenu === item.title && item.type === "mega" && (
                  <MegaMenu sections={item.items} />
                )}
                {activeMenu === item.title && item.type === "dropdown" && (
                  <DropdownMenu items={item.items} />
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* CTA and Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Button variant="outline" size="sm" className="mr-2">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <MobileMenu items={navigationData} />}
    </header>
  );
}
