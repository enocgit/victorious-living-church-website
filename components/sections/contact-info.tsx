import { Typography } from "../ui/typography";
import Image from "next/image";
import BackgroundDesign from "@/public/assets/background-design.png";
import BlockWithDescription from "../block-with-description";
import TitleWithSubheading from "../title-with-subheading";
import Link from "next/link";
import { contact } from "@/lib/content";

const ContactInfoItem = ({
  title,
  renderContent,
  children,
}: {
  title: string;
  renderContent: () => React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div className="space-y-7">
      <article className="flex flex-col gap-6">
        <Typography variant="h5">{title}</Typography>
        <hr className="bg-foreground h-1 w-7" />
        {renderContent()}
      </article>
      {children}
    </div>
  );
};

export default function ContactInfo() {
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
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <BlockWithDescription
            renderTitle={() => (
              <TitleWithSubheading
                subheading="Contact Details"
                title="We Are Always Happy to Assist You"
              />
            )}
          ></BlockWithDescription>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="xsm:grid-cols-2 grid grid-cols-1 gap-x-4.5 gap-y-7"
          >
            <ContactInfoItem
              title="Number"
              renderContent={() => (
                <Link href={`tel:${contact.phone.original}`}>
                  <Typography className="font-medium">
                    {contact.phone.formatted}
                  </Typography>
                </Link>
              )}
            >
              <article className="space-y-4">
                <Typography>Office Hours:</Typography>
                <Typography>Monday – Friday: 9 AM – 5 PM</Typography>
                <Typography>Sunday Service: 8:30 AM - 11:30 AM</Typography>
              </article>
            </ContactInfoItem>
            <ContactInfoItem
              title="Address"
              renderContent={() => (
                <Link href={`mailto:${contact.email.info}`}>
                  <Typography className="font-medium">
                    {contact.email.info}
                  </Typography>
                </Link>
              )}
            >
              <article className="space-y-4">
                <Typography>{contact.address}</Typography>
              </article>
            </ContactInfoItem>
          </div>
        </div>
      </div>
    </section>
  );
}
