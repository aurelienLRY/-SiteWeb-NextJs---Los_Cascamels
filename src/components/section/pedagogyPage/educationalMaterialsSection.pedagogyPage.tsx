import { Section } from "@/components/layout/Section";
import Image from "next/image";

export const EducationalMaterials = () => {
  return (
    <Section className=" bg-primary flex flex-col lg:flex-row gap-10 justify-center items-center min-h-[60vh]">
      <aside className="max-w-[800px] rounded-xl overflow-hidden">
        <Image
          src="/img/educator-teaching.webp"
          alt="educator teaching"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </aside>
      <article className="flex flex-col gap-5  w-full max-w-[1200px]  text-center md:text-start">
        <div className="flex flex-col mt-10 w-full">
          <h2 className="font-subtitle text-xl">
            Des supports pédagogiques adaptés et variés
          </h2>
          <h3 className="font-title text-4xl md:text-6xl">
            Des outils au service de l’apprentissage.
          </h3>
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="font-sans text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            maiores dolore doloribus recusandae laboriosam, laudantium
            reiciendis! Nisi atque asperiores ad laboriosam corrupti
            exercitationem nam pariatur veniam officiis excepturi! Nostrum,
            amet.
          </p>
        </div>
      </article>
    </Section>
  );
};
