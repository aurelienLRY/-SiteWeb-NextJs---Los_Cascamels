import { Section, OurValuesCard } from "@/components";
import Image from "next/image";
import { features } from "@/data/features.json";

export const OurValues = () => {
  return (
    <Section className="flex flex-col gap-10  items-center justify-center py-24 bg-cream ">
      <div className="flex flex-col gap-1 flex-1 items-center justify-center w-full max-w-[1600px] ">
        <h2 className="text-primary  font-subtitle">
          Des valeurs qui guident nos actions éducatives et culturelles
        </h2>
        <h3 className="text-4xl md:text-6xl font-title text-center">
          Nos engagements
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 flex-1 items-center justify-center w-full ">
        <div className="flex flex-col gap-3 lg:gap-10 items-center justify-center">
          {features.slice(0, 3).map((feature) => (
            <OurValuesCard
              key={feature.title}
              motif={feature.motif}
              title={feature.title}
              description={feature.description}
              items="LEFT"
              bgColor={feature.bgColor}
              textColor={feature.textColor}
              iconSize={24}
            />
          ))}
        </div>
        <Image
          src="/img/Kids2.webp"
          alt="dessin d'un enfant sur un stylo"
          width={1080}
          height={1080}
          className="max-w-[400px] w-[80%] "
        />
        <div className="flex flex-col gap-3 lg:gap-10 items-center justify-center">
          {features.slice(3, 6).map((feature) => (
            <OurValuesCard
              key={feature.title}
              motif={feature.motif}
              title={feature.title}
              description={feature.description}
              items="RIGHT"
              bgColor={feature.bgColor}
              textColor={feature.textColor}
              iconSize={24}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center "></div>
    </Section>
  );
};
