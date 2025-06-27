import BreadcrumbBanner from "@/components/breadcrumb-banner";
import AboutSection from "@/components/sections/about/about-section";
import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-svh">
      <BreadcrumbBanner page="About Us" />
      <AboutSection />
    </main>
  );
}
