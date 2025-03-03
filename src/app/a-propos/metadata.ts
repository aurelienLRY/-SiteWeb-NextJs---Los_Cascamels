import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous ? - École Calandreta Los Cascamèls",
  description:
    "Depuis 2009, la Calandreta Los Cascamèls, école primaire immersive, transmet la langue et la culture occitane à travers une pédagogie active et bilingue (occitan-français).",
  keywords: [
    "école primaire",
    "école élémentaire",
    "éducation alternative",
    "immersion linguistique",
    "culture occitane",
    "pédagogie Freinet",
  ],
  authors: [{ name: "Calandreta Los Cascamèls" }],
  openGraph: {
    title: "Qui sommes-nous ? - École Calandreta Los Cascamèls",
    description:
      "Une école immersive bilingue (occitan-français) élémentaire qui valorise la langue et la culture occitane tout en proposant une pédagogie active et bienveillante.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_URL}/a-propos`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/img/open-graph/og-about.webp`,
        width: 1200,
        height: 630,
        alt: "Qui sommes-nous ? - École Calandreta Los Cascamèls",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qui sommes-nous ? - École Calandreta Los Cascamèls",
    description:
      "Depuis 2009, la Calandreta Los Cascamèls, école primaire immersive, transmet la langue et la culture occitane à travers une pédagogie active et bilingue (occitan-français).",
    images: [
      `${process.env.NEXT_PUBLIC_URL}/img/open-graph/og-about-twitter.webp`,
    ],
  },
};
