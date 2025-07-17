import { Tabs, TabsList, TabsTrigger } from "../primitives/tabs";

interface PasswordTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

export const PasswordTabs = ({ activeTab, onTabChange }: PasswordTabsProps) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
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
    </Tabs>
  );
};
