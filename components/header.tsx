import React from "react";
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
import { MobileMenu } from "./ui/mobile-menu";

export default function Header() {
  return (
    <header className="flex h-28 items-center justify-between px-6 shadow">
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
    </header>
  );
}
