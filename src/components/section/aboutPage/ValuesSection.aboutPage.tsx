"use client";
import Image from "next/image";
import { Section } from "@/components";
import { motion } from "framer-motion";

export const ValuesSection = () => {
  return (
    <Section
      className="flex flex-col lg:flex-row gap-4 justify-center items-center min-h-[60vh] bg-cream pt-14 pb-10 lg:pb-0  overflow-hidden"
      cloudsColor="bg-transparent text-white"
    >
      <aside className="flex flex-1 flex-col gap-2 max-w-xl">
        <Image
          src="/img/Kids3.webp"
          alt="Logo de l'école"
          width={1024}
          height={1024}
          className="object-cover"
          loading="lazy"
        />
      </aside>
      <motion.article
        className="flex flex-1 flex-col gap-8 justify-center items-center "
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-2xl font-subtitle text-primary">
            Une pédagogie active et immersive.
          </h2>
          <h3 className="text-4xl md:text-6xl font-title">
            Nos valeurs fondamentales <wbr /> pour une école élémentaire
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-1 flex-col justify-center items-center gap-2 bg-purple p-4 rounded-lg">
            <h4 className="text-white text-xl md:text-2xl font-title text-center">
              Une pédagogie active
            </h4>
            <p className="text-white text-sm  text-center">
              basée sur l’autonomie et la coopération des enfants.
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-center items-center gap-2 bg-purple p-4 rounded-lg">
            <h4 className="text-white text-xl md:text-2xl font-title text-center">
              L’immersion linguistique
            </h4>
            <p className="text-white text-sm  text-center">
              en occitan, favorisant une ouverture sur le monde et le respect de
              l’altérité.
            </p>
          </div>
        </div>
        <div className="px-2 text-justify md:text-left md:max-w-[80%]">
          <p className="  text-center">
            Ces valeurs permettent aux enfants du primaire et de la maternelle
            de s’épanouir dans un environnement multiculturel et participatif.
          </p>
        </div>
      </motion.article>
    </Section>
  );
};
