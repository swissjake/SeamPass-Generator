import { InformationDiamondIcon } from "hugeicons-react";
import { Tooltip } from "react-tooltip";
import { Switch } from "../primitives/switch";
import { Text } from "../shared/text";

interface CustomizationProps {
  options: {
    text: string;
    isTrue: boolean;
  }[];
  setOptions: React.Dispatch<
    React.SetStateAction<
      {
        text: string;
        isTrue: boolean;
      }[]
    >
  >;
}

interface TooltipInfo {
  header: string;
  message: string;
}

interface TooltipsInfo {
  [key: string]: TooltipInfo;
}

const Customization: React.FC<CustomizationProps> = ({
  setOptions,
  options,
}) => {
  const handleChecked = (index: number) => {
    setOptions((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, isTrue: !item.isTrue } : item
      )
    );
  };

  const tooltipsInfo: TooltipsInfo = {
    "Use number": {
      header: "Numeric Characters",
      message: "Include numbers (0-9) to make your password stronger.",
    },
    "Use characters": {
      header: "Special Characters",
      message: "Use symbols like @, #, $ to add complexity to your password.",
    },
    "Use Uppercase": {
      header: "Uppercase Letters",
      message: "Capital letters (A-Z) can help secure your password further.",
    },
  };

  return (
    <div className="mt-4">
      <div className="h-[0.5px] border-b-grey-200 w-[60%]" />
      {options.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-[10px] border-b-[0.5px] border-b-grey-200"
        >
          <div className="flex items-center gap-1">
            <Text size="xxl" variant="primary-200">
              {item.text}
            </Text>
            <a data-tooltip-id={`tooltip-${index}`}>
              <InformationDiamondIcon className="size-5 text-[#197CE2] cursor-pointer" />
            </a>
            <Tooltip
              id={`tooltip-${index}`}
              style={{ backgroundColor: "#001F3F" }}
            >
              <Text size="normal" weight="medium" className="text-white">
                {tooltipsInfo[item.text]?.header}
              </Text>
              <Text
                weight="regular"
                className="text-white text-[12px] max-w-[150px] w-full"
              >
                {tooltipsInfo[item.text]?.message}
              </Text>
            </Tooltip>
          </div>
          <Switch
            checked={item.isTrue}
            onCheckedChange={() => handleChecked(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Customization;
