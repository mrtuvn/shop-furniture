import { SearchIcon } from "lucide-react";
import React, { useRef } from "react";

const SearchStack = (query: string, setQuery: (query: string) => void) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="flex items-center justify-center border-2 border-gray-300 rounded-md p-2">
      <SearchIcon className="w-4 h-4" />
      <input
        ref={ref}
        name="efef"
        placeholder="Search technology stack"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchStack;
