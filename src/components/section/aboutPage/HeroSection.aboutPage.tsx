import Image from "next/image";
import { Section } from "@/components";

export const HeroSectionAboutPage = () => {
  return (
    <Section
      className=" bg-lightBlue bg-[url('/img/sky1.webp')] bg-cover bg-center xl:pb-48  min-h-[80vh] flex  justify-center items-center px-2"
      showBottomClouds
      cloudsColor="bg-transparent text-cream"
    >
      <div className="flex flex-col xl:flex-row gap-4 justify-center items-center max-w-[1200px] mx-auto">
        <aside className=" flex flex-1 justify-end items-center w-full xl:w-1/2 rounded-3xl overflow-hidden">
          <Image
            src="/img/school-1.webp"
            alt="A propos"
            width={800}
            height={400}
            className="xl:rounded-3xl object-cover "
            loading="lazy"
          />
        </aside>
        <article className="flex flex-col flex-1 items-center gap-4 max-w-2xl text-center xl:text-left pb-40">
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
