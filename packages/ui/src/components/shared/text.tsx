import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@seampass/shared";

const textVariants = cva("", {
  variants: {
    variant: {
      primary: "text-grey-100",
      "primary-50": "text-primary-300",
      "primary-100": "text-white",
      "primary-200": "text-primary-200",
      secondary: "text-[#001433]",
      success: "text-success-100",
      error: "text-error-100",
    },
    size: {
      normal: "text-[16px]",
      sm: "text-[14px]",
      md: "text-[20px]",
      lg: "md:text-[18px] text-[14px]",
      xl: "xl:text-[20px] sm:text-[16px] text-[14px]",
      xxl: "text-[16px] md:text-[18px] xl:text-[20px]",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
      semibold: "font-semibold",
    },
    alignment: {
      center: "text-center mx-auto",
      left: "text-left mr-auto",
      right: "text-right ml-auto",
    },
    fontStyle: {
      italic: "italic",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "normal",
    weight: "regular",
    alignment: "left",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  children: ReactNode;
}

export const Text = ({
  variant,
  size,
  weight,
  alignment,
  fontStyle,
  children,
  className,
  ...props
}: TextProps) => {
  return (
    <p
      className={cn(
        textVariants({ variant, size, weight, alignment, fontStyle }),
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
