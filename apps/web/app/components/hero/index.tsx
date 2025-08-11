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
  I18nProvider,
} from "@seampass/ui";
import Lock from "../../assets/lock";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("random");
  const { translations } = useLanguage();

  return (
    <I18nProvider translations={translations}>
      <section className="">
        <ContainerLayout>
          <div className="flex flex-col items-center text-center relative">
            <div className=" absolute left-[254px] top-6 hidden xl:block">
              <Lock />
            </div>

            <Header
              weight="semibold"
              variant="primary-100"
              size="xl"
              alignment="center"
              className="w-full sm:max-w-[500px] md:max-w-[600px] xl:max-w-[700px] leading-[28px] md:leading-[48px] lg:leading-[57px]"
            >
              {translations.heroTitle}
            </Header>

            <Text
              size="lg"
              variant="primary"
              alignment="center"
              className="max-w-[500px] mt-3 md:mt-6"
            >
              {translations.heroDescription}
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

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {translations.secureTitle}
              </h2>
              <p className="text-sm text-gray-600">
                {translations.secureDescription}
              </p>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {translations.instantTitle}
              </h2>
              <p className="text-sm text-gray-600">
                {translations.instantDescription}
              </p>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {translations.customizableTitle}
              </h2>
              <p className="text-sm text-gray-600">
                {translations.customizableDescription}
              </p>
            </div>
          </div>
        </ContainerLayout>
      </section>
    </I18nProvider>
  );
};

export default Hero;
