import { Section } from "@/components";
import { EducationProjectCard, Carousel } from "@/components";
import {
  EducationalProject,
  educationalProjects,
} from "@/data/EducationalProject.data";

export const BenefitsSection = () => {
  return (
    <Section className="min-h-[40vh] flex flex-col-reverse gap-10 justify-center items-center bg-primary">
      <Carousel
        showDots={false}
        showArrows={true}
        visibleItems={2}
        autoPlay={true}
        autoPlayInterval={4000}
        className="w-full h-full mx-auto max-w-[1400px] "
      >
        {educationalProjects.map(
          (project: EducationalProject, index: number) => (
            <EducationProjectCard
              key={`educational-project-${index}`}
              {...project}
              className={` ${bgColors[index % bgColors.length]}`}
            />
          )
        )}
      </Carousel>

      <article className="flex flex-col gap-5 w-full max-w-[1200px] py-20 text-center lg:text-start flex-1">
        <div className="">
          <h2 className="font-subtitle text-xl md:text-2xl text-white">
            Les bénéfices pour l&apos;enfant : apprendre en s&apos;épanouissant
          </h2>
          <h3 className="font-title text-4xl md:text-6xl text-white">
            Des projets concrets pour apprendre autrement
          </h3>
        </div>
        <p className=" ">
          L’apprentissage ne se limite pas aux murs de la classe. Nous croyons
          en une éducation vivante et immersive, où chaque expérience devient
          une opportunité d’apprendre et de grandir. Tout au long de l’année,
          nos élèves participent à des projets pédagogiques nos élèves
          participent à des projets pédagogiques riches et variés, en lien avec
          la nature, la culture occitane et la coopération.
        </p>
        <p className="font-sans text-base md:text-lg">
          À travers ces activités, ils développent leur autonomie, leur sens des
          responsabilités et leur curiosité, tout en s’ouvrant au monde qui les
          entoure. Les vendanges, le potager, les ateliers artistiques et les
          sorties culturelles sont autant d’occasions de donner du sens aux
          apprentissages et d’ancrer l’école dans son territoire.
        </p>
      </article>
    </Section>
  );
};

const bgColors = ["bg-red", "bg-pink", "bg-purple", "bg-lightBlue", "bg-green"];
