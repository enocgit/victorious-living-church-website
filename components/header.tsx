"use client";

import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { links } from "@/lib/links";
import { Typography } from "./ui/typography";
import { Button } from "./ui/button";
import { MobileMenu } from "./mobile-menu";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { church, contact, social } from "@/lib/content";
import { Headset, Heart, Mail } from "lucide-react";
import { Separator } from "./ui/separator";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 112) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      {/* Header Banner */}
      <div className="bg-background flex items-center justify-between border-b border-b-neutral-200/60 px-9 py-2.5">
        <div className="flex items-center gap-10">
          <Typography variant="body2" className="font-bold">
            Welcome to {church.title}
          </Typography>
          <div className="flex items-center gap-5 font-bold">
            <Mail size={14} className="text-accent shrink-0" />
            <Link href={`mailto:${contact.email.info}`}>
              <Typography variant="body2">{contact.email.info}</Typography>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          {Object.entries(social).map(([key, value]) => (
            <Link key={key} href={value}>
              <Image
                src={`https://simpleicons.org/icons/${key}.svg`}
                alt={key}
                width={18}
                height={18}
              />
            </Link>
          ))}
        </div>
      </div>
      {/* Header */}
      <motion.header
        className={cn(
          "bg-background z-50 flex h-20 w-full items-center justify-between px-6 shadow sm:h-28",
        )}
        initial="initial"
        animate={isScrolled ? "scrolled" : "default"}
        transition={{ duration: 0.5 }}
        variants={{
          initial: {
            opacity: 0,
            y: -20,
          },
          default: {
            opacity: [0, 1],
            y: [-20, 0],
          },
          scrolled: {
            opacity: 1,
            y: [-112, 0],
            position: "sticky",
            top: 0,
            right: 0,
            left: 0,
            zIndex: 50,
          },
        }}
      >
        {/* Logo */}
        <Link href="/" className="xsm:mr-10 mr-5 sm:mr-0">
          {/* <Image src="/logo.png" alt="logo" width={100} height={100} /> */}{" "}
          {/**TODO: Add logo */}
          <Typography variant="h6" className="max-w-[200px]">
            VLCI
          </Typography>
        </Link>
        <nav className="hidden lg:block">
          {/* Navigation Menu */}
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        {/* Give Now Button */}
        <div className="flex h-full items-center gap-10">
          <div className="bg-accent/15 flex h-full items-center gap-5 px-10 py-5">
            <div className="bg-background rounded-full p-3">
              <Headset className="text-accent" size={37} />
            </div>
            <div className="space-y-2">
              <Typography className="text-muted-foreground">Call Us</Typography>
              <Link
                href={`tel:${contact.phone.original}`}
                className="text-lg font-bold"
              >
                {contact.phone.formatted}
              </Link>
            </div>
          </div>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-6/12"
          />
          <div>
            <Link href="/#">
              <Button className="bg-accent" size="sm">
                <Heart className="fill-current" />
                Give Now
              </Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </motion.header>
    </>
  );
}
