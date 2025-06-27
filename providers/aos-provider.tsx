"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      offset: 120,
      delay: 0,
    });

    // Refresh AOS on route changes (if using Next.js router)
    const handleRouteChange = () => {
      AOS.refresh();
    };

    // Listen for route changes if using Next.js
    if (typeof window !== "undefined") {
      window.addEventListener("routeChangeComplete", handleRouteChange);
      return () => {
        window.removeEventListener("routeChangeComplete", handleRouteChange);
      };
    }
  }, []);

  return null;
}
