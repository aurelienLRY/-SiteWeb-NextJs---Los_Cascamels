"use client";
import { Section } from "@/components";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

export const OurClassesHomePage = () => {
  return (
    <Section className="flex flex-col gap-10  items-center justify-center py-24 bg-cream ">
      <div className="flex flex-col gap-1 flex-1 items-center justify-center w-full max-w-[1600px] ">
        <h2 className="text-primary  font-subtitle">
          Des classes accueillantes et adaptées aux besoins de chaque élève
        </h2>
        <h3 className="text-4xl md:text-6xl font-title text-center">
          Un cadre adapté à chaque âge
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 flex-1 items-center justify-center w-full max-w-[1300px]">
        <p className="text-center">
          L’école Calandreta Los Cascamels est organisée en trois classes à
          taille humaine, favorisant un suivi individualisé et une ambiance
          bienveillante. Nous accueillons les élèves de la petite section
          jusqu’au CM2, dans un environnement stimulant et enrichissant.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 flex-1 items-center justify-center w-full ">
        {classOrganization.map((item, index) => (
          <OurClassesCard key={index} {...item} />
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-5 md:gap-10 flex-1 items-center justify-center w-full ">
        <Link href="/a-propos">
          <Button color="primary" className=" font-title" size="lg">
            Découvrez notre organisation
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            color="secondary"
            className=" font-title hidden md:block"
            size="lg"
            variant="light"
          >
            Inscrire votre enfant
          </Button>
        </Link>
      </div>
    </Section>
  );
};

const OurClassesCard = ({
  altPhoto,
  urlPhoto,
  titre,
  description,
  bgColor = "bg-pink",
}: {
  altPhoto: string;
  urlPhoto: string;
  titre: string;
  description: string;
  bgColor?: string;
}) => {
  return (
    <div className="relative w-full max-w-[550px] rounded-2xl mb-36 ">
      <div className="w-full h-[250px] relative">
        <Image
          src={urlPhoto}
          alt={altPhoto}
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      <div
        className={`absolute -bottom-32 left-1/2 -translate-x-1/2 ${bgColor} p-6 rounded-3xl text-white w-full max-w-[90%] min-h-[200px] shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300`}
      >
        <h4 className="text-2xl font-title text-center mb-5">{titre}</h4>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

const classOrganization = [
  {
    altPhoto: "Une photo illustrant une classe maternelle dynamique.",
    urlPhoto: "https://picsum.photos/seed/picsum/600",
    titre: "PS, MS, GS",
    description:
      "Un espace chaleureux et sécurisé pour les plus jeunes, propice à l’éveil et à la découverte.",
    bgColor: "bg-bleuRoyale",
  },
  {
    altPhoto: "Une photo montrant des élèves en apprentissage interactif.",
    urlPhoto: "https://picsum.photos/seed/picsum/600",
    titre: "CP, CE1, CE2",
    description:
      "Des activités variées pour développer les compétences fondamentales et encourager la curiosité.",
    bgColor: "bg-purple",
  },
  {
    altPhoto: "Une photo d’un groupe d’élèves collaborant sur un projet.",
    urlPhoto: "https://picsum.photos/seed/picsum/600",
    titre: "CE2, CM1, CM2",
    description:
      "Un environnement stimulant pour préparer les élèves à la transition vers le collège tout en renforçant leur autonomie.",
    bgColor: "bg-pink",
  },
];
