import React from "react";
import { User, UserPlus2, LogInIcon, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
const AccountLinks = () => {
  return (
    <div>
      <Popover className="isolation relative cursor-pointer">
        <PopoverButton>
          <User />
        </PopoverButton>

        <PopoverPanel className="absolute z-50 bg-white p-2 rounded-md shadow-md">
          <div className="grid ">
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/login" className="flex items-center gap-2">
                  <LogInIcon />
                  Sign in
                </Link>
              </li>
              <li>
                <Link to="/register" className="flex items-center gap-2">
                  <UserPlus2 />
                  Register
                </Link>
              </li>
              <li>
                <Link to="/register" className="flex items-center gap-2">
                  <LogOut />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  );
};

export default AccountLinks;
