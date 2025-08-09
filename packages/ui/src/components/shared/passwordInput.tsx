"use client";

import { Copy01Icon, RefreshIcon } from "hugeicons-react";
import { Text } from "../shared/text";
import { useMemo, useState } from "react";

interface PasswordInputProps {
  handleRefresh: () => void;
  password: string;
  passwordStrength: string;
  strengthColor: string;
  handleCopy: () => void;
  isExtension?: boolean;
}

export const PasswordInput = ({
  handleRefresh,
  password,
  passwordStrength,
  strengthColor,
  handleCopy,
}: PasswordInputProps) => {
  const [copyState, setCopyState] = useState<"idle" | "copying" | "copied">(
    "idle"
  );

  // Detect if its a browser extension context
  const isExtension = useMemo(() => {
    try {
      return (
        typeof window !== "undefined" &&
        typeof (window as any).chrome !== "undefined" &&
        (window as any).chrome?.runtime?.id
      );
    } catch {
      return false;
    }
  }, []);

  const handleCopyClick = async () => {
    if (isExtension) {
      setCopyState("copying");
      handleCopy();
      setCopyState("copied");
      setTimeout(() => {
        setCopyState("idle");
      }, 2000);
    } else {
      handleCopy();
    }
  };

  return (
    <div>
      <div className="flex items-center border border-grey-200 rounded-[16px] h-[75px] overflow-hidden">
        <input
          readOnly
          type="text"
          className="flex-1 h-full text-primary-300 font-semibold outline-none text-[16px] md:text-[20px] px-4 bg-transparent"
          value={password}
        />
        <div className="flex items-center">
          <div className="h-[46px] w-fit border border-grey-200" />
          <div className="active:scale-105 transition-all rotate-45 duration-300">
            <RefreshIcon
              onClick={handleRefresh}
              className="mx-5 cursor-pointer text-gray-500   active:size-10 transition-all active:rotate-180 duration-300"
            />
          </div>
        </div>
      </div>

      {/* Password Strength and Copy */}
      <div className="flex space-x-6 justify-between mt-2 border-b border-grey-200 pb-4 pr-[22px]">
        <div
          className="py-2 px-4 rounded-[16px]"
          style={{
            backgroundColor:
              passwordStrength === "Strong"
                ? "#ECFFED"
                : passwordStrength === "Weak"
                  ? "#FFD9D7"
                  : "#FFEDD8",
          }}
        >
          <span style={{ color: strengthColor }}>{passwordStrength}</span>
        </div>
        <div
          onClick={handleCopyClick}
          className="flex items-center cursor-pointer w-fit transition-colors duration-200"
        >
          <Text
            size="xl"
            className={`cursor-pointer underline transition-colors duration-200 ${
              isExtension && copyState === "copied"
                ? "text-success-100"
                : "text-primary-500"
            }`}
          >
            {isExtension && copyState === "copied" ? "Copied!" : "Copy"}
          </Text>
          <Copy01Icon
            className={`size-4 ml-1 transition-colors duration-200 ${
              isExtension && copyState === "copied"
                ? "text-success-100"
                : "text-primary-500"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
