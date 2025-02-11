import { Section } from "@/components";
import Image from "next/image";

export const BenefitsSection = () => {
  return (
    <Section className="min-h-[40vh] flex flex-col lg:flex-row gap-10 justify-center items-center">
      <aside className="w-full lg:w-1/2 max-w-[600px] flex justify-center items-center flex-1">
        <Image
          src="/img/Kids2.webp"
          alt="benefits"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </aside>
      <article className="flex flex-col gap-5 w-full max-w-[1200px] py-20 text-center md:text-start flex-1">
        <div className="">
          <h2 className="font-subtitle text-xl">
            Les bénéfices pour l’enfant : apprendre en s’épanouissant
          </h2>
          <h3 className="font-title text-4xl md:text-6xl">
            Une pédagogie qui prépare au monde de demain.
          </h3>
        </div>
        <p className="font-sans text-base md:text-lg">
          Une grande autonomie et une confiance en soi renforcée. Un sens accru
          de la coopération et du respect des autres. Une ouverture culturelle
          grâce au bilinguisme occitan-français
        </p>
      </article>
    </Section>
  );
};
