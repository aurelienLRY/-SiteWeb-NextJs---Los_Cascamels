"use client";

import { Button, Link } from "@nextui-org/react";
import { Section } from "@/components";
import Image from "next/image";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <Section className="flex flex-col gap-10 lg:flex-row items-center justify-center py-5 min-h-[70vh]">
      <Image
        src="/img/Planet1.webp"
        alt="dessin d'un enfant sur un stylo"
        width={1080}
        height={1080}
        className="w-[10%] absolute top-0 left-0 hidden lg:block"
      />
      <Image
        src="/img/Planet2.webp"
        alt="dessin d'un enfant sur un stylo"
        width={350}
        height={350}
        className="w-[15%] absolute bottom-0 right-0 hidden lg:block"
      />
      <article className="flex flex-col lg:flex-row gap-5 items-center justify-evenly w-full max-w-[1400px] py-20 ">
        <div className="flex flex-1 items-center justify-center ">
          <Image
            src="/img/Kids1.webp"
            alt="dessin d'enfants jouant ensemble"
            width={1080}
            height={1080}
            className="max-w-[500px] w-[60%] md:w-[80%]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col  flex-1 gap-3 items-center md:items-start justify-center"
        >
          <h2 className="  text-xl font-subtitle text-primary">
            Une école associative et engagée
          </h2>
          <h3 className="text-4xl md:text-6xl font-title">Qui sommes-nous ?</h3>
          <p className=" italic font-semibold text-gray-500 text-center md:text-start">
            L’école Calandreta Los Cascamèls est un lieu d’apprentissage unique
            où l’enfant est placé au centre. Nous utilisons des pédagogies
            actives, combinant immersion occitane et méthodes Freinet, pour
            permettre à chaque élève de grandir avec confiance et créativité.
          </p>
          <p className="text-center md:text-start">
            Notre école fait partie du réseau Calandreta, un mouvement éducatif
            qui regroupe aujourd’hui plus de 70 écoles à travers la région.
          </p>
          <p className="text-center md:text-start">
            Portée par une communauté soudée de familles, d’enseignants et de
            bénévoles, notre école défend une éducation inclusive, ouverte sur
            le monde et enracinée dans les traditions régionales.
          </p>

          <Link href="/a-propos">
            <Button
              color="primary"
              size="lg"
              className="text-white font-title mt-5"
            >
              En savoir plus
            </Button>
          </Link>
        </motion.div>
      </article>
    </Section>
  );
};
