"use client";
import { useState, useEffect } from "react";
import { generateRandomPassword, checkPasswordStrength } from "@seampass/core";
import {
  copyToClipboard,
  trackPasswordGeneration,
  trackPasswordCopy,
  trackPasswordStrength,
  trackSettingsChange,
} from "@seampass/shared";
import { Slider } from "../primitives/slider";
import { Text } from "../shared/text";
import RandomCustomization from "../customizations/random";
import toast from "react-hot-toast";
import { PasswordInput } from "../shared/passwordInput";

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

    // Track password generation
    trackPasswordGeneration("random", { ...options, length: passwordLength });
  };

  useEffect(() => {
    generatePassword();
  }, [options, passwordLength]);

  useEffect(() => {
    if (password) {
      const result = checkPasswordStrength(password);
      setPasswordStrength(result.strengthMessage);
      setStrengthColor(result.color);

      // Track password strength
      trackPasswordStrength(result.strengthMessage, "random");
    }
  }, [password]);

  const handleCopy = () => {
    copyToClipboard(password, (success) => {
      if (success) {
        // Track successful copy
        trackPasswordCopy("random");
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

  // Track settings changes
  const handleLengthChange = (value: number[]) => {
    const newLength = value[0] ?? 0;
    setPasswordLength(newLength);
    trackSettingsChange("length", newLength, "random");
  };

  const handleOptionChange = (optionKey: string, value: boolean) => {
    setOptions((prev) => ({ ...prev, [optionKey]: value }));
    trackSettingsChange(optionKey, value, "random");
  };

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
          onValueChange={handleLengthChange}
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
          handleOptionChange(
            key as string,
            !options[key as keyof typeof options] // Toggle the current value
          )
        }
      />
    </div>
  );
};
