import React from "react";
import { Typography } from "./ui/typography";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import FooterImage from "@/public/assets/footer-background.jpg";
import { links } from "@/lib/links";
import { contact, social } from "@/lib/content";

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
            <Typography variant="h3" className="max-w-60" data-aos="fade-up">
              Let&apos;s Grow in Faith Together
            </Typography>
            <div className="xsm:grid-cols-2 grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-3">
              <section
                className="space-y-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
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
              <section
                className="space-y-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Typography variant="h5">Address</Typography>
                <ul className="space-y-4">
                  <li>
                    <Typography className="text-muted/70">
                      Kasoa New Market Road
                    </Typography>
                  </li>
                  <li>
                    <Typography className="text-muted/70">Ghana</Typography>
                  </li>
                </ul>
              </section>
              <section
                className="col-span-full space-y-5 md:col-span-1"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Typography variant="h5">Contact</Typography>
                <ul className="space-y-4">
                  <li className="flex items-center gap-5">
                    <Mail size={14} className="text-accent shrink-0" />
                    <Link href={`mailto:${contact.email.info}`}>
                      <Typography className="text-muted/70">
                        {contact.email.info}
                      </Typography>
                    </Link>
                  </li>
                  <li className="flex items-center gap-5">
                    <Phone size={14} className="text-accent shrink-0" />
                    <Link href={`tel:${contact.phone.original}`}>
                      <Typography className="text-muted/70">
                        {contact.phone.formatted}
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
              {Object.entries(social).map(([key, value]) => (
                <Link key={key} href={value}>
                  <Image
                    src={`https://simpleicons.org/icons/${key}.svg`}
                    alt={key}
                    width={24}
                    height={24}
                    className="invert"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
