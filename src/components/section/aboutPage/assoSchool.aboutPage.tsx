import { Section } from "@/components";
import Image from "next/image";

export const AssoSchool = () => {
  return (
    <Section className="flex gap-4 justify-center items-center min-h-[40vh] md:py-14 px-2">
      <div className="flex flex-1 items-center  p-10 max-w-2/5">
        <Image
          src="/img/meeting-1.jpg"
          alt="A propos"
          width={1024}
          height={1024}
          className="object-cover w-full max-h-[60%] rounded-3xl"
          loading="lazy"
        />
      </div>
      <div className="flex w-1/2 flex-col gap-8 justify-center items-center">
        <div className="flex flex-col gap-2 items-center text-center md:text-left">
          <h2 className="font-subtitle text-2xl text-primary w-full">
            Une école associative
          </h2>
          <h3 className="font-title text-4xl md:text-6xl w-full">
            Une gouvernance collaborative et citoyenne
          </h3>
        </div>
        <div className="flex flex-col gap-4 text-justify md:text-left  px-2">
          <p>
            Notre école primaire fonctionne sous le statut d’association loi
            1901. Les enseignants, les parents et les enfants collaborent
            activement, soutenus par des partenaires locaux. Cette structure
            permet une gestion participative où chacun trouve sa place.
          </p>
          <p>
            Nous sommes reconnus pour notre utilité publique et notre engagement
            sociétal : offrir une éducation alternative de qualité pour les
            enfants de l’école élémentaire.
          </p>
        </div>
      </div>
    </Section>
  );
};
