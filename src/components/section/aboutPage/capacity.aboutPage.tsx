import { Section } from "@/components";

export const Capacity = () => {
  return (
    <Section className="flex flex-col gap-8 justify-center items-center min-h-[30vh] py-10 md:pb-48 px-4 bg-cream">
      <div className="flex flex-col gap-8 justify-center items-center">
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
      </div>
    </Section>
  );
};
