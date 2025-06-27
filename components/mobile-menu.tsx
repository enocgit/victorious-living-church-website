"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { links } from "@/lib/links";
import Image from "next/image";
import { motion } from "framer-motion";

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-foreground text-background border-none"
      >
        <SheetHeader>
          <SheetTitle className="text-muted-foreground border-muted-foreground border-b pt-20 pb-5">
            VLCI
          </SheetTitle>
        </SheetHeader>
        <div className="px-5">
          <motion.ul
            className="flex flex-col gap-4"
            initial="closed"
            animate={open ? "open" : "closed"}
            variants={{
              open: {
                transition: { staggerChildren: 0.1, delayChildren: 0.4 },
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
          >
            {links.map((link) => (
              <motion.li
                key={link.href}
                variants={{
                  open: {
                    opacity: 1,
                    x: 0,
                    transition: { type: "spring", stiffness: 100 },
                  },
                  closed: {
                    opacity: 0,
                    x: -20,
                    transition: { type: "spring", stiffness: 100 },
                  },
                }}
                style={{ listStyle: "none" }}
              >
                <Link href={link.href} className="uppercase">
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <SheetFooter className="flex-row gap-5 pb-20">
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
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export { MobileMenu };
