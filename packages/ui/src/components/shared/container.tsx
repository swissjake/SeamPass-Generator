import { ReactNode } from "react";

interface ContainerLayoutProps {
  children: ReactNode;
}
export const ContainerLayout: React.FC<ContainerLayoutProps> = ({
  children,
}) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:pl-[57px] md:pr-[61px]">
      {children}
    </div>
  );
};
