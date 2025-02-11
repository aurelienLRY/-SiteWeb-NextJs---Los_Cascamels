import React from "react";

import { Section, PedagoTeamCard, ContactSection } from "@/components";

import {
  AssoSchool,
  Capacity,
  Commission,
  HeroSectionAboutPage,
  ValuesSection,
} from "@/components/section/aboutPage";

const PEDAGO_TEAM = [
  {
    name: "John Doe",
    role: "Directrice",
    urlImage: "/img/portrait/portrait_H_1.webp",
    color: "bleuRoyale",
  },
  {
    name: "Celine Léon",
    role: "instituteur CP à CE2",
    urlImage: "/img/portrait/portrait_F_1.webp",
    color: "purple",
  },
  {
    name: "Cédric Léon",
    role: "instituteur CM1 à CM2",
    urlImage: "/img/portrait/portrait_F_2.webp",
    color: "pink",
    socialLinks: {
      facebook: "https://www.facebook.com/cedric.leon.7",
      linkedin: "https://www.linkedin.com/cedricleon",
      instagram: "https://www.instagram.com/cedricleon",
    },
  },
];

export default function APropos() {
  return (
    <React.Fragment>
      <HeroSectionAboutPage />
      <ValuesSection />
      <Capacity />
      <AssoSchool />

      <Commission />
      <Section className="bg-cream flex flex-col gap-8 justify-center items-center min-h-[60vh]   ">
        <div className="flex flex-col gap-2 items-center text-center md:text-left">
          <h2 className="text-2xl font-subtitle text-primary">
            L’équipe pédagogique pour l’école primaire
          </h2>
          <h3 className="text-4xl md:text-6xl font-title">
            Des professionnels diplômés et engagés.
          </h3>
        </div>
        <div className="flex flex-col gap-2 items-center w-full md:max-w-[80%] mt-4 px-2">
          <p className="text-justify md:text-left w-full">
            Nos enseignants, formés à la pédagogie Freinet et à l’immersion
            linguistique, sont au cœur de la réussite des enfants. Ils
            collaborent étroitement avec l’institut de formation APRENE pour
            maintenir un haut niveau d’exigence et offrir la meilleure éducation
            possible.
          </p>
        </div>
        <div
          className="mt-4 grid grid-cols-1 md:grid-cols-2
         gap-8 px-2"
        >
          {PEDAGO_TEAM.map((pedago, index) => (
            <PedagoTeamCard key={`pedago-${index}`} {...pedago} />
          ))}
        </div>
      </Section>
      <ContactSection />
    </React.Fragment>
  );
}
