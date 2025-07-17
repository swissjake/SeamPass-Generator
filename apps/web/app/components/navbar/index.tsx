import React from "react";
import ExtendedNav from "./extended-nav";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  return (
    <nav className="bg-white fixed z-30 top-0 w-full h-[77px] ">
      <div className="hidden sm:block">
        <ExtendedNav />
      </div>
      <div className="sm:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
