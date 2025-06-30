import BlockWithDescription from "@/components/block-with-description";
import BreadcrumbBanner from "@/components/breadcrumb-banner";
import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/sections/contact-info";
import TitleWithSubheading from "@/components/title-with-subheading";
import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-svh overflow-hidden">
      <BreadcrumbBanner page="Contact Us" />
      <section className="wrapper py-vertical relative z-10">
        <BlockWithDescription
          renderTitle={() => (
            <TitleWithSubheading
              subheading="We'd love to hear from you"
              title="Get in Touch with Us"
              classNames={{
                subheading: "text-primary",
              }}
            />
          )}
          renderDescription={() => (
            <>
              Whether you have a question, prayer request, or just want to say
              hello, we’re here for you. Reach out and someone from our team
              will connect with you as soon as possible.
            </>
          )}
        >
          <div data-aos="fade-up" data-aos-duration="2000">
            <ContactForm />
          </div>
        </BlockWithDescription>
      </section>
      <ContactInfo />
    </main>
  );
}
