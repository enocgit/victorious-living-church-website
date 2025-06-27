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
      <div className="xsm:pl-10 flex items-center gap-5 border-l pl-5">
        <Link href="/#">
          <Button className="bg-accent">Give Now</Button>
        </Link>
        <MobileMenu />
      </div>
    </motion.header>
  );
}
