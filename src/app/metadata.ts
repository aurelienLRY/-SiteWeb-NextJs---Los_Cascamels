import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "École primaire Los Cascamèls - Rieux-Minervois",
  description: "École primaire Los Cascamèls - Rieux-Minervois",
  keywords: [
    "Los Cascamèls",
    "Calendrette",
    " école Rieux-Minervois",
    "École primaire",
    "École élémentaire",
    "École éducative",
    "Éducation innovante",
    "École enracinée dans la culture occitane",
    "École bilingue",
  ],

  authors: [{ name: "Calandreta Los Cascamèls" }],
  openGraph: {
    phoneNumbers: [`${process.env.NEXT_PUBLIC_CONTACT_PHONE}`],
    title: "École primaire Los Cascamèls - Rieux-Minervois",
    description: "École primaire Los Cascamèls - Rieux-Minervois",
    url: `${process.env.NEXT_PUBLIC_URL}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/img/open-graph/og.webp`,
        width: 1200,
        height: 630,
        alt: "École primaire Los Cascamèls - Rieux-Minervois",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "École primaire Los Cascamèls - Rieux-Minervois",
    description: "École primaire Los Cascamèls - Rieux-Minervois",
    images: [`${process.env.NEXT_PUBLIC_URL}/img/open-graph/og-twitter.webp`],
  },
};
