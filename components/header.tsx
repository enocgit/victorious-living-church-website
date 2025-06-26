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

export default function Header() {
  return (
    <header className="p-6 flex justify-between items-center shadow">
      {/* Logo */}
      <Link href="/">
        {/* <Image src="/logo.png" alt="logo" width={100} height={100} /> */}{" "}
        {/**TODO: Add logo */}
        <Typography variant="h6" className="max-w-[200px]">
          Victorious Living Church International
        </Typography>
      </Link>
      <nav>
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
      <div className="border-l pl-10">
        <Link href="/#">
          <Button className="bg-accent">Give Now</Button>
        </Link>
      </div>
    </header>
  );
}
