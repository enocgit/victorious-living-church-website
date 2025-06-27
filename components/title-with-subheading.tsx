import React from "react";
import { Typography } from "./ui/typography";
import { TypographyVariant } from "@/components/ui/typography";
import { cn, omitTextProp } from "@/lib/utils";

type Props = {
  title: string;
  subheading: string;
  titleVariant?: TypographyVariant;
  classNames?: {
    title?: string;
    subheading?: string;
  };
  titleProps?: React.ComponentProps<typeof Typography>;
  subheadingProps?: React.ComponentProps<typeof Typography>;
};

export default function TitleWithSubheading({
  title,
  subheading,
  titleVariant = "h2",
  classNames,
  titleProps,
  subheadingProps,
}: Props) {
  return (
    <article className="space-y-3.5">
      <Typography
        variant="h6"
        className={cn("uppercase", classNames?.subheading)}
        {...omitTextProp(subheadingProps)}
      >
        {subheading}
      </Typography>
      <Typography
        variant={titleVariant}
        className={cn(classNames?.title)}
        {...omitTextProp(titleProps)}
      >
        {title}
      </Typography>
    </article>
  );
}
