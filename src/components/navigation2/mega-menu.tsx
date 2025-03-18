interface MegaMenuProps {
  sections: {
    title: string;
    items: {
      title: string;
      href: string;
      description?: string;
    }[];
  }[];
}

export function MegaMenu({ sections }: MegaMenuProps) {
  return (
    <div className="menu-content absolute left-0 top-full z-50 mt-1 w-screen max-w-screen-lg rounded-md border bg-background p-4 shadow-lg">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <div key={section.title} className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="font-medium">{item.title}</div>
                    {item.description && (
                      <div className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </div>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
