"use client";

import React from "react";
import { ContactSection } from "@/components";
import {
  HeroSection,
  AboutSection,
  OurPedagogy,
  OurValues,
  DonorSection,
  OurClassesHomePage,
} from "@/components/section/homePage";
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
