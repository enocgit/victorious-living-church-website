import React from "react";
import { Typography } from "./ui/typography";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import FooterImage from "@/public/assets/footer-background.jpg";
import { links } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="relative">
      <Image
        src={FooterImage}
        alt="Footer Background"
        fill
        className="relative z-0 object-cover"
      />
      <div className="relative z-10 bg-[#343434]/95 text-white bg-blend-luminosity">
        <div className="absolute inset-0 z-10 bg-[#343434]/50" />
        <div className="absolute right-0 bottom-0 left-0 z-10 h-6/12 bg-[#343434] blur-3xl" />
        <div className="wrapper relative z-20 pt-12 pb-11 lg:pt-24">
          <div className="flex flex-col gap-x-24 gap-y-11 lg:flex-row">
            <Typography variant="h3" className="max-w-60">
              Let&apos;s Grow in Faith Together
            </Typography>
            <div className="xsm:grid-cols-2 grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-3">
              <section className="space-y-5">
                <Typography variant="h5">Links</Typography>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>
                        <Typography className="text-muted/70">
                          {link.label}
                        </Typography>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="space-y-5">
                <Typography variant="h5">Address</Typography>
                <ul className="space-y-4">
                  <li>
                    <Typography className="text-muted/70">
                      Kasoa New Market Road
                    </Typography>
                  </li>
                  <li>
                    <Typography className="text-muted/70">
                      Kasoa, Ghana
                    </Typography>
                  </li>
                </ul>
              </section>
              <section className="col-span-full space-y-5 md:col-span-1">
                <Typography variant="h5">Contact</Typography>
                <ul className="space-y-4">
                  <li className="flex items-center gap-5">
                    <Mail size={14} className="text-accent shrink-0" />
                    <Link href="mailto:info@vlcig.org">
                      <Typography className="text-muted/70">
                        info@vlcig.org
                      </Typography>
                    </Link>
                  </li>
                  <li className="flex items-center gap-5">
                    <Phone size={14} className="text-accent shrink-0" />
                    <Link href="tel:+233553972383">
                      <Typography className="text-muted/70">
                        + 233 553-972-383
                      </Typography>
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <hr className="border-muted-foreground mt-20 mb-11" />
          <div className="flex flex-wrap items-center justify-between gap-5">
            <Typography className="text-muted/70">
              &copy; {new Date().getFullYear()} Victorious Living Church
              International. All rights reserved.
            </Typography>
            <div className="flex items-center gap-5">
              <Link href="/">
                <Image
                  src={`https://simpleicons.org/icons/facebook.svg`}
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="invert"
                />
              </Link>
              <Link href="/">
                <Image
                  src={`https://simpleicons.org/icons/instagram.svg`}
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="invert"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
