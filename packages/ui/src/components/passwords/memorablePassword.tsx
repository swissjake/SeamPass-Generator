"use client";
import { useState, useEffect } from "react";
import {
  generateMemorablePassword,
  checkPasswordStrength,
} from "@seampass/core";
import {
  copyToClipboard,
  trackPasswordGeneration,
  trackPasswordCopy,
  trackPasswordStrength,
  trackSettingsChange,
} from "@seampass/shared";
import { PasswordInput } from "../shared/passwordInput";
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

    // Track password generation
    trackPasswordGeneration("memorable", options);
  };

  useEffect(() => {
    generatePassword();
  }, [wordList, customOptions, wordCount]);

  useEffect(() => {
    if (password) {
      const result = checkPasswordStrength(password);
      setPasswordStrength(result.strengthMessage);
      setStrengthColor(result.color);

      // Track password strength
      trackPasswordStrength(result.strengthMessage, "memorable");
    }
  }, [password]);

  const handleCopy = () => {
    copyToClipboard(password, (success) => {
      if (success) {
        // Track successful copy
        trackPasswordCopy("memorable");
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
      // Track word count change
      trackSettingsChange("wordCount", newLength, "memorable");
    }
  };

  // Track custom options changes
  useEffect(() => {
    // Track custom options changes
    customOptions.forEach((option) => {
      const optionKey = option.text.toLowerCase().replace(" ", "_");
      trackSettingsChange(optionKey, option.isTrue, "memorable");
    });
  }, [customOptions]);

  return (
    <div className={className}>
      {/* Password Display */}
      <PasswordInput
        handleCopy={handleCopy}
        handleRefresh={handleRefresh}
        strengthColor={strengthColor}
        passwordStrength={passwordStrength}
        password={password}
      />
      {/* Word Count Input */}
      <div className="mt-[10px]">
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
