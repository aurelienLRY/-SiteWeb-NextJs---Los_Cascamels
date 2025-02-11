"use client";

import Image from "next/image";
import { Section } from "@/components";
import { motion } from "framer-motion";

export const HeroSectionAboutPage = () => {
  return (
    <Section
      className=" bg-lightBlue bg-[url('/img/sky1.2.webp')] bg-cover bg-center xl:pb-48  min-h-[80vh] flex  justify-center items-center "
      showBottomClouds
      cloudsColor="bg-transparent text-cream"
    >
      <motion.div
        initial={{ y: 1200, x: 100 }}
        animate={{ y: 100, x: 100 }}
        transition={{ duration: 11, ease: "easeInOut" }}
        className="absolute top-0 left-7 w-48  overflow-hidden"
      >
        <Image
          src="/img/test.png"
          alt="A propos"
          width={800}
          height={400}
          className="object-cover "
          loading="lazy"
        />
      </motion.div>
      <div className="flex flex-col xl:flex-row gap-8 justify-center items-center max-w-[1400px]">
        <aside className="  w-full xl:w-1/2 rounded-3xl overflow-hidden">
          <Image
            src="/img/school-1.webp"
            alt="A propos"
            width={800}
            height={400}
            className=" object-cover "
            loading="lazy"
          />
        </aside>
        <article className="flex flex-col  items-center gap-4 max-w-2xl text-center xl:text-left pb-40 lg:pb-0">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-subtitle text-primary">
              Qui sommes-nous?
            </h2>
            <h3 className="text-4xl md:text-6xl font-title">
              Une école primaire enracinée dans la culture occitane
            </h3>
          </div>
          <div className="flex flex-col gap-4 min-h-fit">
            <p className="text-justify">
              Depuis 2009, notre école immersive célèbre la langue et la culture
              occitane en transmettant ces racines précieuses à une soixantaine
              d’élèves, de la maternelle au CM2. Ici, chaque enfant apprend dans
              un environnement bilingue (occitan-français), où curiosité et
              respect du rythme sont au cœur de l&apos;enseignement.
            </p>
            <p className="text-justify">
              La Calandreta Los Cascamels est une école associative laïque,
              reconnue d&apos;utilité publique, qui enseigne l&apos;occitan en
              immersion tout en valorisant la culture occitane à travers des
              projets éducatifs et culturels.
            </p>
          </div>
        </article>
      </div>
    </Section>
  );
};
