"use client";
import React from "react";
import {
  Text,
  Header,
  ContainerLayout,
  PasswordTabs,
  RandomPassword,
  MemorablePassword,
  GeneratorLayout,
} from "@seampass/ui";
import { useState } from "react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("random");

  return (
    <section className="">
      <ContainerLayout>
        <div className="flex flex-col items-center  text-center  relative ">
          {/* <div className=" absolute left-[254px] top-6 hidden xl:block">
            <Lock />
          </div> */}

          <Header
            weight="semibold"
            variant="primary-100"
            size="xl"
            alignment="center"
            className="w-full sm:max-w-[500px] md:max-w-[600px] xl:max-w-[700px] leading-[28px] md:leading-[48px] lg:leading-[57px] "
          >
            <span className=" text-primary-500">SeamPass:</span> Your Essential
            Password Generator Solution
          </Header>

          <Text
            size="lg"
            variant="primary"
            alignment="center"
            className="max-w-[500px] mt-3 md:mt-6 "
          >
            SeamPass provides you with the tools and features needed to generate
            strong, secure, and memorable passwords.
          </Text>
        </div>
        <div className="mt-3 max-w-[600px] mx-auto">
          <PasswordTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        <div className="flex  justify-center">
          {/* <GeneratorLayout> */}
          {/* Tabs */}

          {/* Password Generators */}
          <div className="mt-8">
            {activeTab === "random" && <RandomPassword />}
            {activeTab === "memorable" && <MemorablePassword />}
          </div>
          {/* </GeneratorLayout> */}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default Hero;
