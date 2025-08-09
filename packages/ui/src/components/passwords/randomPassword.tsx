"use client";
import { useState, useEffect } from "react";
import { generateRandomPassword, checkPasswordStrength } from "@seampass/core";
import { copyToClipboard } from "@seampass/shared";
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
