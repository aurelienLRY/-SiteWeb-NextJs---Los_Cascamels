import { Section } from "@/components";
import { Card } from "@/components/card/Card";

export const ActivePedagogySection = () => {
  return (
    <Section className="flex flex-col gap-10 lg:flex-row items-center justify-center py-5">
      <article className="flex flex-col gap-5  w-full max-w-[1200px] py-20 text-center md:text-start ">
        <div className="flex flex-col mt-10">
          <h2 className="font-subtitle text-lightGray">
            Une pédagogie active et participative{" "}
          </h2>
        </div>
        <h3 className="text-4xl md:text-6xl font-title">
          Un cadre structurant et motivant.{" "}
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <div className="flex flex-col lg:flex-row gap-5">
          {contentItems.map((item, index) => (
            <Card
              title={item.title}
              className="bg-bleuRoyale h-full "
              key={`y-${index}`}
            >
              <p className="">{item.content}</p>
            </Card>
          ))}
        </div>
      </article>
    </Section>
  );
};

const contentItems = [
  {
    title: "Méthodes actives",
    content:
      "L’enfant expérimente et apprend en manipulant et en résolvant des problèmes concrets. Par exemple, lors d’un atelier d’écriture libre, les élèves créent leurs propres récits en groupe, renforçant ainsi leur expression et leur créativité.",
  },
  {
    title: "Pédagogie Institutionnelle",
    content:
      "Nous structurons la vie de la classe avec des conseils d’élèves, où chaque enfant peut exprimer ses idées et participer aux décisions collectives. Ce système développe la responsabilité individuelle et le sens du collectif.",
  },
  {
    title: "Approche Freinet",
    content:
      "Inspirée de la coopération et de l’autonomie, cette méthode encourage la production collective. Les élèves participent à des projets communs tels que la création d’un journal scolaire ou la mise en place d’expositions thématiques, favorisant ainsi leur engagement et leur curiosité.",
  },
];
