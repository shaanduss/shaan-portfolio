import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        project:
          "border-transparent bg-[#C52184]/15 text-[#8A165C] dark:bg-[#C52184]/40 dark:text-[#F4BDDF]",
        skillBlue:
          "border-transparent bg-[#1E5A8A]/15 text-[#163E61] dark:bg-[#1E5A8A]/40 dark:text-[#A8C7E5]",
        skillGreen:
          "border-transparent bg-[#2A7548]/15 text-[#1C5232] dark:bg-[#2A7548]/40 dark:text-[#A6D9B9]",
        skillOrange:
          "border-transparent bg-[#A57138]/20 text-[#714D26] dark:bg-[#A57138]/40 dark:text-[#F0CFA1]",
        skillPurple:
          "border-transparent bg-[#6940A5]/15 text-[#492C75] dark:bg-[#6940A5]/40 dark:text-[#D5B8E5]",
        skillRed:
          "border-transparent bg-[#B23838]/15 text-[#7A2626] dark:bg-[#B23838]/40 dark:text-[#E5B0B0]",
        skillGray:
          "border-transparent bg-[#4A4A4A]/20 text-[#333333] dark:bg-[#4A4A4A]/60 dark:text-[#C7C7C7]",
        skillBrown:
          "border-transparent bg-[#6B4423]/15 text-[#4A2F18] dark:bg-[#6B4423]/40 dark:text-[#D4B8A0]",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
