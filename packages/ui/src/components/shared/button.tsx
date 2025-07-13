import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@seampass/shared";

const buttonVariants = cva(
  "h-[48px] w-full rounded-[8px] leading-[24px] duration-200 transition-all font-medium",
  {
    variants: {
      variant: {
        primary:
          "px-4 py-[10.50px] justify-center bg-primary-100 hover:bg-primary-200 active:bg-primary-400 items-center text-white text-[16px] transition-all",
        secondary:
          "border-[1px] border-solid border-primary-100 text-primary-100 hover:bg-[#F0FFEE] transition duration-300 ease-in-out",
        tertiary:
          "bg-transparent text-grey-100 border border-grey-200 rounded-[8px] hover:bg-grey-400 duration-200 transition-all",
        error: "bg-error-100 text-[#fff] transition duration-300 ease-in-out",
      },
      size: {
        sm: "text-[14px] md:text-[16px]",
        md: "text-[16px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  children,
  variant,
  size,
  className,
  isLoading,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          <span className="ml-2">Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};
