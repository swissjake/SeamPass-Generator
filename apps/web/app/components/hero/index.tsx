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
import Lock from "../../assets/lock";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Hero = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("random");
  const type = searchParams.get("type");

  return (
    <section className="">
      <ContainerLayout>
        <div className="flex flex-col items-center  text-center  relative ">
          <div className=" absolute left-[254px] top-6 hidden xl:block">
            <Lock />
          </div>

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

          <div className=" absolute right-[241px] top-[120px] hidden xl:block">
            <Lock />
          </div>
        </div>
        <div className="mt-3 max-w-[600px] mx-auto">
          <PasswordTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        <div className="flex  justify-center">
          <GeneratorLayout>
            {/* Tabs */}

            {/* Password Generators */}
            <div className="mt-8">
              {activeTab === "random" && <RandomPassword />}
              {activeTab === "memorable" && <MemorablePassword />}
            </div>
          </GeneratorLayout>
        </div>

        {/* SEO-friendly feature highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              🔒 100% Secure
            </h2>
            <p className="text-sm text-gray-600">
              All password generation happens locally in your browser. No data
              is ever sent to our servers.
            </p>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              ⚡ Instant Generation
            </h2>
            <p className="text-sm text-gray-600">
              Generate strong passwords instantly with our advanced algorithms
              and real-time strength analysis.
            </p>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Customizable
            </h2>
            <p className="text-sm text-gray-600">
              Customize your passwords with length, character types, and
              memorable word combinations.
            </p>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default Hero;
