"use client";
import { Button } from "@nextui-org/react";
import { FaRegPaperPlane } from "react-icons/fa";
import { HeroSection as HeroSectionLayout } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <HeroSectionLayout
      props={{
        showBottomClouds: true,
        showTopClouds: true,
      }}
    >
      <div className="flex  flex-col items-end justify-center ">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center "
        >
          <p className="text-xl md:text-2xl text-center text-white font-subtitle">
            Bienvenue à
          </p>
          <h1 className="text-4xl md:text-6xl font-title text-center text-brown ">
            Los Cascamèls
          </h1>
          <h2 className="text-white text-center text-base md:text-lg font-sans max-w-[70%]">
            Une école où apprentissage et épanouissement se rencontrent.
          </h2>
          <p className="text-white text-center text-base md:text-lg font-sans max-w-[70%]">
            À Los Cascamèls, nous construisons un avenir où chaque enfant
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
        </motion.div>
      </div>
      <div className=" hidden md:flex max-h-[500px] lg:max-h-[800px]">
        <Image
          src="/img/Fly1.webp"
          alt="dessin d'un enfant sur un stylo"
          width={1080}
          height={1080}
          className="object-contain"
        />
      </div>
    </HeroSectionLayout>
  );
};

export default HeroSection;
