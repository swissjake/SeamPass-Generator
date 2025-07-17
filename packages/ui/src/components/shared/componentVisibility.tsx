import { FC, ReactNode } from "react";

type ComponentVisibilityProps = {
  appear: boolean;
  children: ReactNode;
};

export const ComponentVisibility: FC<ComponentVisibilityProps> = ({
  appear,
  children,
}) => {
  return appear ? children : "";
};
