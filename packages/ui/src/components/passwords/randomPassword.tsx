"use client";

import { useState, useEffect } from "react";
import { generateRandomPassword, checkPasswordStrength } from "@seampass/core";
import { copyToClipboard } from "@seampass/shared";
import { Copy01Icon, RefreshIcon } from "hugeicons-react";
import { Slider } from "../primitives/slider";
import { Text } from "../shared/text";
import RandomCustomization from "../customizations/random";
import toast from "react-hot-toast";

interface RandomPasswordProps {
  className?: string;
}

export const RandomPassword: React.FC<RandomPasswordProps> = ({
  className,
}) => {
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(12);
  const [passwordStrength, setPasswordStrength] = useState<string>("");
  const [strengthColor, setStrengthColor] = useState<string>("");
  const [options, setOptions] = useState({
    useNumbers: true,
    useLetters: true,
    useCharacters: false,
    useCapitals: false,
  });

  const generatePassword = () => {
    const newPassword = generateRandomPassword({
      ...options,
      length: passwordLength,
    });
    setPassword(newPassword);
  };

  useEffect(() => {
    generatePassword();
  }, [options, passwordLength]);

  useEffect(() => {
    if (password) {
      const result = checkPasswordStrength(password);
      setPasswordStrength(result.strengthMessage);
      setStrengthColor(result.color);
    }
  }, [password]);

  const handleCopy = () => {
    copyToClipboard(password, (success) => {
      if (success) {
        toast("Copied!", {
          position: "top-center",
          style: { backgroundColor: "#4CAF50", color: "#ffffff" },
        });
      } else {
        toast("Failed to copy!", {
          position: "top-center",
          style: { backgroundColor: "#FF0000", color: "#ffffff" },
        });
      }
    });
  };

  const handleRefresh = () => {
    generatePassword();
  };

  const handleOptionChange = (key: keyof typeof options) => {
    setOptions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className={className}>
      {/* Password Display */}
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
              className="mx-5 cursor-pointer active:size-10 transition-all active:rotate-180 duration-300"
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
          onClick={handleCopy}
          className="flex items-center cursor-pointer w-fit"
        >
          <Text size="xl" className="text-primary-500 cursor-pointer underline">
            Copy
          </Text>
          <Copy01Icon className="text-primary-500 size-4 ml-1" />
        </div>
      </div>

      {/* Password Length Slider */}
      <Text size="xxl" variant="primary" className="mt-[10px]">
        Password Length
      </Text>
      <div className="flex items-center mt-4">
        <Slider
          max={50}
          min={8}
          step={1}
          value={[passwordLength]}
          onValueChange={(value) => setPasswordLength(value[0] ?? 0)}
          className="w-[100%] h-[21px]"
        />
        <Text size="xxl" variant="primary" className="pl-4">
          {passwordLength}
        </Text>
      </div>

      {/* Customization Options */}
      <RandomCustomization
        options={options}
        onCheckedChange={(key) =>
          handleOptionChange(key as keyof typeof options)
        }
      />
    </div>
  );
};
