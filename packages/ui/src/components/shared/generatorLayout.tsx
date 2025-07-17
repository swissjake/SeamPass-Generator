import React, { FC, ReactNode } from "react";
interface GeneratorLayoutProps {
  children: ReactNode;
}
export const GeneratorLayout: FC<GeneratorLayoutProps> = ({ children }) => {
  return (
    <div className="w-full max-w-[1140px] h-full relative p-[3px] md:p-[10px] mt-4 ">
      <div className="w-[59px] md:w-[199px] h-[79px] md:h-[131px] bg-primary-500 rounded-[9px] md:rounded-[24px] absolute top-0 right-0" />
      <div className="w-[59px] md:w-[199px] h-[79px] md:h-[131px] bg-primary-500 rounded-[9px] md:rounded-[24px] absolute top-0 left-0" />
      <div className="w-[59px] md:w-[199px] h-[79px] md:h-[131px] bg-primary-500 rounded-[9px] md:rounded-[24px] absolute bottom-0 right-0" />
      <div className="w-[59px] md:w-[199px] h-[79px] md:h-[131px] bg-primary-500 rounded-[9px] md:rounded-[24px] absolute bottom-0 left-0" />

      <div className=" bg-white border border-[#F1F1F1] w-full h-full rounded-[8px] md:rounded-[16px] py-[32px] px-[22px] relative ">
        {children}
      </div>
    </div>
  );
};
