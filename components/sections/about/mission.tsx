import React from "react";
import Image, { StaticImageData } from "next/image";
import { Typography } from "@/components/ui/typography";
import aboutGridImage1 from "@/public/assets/about-grid-image-1.jpg";
import aboutGridImage2 from "@/public/assets/about-grid-image-2.jpg";
import aboutGridImage3 from "@/public/assets/about-grid-image-3.jpg";
import aboutGridImage4 from "@/public/assets/about-grid-image-4.png";
import { cn } from "@/lib/utils";

const MissionItem = ({
  color,
  title,
  description,
  image,
  className,
}: {
  color?: string;
  title?: string;
  description?: string;
  image: string | StaticImageData;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative px-6 py-10 sm:px-14 sm:py-20 lg:px-32 lg:py-40",
        className,
      )}
      data-aos="fade-up"
    >
      <div
        className="absolute inset-0 z-10 opacity-80"
        style={{ backgroundColor: color }}
      />
      <Image src={image} alt="About" fill className="object-cover" />
      <article className="relative z-10 space-y-7 text-white">
        {title && (
          <Typography variant="h2" className="max-w-96 text-3xl sm:text-4xl">
            {title}
          </Typography>
        )}
        {description && <Typography>{description}</Typography>}
      </article>
    </div>
  );
};

export default function Mission() {
  return (
    <div className="grid grid-cols-1 min-[380px]:grid-cols-2">
      <MissionItem
        color="#4E0D0D"
        title="Christ-Centered Teaching"
        description="Rooted in scripture, relevant to daily life"
        image={aboutGridImage1}
      />
      <MissionItem
        color="var(--accent)"
        title="Loving Community"
        description="A family of believers supporting one another"
        image={aboutGridImage2}
      />
      <MissionItem image={aboutGridImage4} className="hidden sm:block" />
      <MissionItem
        color="#AB4F10"
        title="Purposeful Living"
        description="Equipping you to live out your calling"
        image={aboutGridImage3}
      />
      <MissionItem image={aboutGridImage4} className="block sm:hidden" />
    </div>
  );
}
