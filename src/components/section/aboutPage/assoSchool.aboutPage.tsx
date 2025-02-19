"use client";
import { Section } from "@/components";
import Image from "next/image";
import { motion } from "framer-motion";

export const AssoSchool = () => {
  return (
    <Section className="flex flex-col xl:flex-row gap-8 justify-center items-center min-h-[50vh]  ">
      <motion.div
        className="flex items-center  p-10 max-w-2/5 "
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src="/img/meeting-1.webp"
          alt="A propos"
          width={1024}
          height={1024}
          className="object-cover max-w-[600px] rounded-3xl"
          loading="lazy"
        />
      </motion.div>
      <motion.div
        className="flex w-full  flex-col gap-8 justify-center items-center max-w-4xl"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col gap-2 items-center text-center md:text-left">
          <h2 className="font-subtitle text-2xl text-primary w-full">
            Une école associative
          </h2>
          <h3 className="font-title text-4xl md:text-6xl w-full">
            Une gouvernance collaborative et citoyenne
          </h3>
        </div>
        <div className="flex flex-col gap-4 text-justify md:text-left  px-2">
          <p className="text-justify font-semibold">
            Notre école primaire fonctionne sous le statut d’association loi
            1901. Les enseignants, les parents et les enfants collaborent
            activement, soutenus par des partenaires locaux. Cette structure
            permet une gestion participative où chacun trouve sa place.
          </p>
          <p className="text-justify">
            Nous sommes reconnus pour notre utilité publique et notre engagement
            sociétal : offrir une éducation alternative de qualité pour les
            enfants de l’école élémentaire.
          </p>
        </div>
      </motion.div>
    </Section>
  );
};
