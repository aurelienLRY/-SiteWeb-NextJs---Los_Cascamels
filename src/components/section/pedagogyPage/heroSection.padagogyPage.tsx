"use client";
import { Section } from "@/components";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
export const HeroSectionPedagogyPage = () => {
  return (
    <Section className=" min-h-[60vh] flex justify-center items-center relative">
      <div className=" w-40 h-40 absolute top-20 left-10 translate-y-1/2 z-30 hidden lg:block">
        <Image
          src="/img/Planet3.webp"
          alt="Notre pédagogie"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>
      <div className=" w-40 h-40 absolute bottom-36 right-10 translate-y-1/2 z-30 hidden lg:block">
        <Image
          src="/img/Planet4.webp"
          alt="Notre pédagogie"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col  flex-1 gap-3 items-center md:items-start justify-center max-w-[1000px] text-center md:text-start">
        <h1 className=" text-xl font-subtitle text-primary">
          Notre pédagogie : une approche immersive et innovante
        </h1>
        <h2 className="text-4xl md:text-6xl font-title">
          Une méthode éducative ancrée dans l’expérience
        </h2>
        <p className=" italic font-semibold text-gray-500 text-center md:text-start">
          À la Calandreta Los Cascamels, nous avons développé une pédagogie
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
    </Section>
  );
};
