"use client";
import { Button } from "@nextui-org/react";
import { FaRegPaperPlane } from "react-icons/fa";
import { Section } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <Section
      className="flex items-center justify-around h-full bg-lightBlue bg-[url('/img/Sky1.webp')] bg-cover bg-center py-20"
      showBottomClouds
      showTopClouds
    >
      <div className="flex flex-1 flex-col items-end justify-center ">
        <div className="flex flex-col items-center ">
          <p className="text-xl md:text-2xl text-center text-white font-subtitle">
            Bienvenue chez
          </p>
          <h1 className="text-4xl md:text-6xl font-title text-center text-brown ">
            Los Cascamels
          </h1>
          <h2 className="text-white text-center text-base md:text-lg font-sans max-w-[70%]">
            Une école où apprentissage et épanouissement se rencontrent.
          </h2>
          <p className="text-white text-center text-base md:text-lg font-sans max-w-[70%]">
            À Los Cascamels, nous construisons un avenir où chaque enfant
            grandit dans la bienveillance, l&apos;autonomie et la richesse de la
            culture occitane.
          </p>
          <div className="flex gap-5 items-center justify-center">
            <Link href="#pedagogy">
              <Button
                color="primary"
                className="text-white font-title mt-5"
                size="lg"
              >
                <FaRegPaperPlane />
                Découvrez notre pédagogie
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                color="secondary"
                variant="light"
                className="text-white font-title mt-5 hidden md:block"
                size="lg"
              >
                Planifiez une visite
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden md:flex">
        <Image
          src="/img/Fly1.webp"
          alt="dessin d'un enfant sur un stylo"
          width={1080}
          height={1080}
        />
      </div>
    </Section>
  );
};

export default HeroSection;
