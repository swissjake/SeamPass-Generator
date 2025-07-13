import { InformationDiamondIcon } from "hugeicons-react";
import { Tooltip } from "react-tooltip";
import { Switch } from "../primitives/switch";
import { Text } from "../shared/text";

type CustomizationPasswordProps = {
  options: { [key: string]: boolean };
  onCheckedChange: (options: string) => void;
};

interface TooltipInfo {
  header: string;
  message: string;
}

interface TooltipsInfo {
  [option: string]: TooltipInfo;
}

const RandomCustomization: React.FC<CustomizationPasswordProps> = ({
  options,
  onCheckedChange,
}) => {
  const tooltipsInfo: TooltipsInfo = {
    useNumbers: {
      header: "Numeric Characters",
      message: "Add numbers (0-9) to strengthen the password.",
    },
    useLetters: {
      header: "Letters",
      message: "Use a mix of upper (A-Z) and lower (a-z) case letters.",
    },
    useCharacters: {
      header: "Special Characters",
      message: "Add symbols (e.g., @, #, $) for extra security.",
    },
    useCapitals: {
      header: "Capital Letters",
      message: "Capitals (A-Z) to strengthen the password.",
    },
  };

  // Map the option keys to display names
  const optionDisplayNames = {
    useNumbers: "Use numbers",
    useLetters: "Use letters",
    useCharacters: "Use characters",
    useCapitals: "Use capitals",
  };

  return (
    <div className="mt-4">
      <div className="border-b-0.5 border-b-grey-200 w-[60%]" />
      {Object.keys(options).map((option, index, arr) => (
        <div
          key={index}
          className={`flex items-center justify-between py-[10px] border-b border-b-grey-200 ${
            index === arr.length - 1 && "border-none"
          }`}
        >
          <div className="flex items-center gap-1">
            <Text size="xxl" variant="primary-200">
              {optionDisplayNames[option as keyof typeof optionDisplayNames]}
            </Text>
            <a data-tooltip-id={`tooltip-${index}`}>
              <InformationDiamondIcon className="size-5 text-[#197CE2] cursor-pointer" />
            </a>
            <Tooltip
              id={`tooltip-${index}`}
              style={{ backgroundColor: "#001F3F" }}
              className="opaque"
            >
              <Text size="md" weight="medium" className="text-white">
                {tooltipsInfo[option]?.header}
              </Text>
              <Text
                weight="regular"
                className="text-white text-[12px] max-w-[150px] w-full"
              >
                {tooltipsInfo[option]?.message}
              </Text>
            </Tooltip>
          </div>
          <Switch
            checked={options[option]}
            onCheckedChange={() => onCheckedChange(option)}
          />
        </div>
      ))}
    </div>
  );
};

export default RandomCustomization;
