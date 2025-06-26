import React from "react";
import BlockWithDescription from "../block-with-description";
import TitleWithSubheading from "../title-with-subheading";
import { Button } from "../ui/button";

export default function PlanVisit() {
  return (
    <section className="">
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
          ></BlockWithDescription>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.0014522802044!2d-0.43947889842140164!3d5.576010457431008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfa51f95e867fb%3A0x97dc05f35cae94d9!2sloyan%20Int.%20School!5e0!3m2!1sen!2sgh!4v1750952440422!5m2!1sen!2sgh"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[300px] w-full max-w-full md:h-[756px] lg:w-[610px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
