import { CSSProperties, FC, ReactNode } from "react";
import React from "react";
import { cn } from '../../lib/utils';
import { text } from "stream/consumers";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 300,
}) => {
  return (
    <p
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "mx-auto max-w-md text-neutral-200 dark:text-neutral-50/40",

        // Shine effect
        "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_0.1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shine gradient
        "bg-gradient-to-r from-transparent via-neutral-300 via-50% to-transparent  dark:bg-neutral-500",


        className,
      )}
    >
      {children}
    </p>
  );
};

export default AnimatedShinyText;
