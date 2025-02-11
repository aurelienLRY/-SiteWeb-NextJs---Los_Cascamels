"use client";

import { Button } from "@nextui-org/react";
import { Section, Carousel, CarouselItem, DonorCard } from "@/components";
import donorData from "@/data/donor.data.json";
import Link from "next/link";

export const DonorSection = () => {
  return (
    <Section
      className="flex flex-col gap-10 items-center justify-center  h-full bg-lightBlue bg-[url('/img/Sky1.png')] bg-cover bg-center py-20 min-h-[80vh]  "
      showTopClouds
      cloudsColor="text-cream"
    >
      <div className="flex flex-col items-center justify-center mt-10">
        <h2 className="font-subtitle text-lightGray text-center">
          Soutenir Los Cascamels
        </h2>
        <h3 className="text-secondary text-center font-title text-4xl md:text-6xl">
          Soutenez l’éducation de demain
        </h3>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center max-w-[900px]">
        <p className="text-white text-center font-sans text-base md:text-lg">
          En nous soutenant, vous contribuez à offrir aux enfants une éducation
          innovante et enracinée dans la culture occitane. Votre engagement aide
          à financer des projets concrets, tels que l’acquisition de matériel
          pédagogique, l’organisation d’événements culturels et l’entretien de
          nos infrastructures.
        </p>
        <p className="text-white text-center font-sans text-base md:text-lg">
          Nous souhaitons aussi remercier nos partenaires actuels pour leur
          précieux soutien. Ils contribuent à faire vivre notre projet et à lui
          donner un impact durable.
        </p>
      </div>

      <Carousel
        showDots={false}
        showArrows={false}
        visibleItems={2}
        autoPlay={true}
        autoPlayInterval={5000}
        className="max-w-[800px]"
      >
        {donorData.donorData.map((donor) => (
          <GenerateDonorCard key={donor.name} {...donor} />
        ))}
      </Carousel>

      <div className="flex flex-col items-center justify-center ">
        <Link
          href="https://www.helloasso.com/associations/los-cascamels"
          target="_blank"
        >
          <Button className="bg-secondary text-white font-title" size="lg">
            Faire un don
          </Button>
        </Link>
      </div>
    </Section>
  );
};

interface DonorCardProps {
  description: string;
  urlImage: string;
  name: string;
}
const GenerateDonorCard = ({ description, urlImage, name }: DonorCardProps) => {
  return (
    <CarouselItem>
      <DonorCard description={description} urlImage={urlImage} name={name} />
    </CarouselItem>
  );
};
