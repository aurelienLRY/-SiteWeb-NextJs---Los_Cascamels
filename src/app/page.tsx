"use client";

import React from "react";
import {
  HeroSection,
  AboutSection,
  OurPedagogy,
  OurValues,
  DonorSection,
  OurClassesHomePage,
  ContactSection,
} from "@/components";

/**
 * Home page
 * @returns {JSX.Element}
 */
export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutSection />
      <OurPedagogy />
      <OurValues />
      <DonorSection />
      <OurClassesHomePage />
      <ContactSection />
    </React.Fragment>
  );
}
