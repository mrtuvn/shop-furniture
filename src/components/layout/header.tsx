import React from "react";
import { Nav } from "../common/nav";
import LanguageSwitcher from "@/components/common/language-switcher";
const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex flex-col">
        <div className="flex justify-end pb-2">
          <LanguageSwitcher />
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
