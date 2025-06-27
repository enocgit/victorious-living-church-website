import React from "react";
import BlockWithDescription from "../../block-with-description";
import TitleWithSubheading from "../../title-with-subheading";
import { Button } from "../../ui/button";
import Image from "next/image";
import aboutImage from "@/public/assets/about-image.jpg";
import Mission from "./mission";

export default function AboutSection() {
  return (
    <section className="pt-vertical">
      <div className="wrapper grid grid-cols-1 items-center gap-7 pb-20 md:grid-cols-2">
        <Image
          src={aboutImage}
          alt="About"
          width={1200}
          height={756}
          className="hidden h-[756px] w-[610px] object-cover md:inline"
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-anchor-placement="top-center"
        />
        {/* Mobile Image -- to remove animation anchor */}
        <Image
          src={aboutImage}
          alt="About"
          width={1200}
          height={756}
          className="h-[300px] w-full object-cover md:hidden"
          data-aos="fade-right"
          data-aos-duration="3000"
        />
        <BlockWithDescription
          renderTitle={() => (
            <TitleWithSubheading
              title="Rooted in Love, Growing in Grace"
              subheading="A Home for every heart"
              classNames={{
                subheading: "text-primary",
              }}
            />
          )}
          renderDescription={() => (
            <>
              Founded on the belief that the Gospel transforms lives, our church
              exists to share the hope of Jesus with our city and beyond. We
              believe in growing stronger through worship, deeper through
              discipleship, and wider through outreach.
            </>
          )}
          renderButton={() => <Button>Join Us on Our Mission</Button>}
        />
      </div>
      <Mission />
    </section>
  );
}
