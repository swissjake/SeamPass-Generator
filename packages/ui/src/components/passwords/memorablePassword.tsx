"use client";

import { useState, useEffect } from "react";
import {
  generateMemorablePassword,
  checkPasswordStrength,
} from "@seampass/core";
import { copyToClipboard } from "@seampass/shared";
import { Copy01Icon, RefreshIcon } from "hugeicons-react";
import { Text } from "../shared/text";
import MemorableCustomization from "../customizations/memorable";
import { Input } from "../primitives/input";
import toast from "react-hot-toast";

interface MemorablePasswordProps {
  className?: string;
}

export const MemorablePassword: React.FC<MemorablePasswordProps> = ({
  className,
}) => {
  const [password, setPassword] = useState<string>("");
  const [wordList, setWordList] = useState<string[]>([]);
  const [wordCount, setWordCount] = useState<number>(3);
  const [passwordStrength, setPasswordStrength] = useState<string>("");
  const [strengthColor, setStrengthColor] = useState<string>("");
  const [customOptions, setCustomOptions] = useState([
    { text: "Use number", isTrue: false },
    { text: "Use characters", isTrue: false },
    { text: "Use Uppercase", isTrue: false },
  ]);

  // Load word list
  useEffect(() => {
    fetch("/eff_large_wordlist.txt")
      .then((response) => response.text())
      .then((text) => {
        const words = text.split("\n");
        setWordList(words.filter((word) => word.trim()));
      })
      .catch(() => {
        // Fallback word list
        setWordList(["apple", "banana", "cherry", "dragon", "eagle", "forest"]);
      });
  }, []);

  const generatePassword = () => {
    if (wordList.length === 0) return;

    const options = {
      useNumbers:
        customOptions.find((opt) => opt.text === "Use number")?.isTrue ?? false,
      useCharacters:
        customOptions.find((opt) => opt.text === "Use characters")?.isTrue ??
        false,
      useUppercase:
        customOptions.find((opt) => opt.text === "Use Uppercase")?.isTrue ??
        false,
      wordCount,
    };

    const newPassword = generateMemorablePassword(wordList, options);
    setPassword(newPassword);
  };

  useEffect(() => {
    generatePassword();
  }, [wordList, customOptions, wordCount]);

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

  const handlePasswordLengthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newLength = parseInt(event.target.value, 10);
    if (!isNaN(newLength) && newLength >= 1 && newLength <= 10) {
      setWordCount(newLength);
    }
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

      {/* Word Count Input */}
      <div>
        <Input
          className="w-[133px] h-[37px] text-[20px] text-grey-100"
          label="Number of words"
          type="number"
          value={wordCount.toString()}
          onChange={handlePasswordLengthChange}
          min={1}
          max={10}
        />
      </div>

      {/* Customization */}
      <MemorableCustomization
        options={customOptions}
        setOptions={setCustomOptions}
      />
    </div>
  );
};
