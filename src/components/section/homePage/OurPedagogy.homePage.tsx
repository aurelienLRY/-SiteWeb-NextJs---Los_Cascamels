"use client";
import { ParallaxSection, Card } from "@/components";
import { Button } from "@nextui-org/react";
import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const OurPedagogy = () => {
  return (
    <ParallaxSection
      className="flex flex-col gap-10 lg:flex-row items-center justify-center bg-bleuRoyale py-20 min-h-[90vh]"
      backgroundImage="/img/Sky2.webp"
      showTopClouds
      showBottomClouds
      id="pedagogy"
    >
      <article className="flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col gap-3 md:gap-5 items-center justify-center">
          <p className="text-secondary text-xl font-subtitle">
            Une pédagogie innovante et enracinée
          </p>
          <h2 className="text-4xl md:text-6xl font-title text-center text-white">
            Pourquoi choisir Los Cascamèls ?
          </h2>
          <p className="text-white text-center md:text-lg max-w-[1200px]">
            Nos méthodes pédagogiques favorisent l&apos;autonomie, l&apos;esprit
            critique et la connexion à nos racines culturelles. Chez Los
            Cascamèls, chaque enfant évolue dans un environnement bienveillant
            et stimulant.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-[1400px] items-stretch">
          {itemsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ItemsCard key={index} {...item} />
            </motion.div>
          ))}
        </div>

        <Link href="/notre-pedagogie">
          <Button className="bg-primary text-white font-title" size="lg">
            Découvrir nos méthodes
          </Button>
        </Link>
      </article>
    </ParallaxSection>
  );
};

const ItemsCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Card
      className="bg-darkBlue w-full max-w-[400px] mx-auto h-full"
      title={title}
    >
      {children}
    </Card>
  );
};

const itemsData = [
  {
    title: "Immersion linguistique",
    children:
      "Grâce à l'immersion linguistique, nos enfants découvrent les richesses du français et de l'occitan, élargissant leurs horizons linguistiques et culturels",
    img: `https://placehold.co/600x400.png`,
  },
  {
    title: "Méthodes actives",
    children:
      "Inspirée de la pédagogie Freinet, notre méthode encourage les élèves à devenir acteurs de leur apprentissage, en développant leur curiosité et créativité.",
    img: `https://placehold.co/600x400.png`,
  },
  {
    title: "Un cadre bienveillant",
    children:
      "Nous plaçons le bien-être de chaque enfant au cœur de notre projet, dans une école à taille humaine où chaque élève est unique.",
    img: `https://placehold.co/600x400.png`,
  },
];
