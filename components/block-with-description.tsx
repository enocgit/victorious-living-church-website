import { cn } from "@/lib/utils";
import React from "react";
import { Typography } from "./ui/typography";

type Props = {
  renderTitle: () => React.ReactNode;
  renderButton?: () => React.ReactNode;
  renderDescription?: () => React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  classNames?: {
    title?: string;
  };
};

export default function BlockWithDescription({
  renderTitle,
  renderDescription,
  renderButton,
  children,
  className,
  classNames,
}: Props) {
  return (
    <div className={cn("space-y-7", className)}>
      <article className={cn("max-w-[502px] space-y-7", classNames?.title)}>
        {renderTitle()}
        {renderDescription && <Typography>{renderDescription()}</Typography>}
      </article>
      {children}
      {renderButton && renderButton()}
    </div>
  );
}
