import React from "react";
import Nav from "../common/nav";
import { Search, ShoppingBag } from "lucide-react";
import LanguageSwitcher from "@/components/common/language-switcher";
import Logo from "../common/Logo";

import AccountLinks from "../common/account-links";

const Header = () => {
  return (
    <header>
      <div className=" mx-auto flex flex-col">
        <div className="top-header py-2">
          <div className="container mx-auto flex justify-end items-center">
            <LanguageSwitcher />
          </div>
        </div>
        <div className="bg-black bottom-header py-2">
          <div className="container top-0 mx-auto flex justify-between py-4 items-center">
            <Logo />
            <Nav />
            <div className="flex items-center justify-center gap-3">
              <AccountLinks />
              <Search />
              <ShoppingBag />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
