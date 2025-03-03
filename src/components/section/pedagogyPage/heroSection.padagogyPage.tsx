"use client";
import { HeroSection as HeroSectionLayout } from "@/components";
import { Button, Link } from "@nextui-org/react";

export const HeroSectionPedagogyPage = () => {
  return (
    <HeroSectionLayout
      props={{
        showBottomClouds: true,
        showTopClouds: true,
      }}
    >
      <div className="flex flex-col  flex-1 gap-3 items-center md:items-start justify-center max-w-[1000px] text-center md:text-start">
        <h1 className=" text-xl md:text-2xl font-subtitle text-white">
          Notre pédagogie : une approche immersive et innovante
        </h1>
        <h2 className="text-4xl md:text-6xl font-title text-secondary">
          Une méthode éducative ancrée dans l’expérience
        </h2>
        <p className=" italic font-semibold text-gray-500 text-center md:text-start">
          À la Calandreta Los Cascamèls, nous avons développé une pédagogie
          immersive unique combinant l’apprentissage en occitan, des méthodes
          actives et une structuration inspirée de la Pédagogie
          Institutionnelle. Cette approche donne à l’enfant une place centrale
          dans ses apprentissages et lui permet d’évoluer dans un cadre
          bienveillant et coopératif.
        </p>
        <Link href="/contact">
          <Button
            color="primary"
            size="lg"
            className="text-white font-title mt-5"
          >
            Rencontrez notre équipe
          </Button>
        </Link>
      </div>
    </HeroSectionLayout>
  );
};
