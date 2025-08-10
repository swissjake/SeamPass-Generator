"use client";
import React from "react";
import { ContainerLayout } from "@seampass/ui";
import Image from "next/image";
import logo from "../../assets/logo/logo.svg";
import { Icons } from "../icons";

const ExtendedNav = () => {
  return (
    <ContainerLayout>
      <div className="flex !h-[77px] justify-between items-center pt-2">
        <Image
          src={logo}
          width={140}
          height={40}
          alt="logo"
          className="w-[120px] md:w-[140px] lg:w-[160px] h-auto"
        />

        {/* Social Links */}
        <div className="flex items-center gap-2.5">
          {/* GitHub Link */}
          <a
            href="https://github.com/swissjake/SeamPass-Generator"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="View on GitHub"
            title="GitHub"
          >
            <Icons.Github className="w-6 h-6 text-gray-700 hover:text-black" />
          </a>

          {/* NPM Link */}
          <a
            href="https://www.npmjs.com/package/seampass-password-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="View on NPM"
            title="NPM"
          >
            <Icons.npm className="w-6 h-6 text-red-600" />
          </a>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default ExtendedNav;
