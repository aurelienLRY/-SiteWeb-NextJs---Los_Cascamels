export interface EducationalProject {
  title: string;
  description: string[];
  classroom: string;
  image: string;
}

export const educationalProjects: EducationalProject[] = [
  {
    title: "L’école du dehors",
    description: [
      "Chaque semaine, nous nous rendons dans une pinède proche de l’école pour y vivre une journée d’apprentissage au plus près de la nature. C’est l’école du dehors.",
      "Ce temps permet aux enfants d’observer la nature, de lire le paysage, de construire des cabanes, de faire du landart, et d’installer des abris pour les petites bêtes.",
      "Nous visitons aussi les ruches et suivons le travail des abeilles dans leur milieu naturel.",
      "Cette expérience aide les enfants à se reconnecter au monde naturel, à travailler ensemble et à apprendre autrement."
    ],
    classroom: "L'école",
    image: "/img/de-la-ruche-au-miel.webp",
  },
  {
    title: "Le jardin pédagogique",
    description: [
      "Soutenu par la région, le jardin est un espace vivant où les élèves cultivent légumes, fruits et fleurs en pleine terre.",
      "Ce projet relie sciences, écologie et citoyenneté, tout en valorisant les efforts de chacun et en créant un lieu de partage entre élèves et familles."
    ],
    classroom: "L'école",
    image: "/img/Le_jardin_pedagogique.webp",
  },
  {
    title: "Lo mercat de Nadal",
    description: [
      "Depuis plus de 12 ans, le marché de Noël valorise les créations artisanales des élèves, souvent réalisées à partir de matériaux recyclés.",
      "Événement festif et solidaire, il associe créativité et gestion de projet, et permet de financer ateliers, sorties et matériel pédagogique."
    ],
    classroom: "L'école",
    image: "/img/mercat-de-nadal.webp",
  },
  {
    title: "Vendanges",
    description: [
      "Les élèves participent chaque année aux vendanges et découvrent le métier de vigneron ainsi que les étapes de la vinification."
    ],
    classroom: "Primaire",
    image: "/img/Vendanges_2025.webp",
  },
  {
    title: "La fèsta de la patz",
    description: [
      "Chaque 21 septembre, les élèves se rassemblent autour de l’arbre de la paix planté dans la cour et y déposent mots doux et symboles.",
      "Ce rituel développe coopération, respect et vivre-ensemble tout en renforçant les apprentissages scolaires."
    ],
    classroom: "CP à CM2",
    image: "/img/des-enfants-et-des-arbres.webp",
  },
  {
    title: "Carnaval es arribat !",
    description: [
      "À la fin de l’hiver, l’école célèbre le carnaval : création du bonhomme, écriture du jugement, fabrication de carabènes et déambulation en musique.",
      "Un projet collectif qui mêle traditions locales, créativité et apprentissages transversaux dans la joie du printemps retrouvé."
    ],
    classroom: "L'école",
    image: "/img/LosCascamels-Carnaval.webp",
  },
  {
    title: "Découverte des métiers de la ferme",
    description: [
      "En partenariat avec la chèvrerie de la Broutade à Félines, les élèves découvrent les animaux, les savoir-faire agricoles et la vie à la ferme."
    ],
    classroom: "CP à CM2",
    image: "/img/les-metiers-de-la-ferme.webp",
  },
];
