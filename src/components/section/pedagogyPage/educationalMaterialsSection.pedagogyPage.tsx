"use client";
import { Section, OurValuesCard } from "@/components";
import Image from "next/image";
import { educationalMaterials } from "@/data/EducationMaterials.data.json";
import { motion } from "framer-motion";

export const EducationalMaterials = () => {
  return (
    <Section className="  flex flex-col lg:flex-row gap-10 justify-center items-center min-h-[60vh]">
      <article className="flex flex-col gap-8 items-center  w-full   text-center md:text-start">
        <div className="flex flex-col gap-4   w-full max-w-[1200px]  text-center md:text-start">
          <div className="flex flex-col mt-10 w-full ">
            <h2 className="font-subtitle text-xl md:text-2xl">
              Des supports pédagogiques adaptés et variés
            </h2>
            <h3 className="font-title text-4xl md:text-6xl">
              Des outils au service de l’apprentissage.
            </h3>
          </div>
          <div className="flex flex-col gap-5  ">
            <p className="font-sans text-base md:text-lg">
              Chaque enseignant-e puise, au choix, dans les techniques Freinet
              (texte libre, métiers, journal scolaire, correspondance, etc) et
              les institutions de la pédagogie institutionnelle (Cossi vas,
              Conseil, Ceintures, etc) pour alimenter son enseignement.
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-8 lg:gap-16 flex-1 items-center justify-around w-full ">
          <div className="flex flex-col gap-3 lg:gap-10 items-center justify-center">
            {educationalMaterials.slice(0, 3).map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                key={`32-${index}`}
              >
                <OurValuesCard
                  key={`32-${index}`}
                  motif={feature.motif}
                  title={feature.title}
                  description={feature.description}
                  items="LEFT"
                  bgColor={feature.bgColor}
                  textColor={feature.textColor}
                  iconSize={32}
                  className="bg-cream border-t-2 border-primary shadow-lg"
                />
              </motion.div>
            ))}
          </div>
          <Image
            src="/img/Fly2.webp"
            alt="dessin d'un enfant sur un stylo"
            width={1080}
            height={1080}
            className="max-w-[600px] w-[80%] border-t-2 border-primary  rounded-full p-6"
          />
          <div className="flex flex-col gap-3 lg:gap-10 items-center justify-center">
            {educationalMaterials.slice(3, 6).map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                key={`33-${index}`}
              >
                <OurValuesCard
                  key={`33-${index}`}
                  motif={feature.motif}
                  title={feature.title}
                  description={feature.description}
                  items="RIGHT"
                  bgColor={feature.bgColor}
                  textColor={feature.textColor}
                  iconSize={24}
                  className="bg-cream border-t-2 border-primary shadow-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </article>
    </Section>
  );
};
