import React from "react";
import Image from "next/image";
import heroImage from "@/public/assets/hero-background.jpg";
import TitleWithSubheading from "../title-with-subheading";
import BlockWithDescription from "../block-with-description";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-svh text-white flex items-center w-full"
    >
      <div className="absolute inset-0 bg-[#240C00]/50 z-10" />
      <Image
        src={heroImage}
        alt="Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 wrapper py-60 flex w-full">
        <BlockWithDescription
          classNames={{
            title: "max-w-3xl",
          }}
          renderTitle={() => (
            <TitleWithSubheading
              title="Be the Light. Live the Word"
              subheading="Sharing the Love of Christ with every Soul"
              titleVariant="h1"
            />
          )}
          renderButton={() => <Button>Join Us on Our Mission</Button>}
        />
      </div>
    </section>
  );
}
