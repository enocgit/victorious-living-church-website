import Image from "next/image";
import React from "react";
import breadcrumbBanner from "@/public/assets/breadcrumb-banner.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import Link from "next/link";
import { Typography } from "./ui/typography";

type Props = {
  page: string;
};

export default function BreadcrumbBanner({ page }: Props) {
  return (
    <section className="relative h-96">
      <Image
        src={breadcrumbBanner}
        alt="Breadcrumb Banner"
        fill
        className="size-full object-cover"
      />
      <div className="bg-foreground/50 absolute inset-0 z-10" />
      <div className="wrapper relative z-10 flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-y-14">
          <Typography variant="h2" className="text-white uppercase">
            {page}
          </Typography>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{page}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </section>
  );
}
