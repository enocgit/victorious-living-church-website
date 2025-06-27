"use client";

import React from "react";
import Image from "next/image";
import heroImage from "@/public/assets/hero-background.jpg";
import breadcrumbBanner from "@/public/assets/breadcrumb-banner.jpg";
import aboutGridImage3 from "@/public/assets/about-grid-image-3.jpg";
import TitleWithSubheading from "../title-with-subheading";
import BlockWithDescription from "../block-with-description";
import { Button } from "../ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { DotButton, useDotButton } from "../embla-carousel-dot-button";
import { Typography } from "../ui/typography";

const SLIDES = [heroImage, breadcrumbBanner, aboutGridImage3];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 6000,
      }),
      Fade(),
    ],
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section
      id="hero"
      className="relative flex h-[60svh] items-center lg:h-[calc(100svh-7rem)]"
    >
      {/* Overlay */}
      <div className="bg-foreground/50 absolute inset-0 z-20" />

      {/* Content */}
      <div className="absolute z-30 min-w-full text-white">
        <BlockWithDescription
          className="wrapper"
          classNames={{
            title: "max-w-3xl",
          }}
          renderTitle={() => (
            <TitleWithSubheading
              title="Be the Light. Live the Word"
              subheading="Sharing the Love of Christ with every Soul"
              titleVariant="h1"
              subheadingProps={
                { "data-aos": "fade-up" } as unknown as React.ComponentProps<
                  typeof Typography
                >
              }
              titleProps={
                {
                  "data-aos": "fade-up",
                  "data-aos-duration": "800",
                  "data-aos-delay": "250",
                } as unknown as React.ComponentProps<typeof Typography>
              }
            />
          )}
          renderButton={() => (
            <Button data-aos="fade-up" data-aos-delay="600">
              Join Us on Our Mission
            </Button>
          )}
        />
      </div>

      {/* Carousel */}
      <div className="embla absolute inset-0 z-10 size-full" ref={emblaRef}>
        <div className="embla__container h-[calc(100svh-7rem)]">
          {SLIDES.map((slide, idx) => (
            <div key={idx} className="embla__slide">
              {selectedIndex === idx && (
                <Image
                  key={selectedIndex}
                  src={slide}
                  alt="Hero"
                  fill
                  className="animate-kenburns-top object-cover"
                  priority
                />
              )}
            </div>
          ))}
        </div>
        <div className="embla__dots wrapper">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${index === selectedIndex ? "embla__dot--selected" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
