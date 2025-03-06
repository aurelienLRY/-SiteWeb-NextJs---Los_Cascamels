"use client";
import { Section } from "@/components";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
export const FederationAboutPage = () => {
  return (
    <Section className="flex flex-col lg:flex-row gap-8 justify-center items-center min-h-[60vh] max-w-8xl  ">
      <Image
        src="/img/logo_calandreta.webp"
        alt="logo de la Calandreta"
        width={325}
        height={148}
        className="object-cover"
      />

      <article className="flex flex-col  items-center gap-4  text-center xl:text-left  lg:pb-0 max-w-4xl">
        <div className="flex flex-col">
          <h2 className="text-2xl text-primary font-subtitle">
            Une école ancrée dans le réseau Calandreta
          </h2>
          <h3 className="text-4xl md:text-6xl font-title">
            Un cadre structurant au service de l’éducation
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            Los Cascamèls est membre de la Fédération des Calandretas, qui
            regroupe et accompagne plus de 70 écoles du réseau sur les volets
            pédagogiques, administratifs et institutionnels. Cette fédération
            œuvre pour garantir la qualité et la pérennité du modèle éducatif
            Calandreta, en lien avec les instances nationales et les
            collectivités locales.
          </p>
          <p>
            Los Cascamèls bénéficient d’un contrat avec l’État, ce qui signifie
            que nos enseignants sont sous contrat d’État et titulaires du
            concours de professeur des écoles. Ils sont formés à la pédagogie
            active et à l’immersion linguistique en occitan grâce à l’institut
            APRENE, l’organisme de formation des Calandretas, reconnu par
            l’Éducation nationale.
          </p>
        </div>
        <div className="flex gap-4 justify-center lg:justify-start w-full px-4">
          <Link href="https://www.calandreta.org/" target="_blank">
            <Button
              value={"En savoir plus"}
              className=" text-white"
              variant="solid"
              color="primary"
            >
              En savoir plus
            </Button>
          </Link>
        </div>
      </article>
    </Section>
  );
};
