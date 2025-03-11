export function Nav() {
  return (
    <nav className="container mx-auto flex justify-between items-center">
      <a href="/" className="text-2xl font-bold">
        Logo
      </a>
      <ul className="flex space-x-6">
        <li>
          <a href="/category" className="hover:underline">
            Categories
          </a>
        </li>
        <li>
          <a href="/products" className="hover:underline">
            Products
          </a>
        </li>
        <li>
          <a href="/sale" className="hover:underline">
            Sale
          </a>
        </li>
      </ul>
      <input
        type="search"
        placeholder="Search..."
        className="border p-2 rounded"
      />
    </nav>
  );
}
