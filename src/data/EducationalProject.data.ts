export interface EducationalProject {
  title: string;
  description: string[];
  classroom: string;
  image: string;
}

export const educationalProjects: EducationalProject[] = [
  {
    title: "Petits apiculteurs en herbe",
    description: [
      "Les enfants deviennent de véritables petits apiculteurs ! Grâce aux ruches installées dans l’école, ils découvrent le monde fascinant des abeilles tout en participant activement à l’entretien des colonies. Accompagnés à chaque, ils apprennent à observer, respecter et comprendre le rôle essentiel de ces insectes dans notre environnement.",
      "Ce projet pédagogique vivant et différencié permet d’aborder de nombreuses notions (biologie, écologie, coopération…) tout en cultivant la curiosité, le sens des responsabilités et le lien à la nature."
    ],
    classroom: "L'école",
    image: "/img/de-la-ruche-au-miel.webp",
  },
  {
    title: "Biodiversité Occitane",
    description: [
      "Ce projet vise à promouvoir la langue, la culture et l’histoire occitanes. Les enfants participeront à des créations contemporaines en matériaux recyclés, avec une restitution orale et visuelle en occitan. Ce sera aussi l’occasion d’inviter l’école publique, le village et nos partenaires à redécouvrir cette tradition.",
    ],
    classroom: "Primaire",
    image: "/img/Kids2.webp",
  },
  {
    title: "Vendanges",
    description: [
      "Depuis plusieurs années, nous organisons des vendanges pour nos élèves. L'occasion de découvrir le travail des vignerons , le processus de la vinification.",
    ],
    classroom: "Primaire",
    image: "/img/vendanges.webp",
  },
  {
    title: "Des enfants et des arbres",
    description: [
      "Les enfants participent à la plantation d'arbres dans le village de  Félines Minervois. ",
    ],
    classroom: "CP à CM2",
    image: "/img/des-enfants-et-des-arbres.webp",
  },
  {
    title: "Découverte des métiers de la ferme",
    description: [
      "En colaboaration avec  l’élevage d’Anaïs de la chèvrerie de la Broutade à Félines  ",
    ],
    classroom: "CP à CM2",
    image: "/img/les-metiers-de-la-ferme.webp",
  },
];
