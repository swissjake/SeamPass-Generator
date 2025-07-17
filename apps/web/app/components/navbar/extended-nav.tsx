"use client";
import React from "react";
import { ContainerLayout } from "@seampass/ui";
import Image from "next/image";
import logo from "../../assets/logo/logo.svg";
// import { Button } from "../button";
// import auth from "@/utils/auth";

const ExtendedNav = () => {
  // const { handleLogin, handleCreateAccount } = auth();

  return (
    <ContainerLayout>
      <div className="flex !h-[77px]  justify-between items-center pt-2  ">
        <Image
          src={logo}
          width={140}
          height={40}
          alt="logo"
          className="w-[120px] md:w-[140px] lg:w-[160px] h-auto"
        />
        <div></div>
        {/* <div className="w-fit flex items-center gap-[10px] ">
          <Button onClick={handleLogin} variant="tertiary" className="!w-fit px-8">
            Log in
          </Button>
          <Button onClick={handleCreateAccount} variant="primary" className="!w-fit px-4">
            Create account
          </Button>
        </div> */}
      </div>
    </ContainerLayout>
  );
};

export default ExtendedNav;
