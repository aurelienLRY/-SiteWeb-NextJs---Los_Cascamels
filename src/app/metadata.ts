import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "École primaire Los Cascamels - Rieux-Minervois",
  description: "École primaire Los Cascamels - Rieux-Minervois",
  keywords: [
    "Los Cascamels",
    "Calendrette",
    "Rieux-Minervois",
    "École primaire",
    "École élémentaire",
    "École éducative",
    "Éducation innovante",
    "École enracinée dans la culture occitane",
    "École bilingue",
  ],

  authors: [{ name: "Calandreta Los Cascamels" }],
  openGraph: {
    phoneNumbers: [`${process.env.NEXT_PUBLIC_CONTACT_PHONE}`],
    title: "École primaire Los Cascamels - Rieux-Minervois",
    description: "École primaire Los Cascamels - Rieux-Minervois",
    url: `${process.env.NEXT_PUBLIC_URL}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/img/open-graph/og.webp`,
        width: 1200,
        height: 630,
        alt: "École primaire Los Cascamels - Rieux-Minervois",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "École primaire Los Cascamels - Rieux-Minervois",
    description: "École primaire Los Cascamels - Rieux-Minervois",
    images: [`${process.env.NEXT_PUBLIC_URL}/img/open-graph/og-twitter.webp`],
  },
};
