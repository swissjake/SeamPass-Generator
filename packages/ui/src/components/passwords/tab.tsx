"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../primitives/tabs";
import { RandomPassword } from "./randomPassword";
import { MemorablePassword } from "./memorablePassword";

export const PasswordGenerator = () => {
  const [activeTab, setActiveTab] = useState("random");

  return (
    <div className="w-full max-w-[1140px] h-full relative p-[3px] md:p-[10px] mt-4">
      <div className="w-[59px] md:w-[199px] h-[79px] md:h-[131px] bg-primary-500 rounded-[9px] md:rounded-[24px] absolute top-0 right-0" />
      <div className="w-[59px] md:w-[199px] h-[79px] md:h-[131px] bg-primary-500 rounded-[9px] md:rounded-[24px] absolute top-0 left-0" />
      <div className="w-[59px] md:w-[199px] h-[79px] md:h-[131px] bg-primary-500 rounded-[9px] md:rounded-[24px] absolute bottom-0 right-0" />
      <div className="w-[59px] md:w-[199px] h-[79px] md:h-[131px] bg-primary-500 rounded-[9px] md:rounded-[24px] absolute bottom-0 left-0" />

      <div className="bg-white border border-[#F1F1F1] w-full h-full rounded-[8px] md:rounded-[16px] py-[32px] px-[22px] relative">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-[#F3F9FF] h-[64px] !w-full md:w-[573px] p-2">
            <TabsTrigger
              className="h-[42px] w-full text-[14px] sm:text-[16px] xl:text-[18px] text-primary-100 data-[state=active]:text-[#F6FAFF] data-[state=active]:bg-primary-500 cursor-pointer"
              value="random"
            >
              <span className="hidden sm:block">Generate&nbsp;</span> Random
              password
            </TabsTrigger>
            <TabsTrigger
              className="h-[42px] w-full text-[14px] sm:text-[16px] xl:text-[18px] text-primary-100 data-[state=active]:text-[#F6FAFF] data-[state=active]:bg-primary-500 cursor-pointer"
              value="memorable"
            >
              <span className="hidden sm:block">Generate&nbsp;</span>Memorable
              password
            </TabsTrigger>
          </TabsList>

          <div className="mt-8">
            {activeTab === "random" && <RandomPassword />}
            {activeTab === "memorable" && <MemorablePassword />}
          </div>
        </Tabs>
      </div>
    </div>
  );
};
