import { ParallaxSection } from "@/components";
export const LearningLinguisticSection = () => {
  return (
    <ParallaxSection
      className=" bg-red min-h-[80vh] flex justify-center items-center "
      showTopClouds
      backgroundImage="/img/educator-teaching.webp"
      opacity="opacity-10"
    >
      <article className="flex flex-col gap-5  w-full max-w-[1200px]  text-center md:text-start bg-red/30 backdrop-blur-lg rounded-xl p-2 text-white ">
        <div className="flex flex-col ">
          <h2 className="font-subtitle text-xl md:text-2xl text-primary">
            L’apprentissage par l’immersion linguistiquex
          </h2>
          <h3 className=" font-title text-4xl md:text-6xl text-white">
            Grandir avec deux langues, un atout pour la vie.
          </h3>
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="text-center font-sans text-base md:text-lg">
            L’immersion en occitan est au cœur de notre projet éducatif. Les
            études montrent que l’apprentissage précoce de plusieurs langues
            renforce les capacités cognitives et sociales des enfants. L’occitan
            devient la langue du quotidien, favorisant une acquisition naturelle
            et spontanée.
          </p>
          <p className="font-semibold italic text-center">
            « Le bilinguisme favorise la flexibilité mentale et améliore la
            concentration. » - Professeur Jean Petit
          </p>
          <p className=" text-center font-sans text-base md:text-lg">
            Au quotidien, les enfants interagissent en occitan à travers des
            activités variées : jeux, lectures, rituels du matin, et échanges en
            classe, favorisant un apprentissage dynamique et vivant.
          </p>
        </div>
      </article>
    </ParallaxSection>
  );
};
