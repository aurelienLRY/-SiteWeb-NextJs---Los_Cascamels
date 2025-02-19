"use client";
import { Section, Card } from "@/components";
import { motion } from "framer-motion";

export const Capacity = () => {
  return (
    <Section className="flex flex-col gap-8 justify-center items-center min-h-[30vh]  md:pb-48  bg-cream ">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col gap-8 justify-center items-center max-w-[1200px]"
      >
        <div className="text-center md:text-left flex flex-col gap-2">
          <h2 className="font-subtitle text-2xl text-primary">
            Une structure à taille humaine
          </h2>
          <h3 className="font-title text-4xl md:text-6xl">
            Des capacités d’accueil adaptées aux enfants du primaire et de la
            maternelle
          </h3>
        </div>
        <div className=" px-4">
          <p className="text-justify md:text-left">
            Notre école accueille une soixantaine d’enfants, leur offrant un
            cadre familial et individualisé. Chaque classe de l’école primaire
            bénéficie d’un encadrement attentionné, favorisant une relation
            étudiante épanouie.
          </p>
        </div>
      </motion.div>
      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-center max-w-[1400px]">
        {classCardData.map((card, index) => (
          <ClassCard key={`class-${index}`} {...card} index={index} />
        ))}
      </div>
    </Section>
  );
};

const ClassCard = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
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
    >
      <Card
        title={title}
        className="bg-white w-full max-w-[400px] mx-auto h-full"
      >
        <p className="text-center text-black">{description}</p>
      </Card>
    </motion.div>
  );
};

const classCardData = [
  {
    title: "PS-MS-GS",
    description:
      "Notre classe élémentaire , d'une capacité de 20 enfants. Cette mixité permet de favoriser l'échange entre les élèves et de favoriser leur socialisation. Les plus petits peuvent être accompagnés par les plus grands, et les plus grands peuvent aider les plus petits. Ce qui permet a chaque cycle de tirer parti de l'expérience et de l'entraide.",
  },
  {
    title: "CP-CE1",
    description:
      "Notre classe de CP-CE1, d'une capacité de 20 enfants. Cette classe est composée de 5 filles et 5 garçons. Elle est encadrée par une équipe pédagogique de 2 adultes.",
  },
  {
    title: "CE2-CM2",
    description:
      "Notre classe de CE2-CM2, d'une capacité de 20 enfants. Cette classe est composée de 5 filles et 5 garçons. Elle est encadrée par une équipe pédagogique de 2 adultes.",
  },
];
