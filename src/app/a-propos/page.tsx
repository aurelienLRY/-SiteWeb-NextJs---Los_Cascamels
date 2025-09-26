import React from "react";

import { Section, PedagoTeamCard, ContactSection } from "@/components";

import {
  AssoSchool,
  Capacity,
  Commission,
  HeroSectionAboutPage,
  ValuesSection,
  FederationAboutPage,
  PriceAboutPage,
} from "@/components/section/aboutPage";

const PEDAGO_TEAM = [
  {
    name: "Fanette",
    role: "Directrice & institutrice PS à GS",
    urlImage: "/img/portrait/portrait_F_1.webp",
    color: "bleuRoyale",
    description:
      "Regenta de vocation, je me rends au travail avec joie, et travailler avec les enfants me procure de grandes satisfactions. Donner aux enfants le plaisir de venir à l'école et l'envie d'apprendre fait partie de mes priorités. Pour ce faire, je m'appuie essentiellement sur la pédagogie institutionnelle, le jeu et les projets.",
  },
  {
    name: "Frédéric",
    role: "instituteur CP à CE2",
    urlImage: "/img/Fred.webp",
    color: "purple",
    description:
      "Je suis enseignant dans les écoles Calandreta depuis 20 ans et j’ai rejoint le projet de l’école de Rieux voilà deux ans. Je suis passionné d’occitan, de  français, d’espagnol deux, de très belles langues romanes. J’aime chanter avec les élèves dans de nombreuses langues et faire des sports collectifs. Je suis d’autres part, apiculteur amateur, et je me plais de transmettre aux enfants tout le savoir toutes les connaissances que j’ai dans ce domaine. J’aime voir avancer, grandir, rire, en un mot apprendre les enfants dont j’ai la charge pendant une ou plusieurs années scolaires.",
  },
  {
    name: "Cindy",
    role: "institutrice CE2 à CM2",
    urlImage: "/img/Cindy.webp",
    color: "pink",
 
  },
];

export default function APropos() {
  return (
    <React.Fragment>
      <HeroSectionAboutPage />
      <FederationAboutPage />
      <hr className="w-full max-w-xl mx-auto h-1 bg-primary " />
      <ValuesSection />
      <Capacity />

      <Section
        className="bg-cream flex flex-col gap-8 justify-center items-center min-h-[70vh] pb-36 "
        cloudsColor="bg-transparent text-white"
        showBottomClouds={true}
      >
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
          className="mt-4 grid grid-cols-1 xl:grid-cols-2
         gap-8 px-2 lg:pb-20"
        >
          {PEDAGO_TEAM.map((pedago, index) => (
            <PedagoTeamCard key={`pedago-${index}`} {...pedago} />
          ))}
        </div>
      </Section>
      <AssoSchool />

      <Commission />
      <PriceAboutPage />
      <ContactSection />
    </React.Fragment>
  );
}
