import BreadcrumbBanner from "@/components/breadcrumb-banner";
import Events from "@/components/sections/events";
import React from "react";

export default function EventsPage() {
  return (
    <main className="min-h-svh">
      <BreadcrumbBanner page="Events" />
      <Events />
    </main>
  );
}
