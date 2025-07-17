import React from "react";
// import logo from "@/assets/logo/logo.svg";
// import Image from "next/image";
import { ContainerLayout } from "@seampass/ui";

const Footer = () => {
  return (
    <section className="w-full mt-[64px] lg:mt-auto ">
      <ContainerLayout>
        <div className="flex flex-col gap-1 lg:gap-2 items-center text-center  py-6">
          {/* <Image
            src={logo}
            width={140}
            height={40}
            alt="logo"
            className="w-[120px] md:w-[140px] lg:w-[160px] h-auto"
          /> */}

          <span className=" text-[14px] md:text-[16px] text-grey-100">
            Copyright &copy; 2024. All rights reserved
          </span>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default Footer;
