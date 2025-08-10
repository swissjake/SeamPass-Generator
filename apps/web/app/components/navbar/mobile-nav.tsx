"use client";
import React, { useState } from "react";
import { ContainerLayout, ComponentVisibility } from "@seampass/ui";
import Image from "next/image";
import logo from "../../assets/logo/logo.svg";
import { ArrowLeft01Icon } from "hugeicons-react";
import { Icons } from "../icons";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ContainerLayout>
      <>
        <div className="flex !h-[77px] justify-between items-center">
          <Image
            src={logo}
            width={120}
            height={35}
            className="object-contain"
            alt="logo"
          />

          {/* Social Links for Mobile */}
          <div className="flex items-center gap-1.5">
            {/* GitHub Link */}
            <a
               href="https://github.com/swissjake/SeamPass-Generator"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="View on GitHub"
            >
              <Icons.Github className="size-5 text-gray-700" />
            </a>

            {/* NPM Link */}
            <a
              href="https://www.npmjs.com/package/seampass-password-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="View on NPM"
            >
              <Icons.npm className="size-5 text-red-600" />
            </a>
          </div>
        </div>

        <ComponentVisibility appear={showMenu}>
          <div className="h-full left-0 w-full px-4 bg-white fixed">
            <div className="relative w-full">
              <span
                onClick={() => setShowMenu(false)}
                className="flex items-center relative cursor-pointer"
              >
                <ArrowLeft01Icon />
                Go back
              </span>
            </div>
          </div>
        </ComponentVisibility>
      </>
    </ContainerLayout>
  );
};

export default MobileNav;
