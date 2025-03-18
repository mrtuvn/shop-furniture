interface DropdownMenuProps {
  items: {
    title: string;
    href: string;
  }[];
}

export function DropdownMenu({ items }: DropdownMenuProps) {
  return (
    <div className="menu-content absolute right-0 top-full z-50 mt-1 min-w-[200px] rounded-md border bg-background p-2 shadow-lg">
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.title}>
            <a
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
