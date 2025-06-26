import React from "react";
import { Typography } from "./ui/typography";
import { TypographyVariant } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  subheading: string;
  titleVariant?: TypographyVariant;
  classNames?: {
    title?: string;
    subheading?: string;
  };
};

export default function TitleWithSubheading({
  title,
  subheading,
  titleVariant = "h2",
  classNames,
}: Props) {
  return (
    <article className="space-y-3.5">
      <Typography
        variant="h6"
        className={cn("uppercase", classNames?.subheading)}
      >
        {subheading}
      </Typography>
      <Typography variant={titleVariant} className={cn(classNames?.title)}>
        {title}
      </Typography>
    </article>
  );
}
