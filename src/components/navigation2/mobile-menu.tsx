"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/common/button";
import { cn } from "@/utils/cn";

interface MobileMenuProps {
  items: {
    title: string;
    href?: string;
    type?: string;
    items?: any[];
  }[];
}

interface ItemProp {
  title: string;
  href?: string;
  type?: string;
  items?: any[];
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title],
    );
  };

  return (
    <div className="lg:hidden">
      <div className="border-t">
        <div className="container mx-auto max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-4">
          <nav className="flex flex-col space-y-1">
            {items.map((item: ItemProp) => (
              <div
                key={item.title}
                className="border-b border-border pb-1 pt-1"
              >
                {item.type ? (
                  <>
                    <button
                      onClick={() => toggleItem(item.title)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                    >
                      {item.title}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          expandedItems.includes(item.title)
                            ? "rotate-180"
                            : "",
                        )}
                      />
                    </button>
                    {expandedItems.includes(item.title) && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.type === "mega" ? (
                          // Render mega menu sections
                          <>
                            {item?.items?.map((section) => (
                              <div key={section.title} className="mb-2">
                                <div className="px-3 py-1 text-xs font-semibold text-muted-foreground">
                                  {section.title}
                                </div>
                                <div className="space-y-1">
                                  {section.items.map((subItem: any) => (
                                    <a
                                      key={subItem.title}
                                      href={subItem.href}
                                      className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                                    >
                                      <ChevronRight className="mr-2 h-3 w-3" />
                                      {subItem.title}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </>
                        ) : (
                          // Render dropdown items
                          <>
                            {item?.items?.map((subItem) => (
                              <a
                                key={subItem.title}
                                href={subItem.href}
                                className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                              >
                                <ChevronRight className="mr-2 h-3 w-3" />
                                {subItem.title}
                              </a>
                            ))}
                          </>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href || "#"}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-6 flex flex-col space-y-2">
            <Button variant="outline" className="w-full">
              Log in
            </Button>
            <Button className="w-full">Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
