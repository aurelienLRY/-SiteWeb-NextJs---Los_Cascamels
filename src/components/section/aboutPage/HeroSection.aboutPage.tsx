"use client";

import Image from "next/image";
import { HeroSection as HeroSectionLayout } from "@/components";

export const HeroSectionAboutPage = () => {
  return (
    <HeroSectionLayout
      props={{
        showTopClouds: true,
        showBottomClouds: true,
      }}
      className="overflow-hidden"
    >
      <div className="flex flex-col xl:flex-row gap-8 justify-around items-center max-w-[1600px]">
        <aside className="  w-full xl:w-1/2 rounded-3xl overflow-hidden">
          <Image
            src="/img/Los-cascamels-00825.webp"
            alt="Photo de l'école Los Cascamèls"
            width={800}
            height={400}
            className=" object-cover "
            loading="lazy"
          />
        </aside>
        <article className="flex flex-col  items-center gap-4 max-w-2xl text-center xl:text-left pb-40 lg:pb-0">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-subtitle text-primary">
              Qui sommes-nous?
            </h1>
            <h2 className="text-4xl md:text-6xl font-title">
              Une école primaire enracinée dans la culture occitane
            </h2>
          </div>
          <div className="flex flex-col gap-4 min-h-fit">
            <p className="text-justify font-semibold text-gray-500">
              Depuis 2009, notre école immersive célèbre la langue et la culture
              occitane en transmettant ces racines précieuses à une soixantaine
              d’élèves, de la maternelle au CM2. Ici, chaque enfant apprend dans
              un environnement bilingue (occitan-français), où curiosité et
              respect du rythme sont au cœur de l&apos;enseignement.
            </p>
            <p className="text-justify">
              La Calandreta Los Cascamèls est une école associative laïque,
              reconnue d&apos;utilité publique, qui enseigne l&apos;occitan en
              immersion tout en valorisant la culture occitane à travers des
              projets éducatifs et culturels.
            </p>
          </div>
        </article>
      </div>
    </HeroSectionLayout>
  );
};
