import React from "react";
import BlockWithDescription from "../block-with-description";
import TitleWithSubheading from "../title-with-subheading";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";
import { Blocks, CalendarClock, MapPinHouse, Shirt } from "lucide-react";
import { contact } from "@/lib/content";

const VisitInfo = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex gap-4">
      {icon}
      <div className="space-y-1.5">
        <Typography variant="h5">{title}</Typography>
        {children}
      </div>
    </div>
  );
};

export default function PlanVisit() {
  return (
    <section>
      <div className="py-vertical">
        <div className="wrapper grid grid-cols-1 items-center gap-7 lg:grid-cols-2">
          <BlockWithDescription
            renderTitle={() => (
              <TitleWithSubheading
                title="Plan Your Visit"
                subheading="We can't wait to welcome you"
                classNames={{
                  subheading: "text-primary",
                }}
              />
            )}
            renderDescription={() => (
              <>
                Visiting a new church can feel overwhelming, but we&apos;re here
                to make it easy. Whether you&apos;re exploring faith or looking
                for a new church home, we&apos;ll be ready to greet you with
                open arms.
              </>
            )}
            renderButton={() => <Button>I&apos;m Planning to Visit</Button>}
          >
            <div
              className="xsm:grid-cols-2 grid grid-cols-1 gap-8"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="200"
            >
              <VisitInfo
                icon={
                  <MapPinHouse
                    size={37}
                    className="shrink-0 text-[#4E0D0D]/80"
                  />
                }
                title="Location"
              >
                <Typography className="text-muted-foreground">
                  {contact.address}
                </Typography>
              </VisitInfo>
              <VisitInfo
                icon={
                  <CalendarClock
                    size={37}
                    className="text-accent/80 shrink-0"
                  />
                }
                title="Service Times"
              >
                <Typography className="text-muted-foreground">
                  Sundays - 8:30AM - 11:30AM
                </Typography>
                <Typography className="text-muted-foreground">
                  Wednesdays - 9:30AM - 11:30am
                </Typography>
              </VisitInfo>
              <VisitInfo
                icon={<Blocks size={37} className="text-primary/80 shrink-0" />}
                title="Kids Ministry"
              >
                <Typography className="text-muted-foreground">
                  Fun, safe, and engaging programs for children during all
                  Sunday services.
                </Typography>
              </VisitInfo>
              <VisitInfo
                icon={
                  <Shirt size={37} className="text-foreground/80 shrink-0" />
                }
                title="What to Wear"
              >
                <Typography className="text-muted-foreground">
                  Come as you are—casual or dressed up, you’re welcome here.
                </Typography>
              </VisitInfo>
            </div>
          </BlockWithDescription>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.0014522802044!2d-0.43947889842140164!3d5.576010457431008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfa51f95e867fb%3A0x97dc05f35cae94d9!2sloyan%20Int.%20School!5e0!3m2!1sen!2sgh!4v1750952440422!5m2!1sen!2sgh"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[300px] w-full max-w-full lg:h-[756px] lg:w-[610px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
