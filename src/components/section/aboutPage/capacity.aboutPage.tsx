"use client";
import { Section } from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";

export const Capacity = () => {
  return (
    <Section
      className="flex flex-col gap-8 justify-center items-center min-h-[90vh]    bg-cream "
      showTopClouds={true}
      cloudsColor="bg-transparent text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col gap-8 justify-center items-center max-w-[1200px] text-center lg:text-start"
      >
        <div className=" flex flex-col gap-2">
          <h2 className="font-subtitle text-2xl text-primary">
            Une structure à taille humaine
          </h2>
          <h3 className="font-title text-4xl md:text-6xl text-black">
            Des capacités d’accueil adaptées aux enfants du primaire et de la
            maternelle
          </h3>
        </div>
        <div className=" px-4">
          <p className="text-justify lg:text-left">
            Notre école accueille une soixantaine d’enfants, leur offrant un
            cadre familial et individualisé. Chaque classe de l’école primaire
            bénéficie d’un encadrement attentionné, favorisant une relation
            étudiante épanouie.
          </p>
        </div>
      </motion.div>
      <div className="flex flex-col gap-44 xl:gap-8  justify-center items-center xl:flex-row     container mx-auto">
        {classCardData.map((card, index) => (
          <ClassCard key={`classCard-${index}`} {...card} index={index} />
        ))}
      </div>
    </Section>
  );
};

const ClassCard = ({
  title,
  description,
  index,
  image,
  bgColor = "bg-bleuRoyale",
}: {
  title: string;
  description: string;
  index: number;
  image: string;
  bgColor?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.3 * (index / 0.8),
      }}
      className="w-full relative max-w-[550px] rounded-2xl mb-40"
    > 
      <div className="w-full h-[350px] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-2xl"
        />
      </div>
   
      <div
        className={`absolute -bottom-64 left-1/2 -translate-x-1/2 ${bgColor} border-t-3 border-white p-6 rounded-3xl text-white w-full max-w-[90%] h-[350px] shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col justify-between `}
      >
        <h4 className="!text-4xl font-title text-center mb-5">{title}</h4>
        <p className="text-center flex-1 flex items-center  justify-center">{description}</p>
      </div>
    </motion.div>
  );
};

const classCardData = [
  {
    title: "PS-MS-GS",
    description:
      "La classe de maternelle accueille une vingtaine d'enfants de la Toute Petite Section à la Grande Section. Le fonctionnement en multi-niveaux favorise autonomie, entraide et apprentissage naturel des fondamentaux. Dans un cadre spacieux et lumineux, sous les arbres et face aux vignes, chaque enfant trouve sa place et évolue à son rythme.",
    image: "/img/Los-cascamels-classe_PMS.2.webp",
    bgColor: "bg-green",
  },
  {
    title: "CP-CE2",
    description:
      "Cette classe regroupe les élèves du CP au CE2 dans un cadre d'apprentissage coopératif et institutionnel. La semaine est rythmée par des moments d'échanges, de travail en équipe et par le projet de l'école du dehors : un après-midi par semaine en pinède aménagée pour les classes. Les enfants participent aussi au projet apicole de l'école, découvrant concrètement le travail de l'apiculteur, de la création des essaims à l'extraction du miel.",
    image: "/img/Los-cascamels-classe_cp.2.webp",
    bgColor: "bg-pink",
  },
  {
    title: "CE2-CM2",
    description:
      "La classe de CE2-CM2 accueille une vingtaine d'élèves dans un environnement favorisant l'autonomie et la coopération. Encadrés par deux adultes, les enfants travaillent en petits groupes, s'entraident et approfondissent leurs apprentissages. La pédagogie active et les projets communs avec les autres classes permettent à chacun de développer ses compétences tout en s'épanouissant au sein de la vie collective.",
    image: "/img/Los-cascamels-classe_CE2-CM2.2.webp",
    bgColor: "bg-purple",
  },
];

