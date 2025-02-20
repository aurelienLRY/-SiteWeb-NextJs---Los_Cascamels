import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/contact",
        "/faq",
        "/mention-legal",
        "/a-propos",
        "/notre-pedagogie",
      ],
      disallow: ["/admin", "/private", "/**/private/*"],
    },
    sitemap: "https://los-cascamels.fr/sitemap.xml",
    host: "https://los-cascamels.fr",
  };
}
