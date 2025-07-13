import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@seampass/shared";

const headerVariants = cva("", {
  variants: {
    variant: {
      "primary-100": "text-primary-300",
      "primary-200": "text-white",
    },
    size: {
      sm: "text-[16px] md:text-[18px]",
      md: "text-[20px] md:text-[24px] xl:text-[32px]",
      lg: "text-[24px] xl:text-[40px]",
      xl: "text-[22px] md:text-[32px] xl:text-[48px]",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    alignment: {
      center: "text-center mx-auto",
      left: "text-left mr-auto",
      right: "text-right ml-auto",
    },
  },
  defaultVariants: {
    variant: "primary-200",
    size: "md",
    weight: "bold",
    alignment: "left",
  },
});

export interface HeaderProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headerVariants> {
  children: ReactNode;
}

export const Header = ({
  variant,
  size,
  weight,
  alignment,
  children,
  className,
  ...props
}: HeaderProps) => {
  return (
    <h2
      className={cn(
        headerVariants({ variant, size, weight, alignment }),
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};
