import { Section } from "@/components";
import Image from "next/image";
export const HeroSectionPedagogiePage = () => {
  return (
    <Section
      className="bg-cream min-h-[60vh] flex justify-center items-center relative"
      showBottomClouds
      showTopClouds
      cloudsColor="bg-cream text-white"
    >
      <div className=" w-40 h-40 absolute top-20 left-10 translate-y-1/2 z-30">
        <Image
          src="/img/Planet3.png"
          alt="Notre pédagogie"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>
      <h2 className="text-4xl font-title text-primary">Notre pédagogie</h2>
    </Section>
  );
};
