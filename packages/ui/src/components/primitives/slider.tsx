"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@seampass/shared";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 xl:h-[18px] w-full grow overflow-hidden rounded-[40px] bg-grey-500">
      <SliderPrimitive.Range className="absolute h-full bg-primary-500" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block size-5 xl:size-8 rounded-full border-2 xl:border-[3px] border-primary-500 bg-white cursor-pointer ring-offset-background transition-colors focus-visible:outline-none   disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
