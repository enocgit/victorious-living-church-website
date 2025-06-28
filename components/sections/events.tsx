import React from "react";
import TitleWithSubheading from "../title-with-subheading";
import BlockWithDescription from "../block-with-description";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Typography } from "../ui/typography";
import Image, { StaticImageData } from "next/image";
import EventSunday from "@/public/assets/upcoming-event-sunday.jpg";
import EventFundraising from "@/public/assets/upcoming-event-fund.jpg";
import BackgroundDesign from "@/public/assets/background-design.png";
import { contact } from "@/lib/content";

const EventCard = ({
  dateTime,
  name,
  location,
  image,
}: {
  dateTime: Date;
  name: string;
  location: string;
  image: string | StaticImageData;
}) => {
  return (
    <Card className="rounded-none p-0">
      <CardHeader className="sr-only">
        <CardTitle></CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="relative w-full max-sm:aspect-video">
            <Image src={image} alt="Event" fill className="object-cover" />
          </div>
          <div className="px-5 py-6 sm:px-12 sm:py-14 md:col-span-2">
            <Typography
              variant="body2"
              className="bg-foreground w-fit px-5 py-2 font-sans font-bold text-white uppercase"
            >
              {dateTime.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Typography>
            <Typography variant="h3" className="text-primary pt-4">
              {name}
            </Typography>
            <Typography className="text-muted-foreground pt-1">
              {location}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Events() {
  return (
    <section className="relative">
      <Image
        src={BackgroundDesign}
        alt="Background Design"
        fill
        className="inset-0 z-0 object-cover"
      />
      <div className="absolute inset-0 z-10 bg-[#F1EFEB]/50" />
      <div className="wrapper py-vertical relative z-10">
        <BlockWithDescription
          renderTitle={() => (
            <TitleWithSubheading
              subheading="Stay Connected"
              title="Upcoming Events"
              subheadingProps={
                {
                  "data-aos": "fade-up",
                } as unknown as React.ComponentProps<typeof Typography>
              }
              titleProps={
                {
                  "data-aos": "fade-up",
                } as unknown as React.ComponentProps<typeof Typography>
              }
            />
          )}
          renderDescription={() => (
            <>
              From worship nights and Bible studies to youth meetups and
              outreach missions, our events are designed to build community and
              grow faith. Join us and be part of something meaningful.
            </>
          )}
          descriptionProps={
            {
              "data-aos": "fade-up",
              "data-aos-delay": "200",
            } as unknown as React.ComponentProps<typeof Typography>
          }
        >
          <div
            className="flex flex-col gap-7"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <EventCard
              dateTime={new Date("Sun Jun 29 2025 08:30")}
              name="Sunday Service"
              location={contact.address}
              image={EventSunday}
            />
            <EventCard
              dateTime={new Date("Sun Oct 12 2025 08:30")}
              name="Fundraising"
              location={contact.address}
              image={EventFundraising}
            />
          </div>
        </BlockWithDescription>
      </div>
    </section>
  );
}
