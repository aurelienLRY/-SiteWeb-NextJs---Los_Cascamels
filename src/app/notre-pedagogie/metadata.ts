import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre pédagogie - École Calandreta Los Cascamels",
  description:
    "Découvrez notre pédagogie active et bilingue (occitan-français).",
  keywords: [
    "école primaire à Rieux-Minervois",
    "école élémentaire",
    "éducation alternative",
    "immersion linguistique",
    "culture occitane à Rieux-Minervois",
    "École enfant HPI",
    "école inclusive",
  ],
  authors: [{ name: "Calandreta Los Cascamels" }],
  openGraph: {
    title: "Notre pédagogie - École Calandreta Los Cascamels",
    description:
      "Découvrez notre pédagogie active et bilingue (occitan-français).",
    url: `${process.env.NEXT_PUBLIC_URL}/notre-pedagogie`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/img/open-graph/og-pedagogie.webp`,
        width: 1200,
        height: 630,
        alt: "Notre pédagogie - École Calandreta Los Cascamels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notre pédagogie - École Calandreta Los Cascamels",
    description:
      "Découvrez notre pédagogie active et bilingue (occitan-français).",
    images: [
      `${process.env.NEXT_PUBLIC_URL}/img/open-graph/og-pedagogie-twitter.webp`,
    ],
  },
};
