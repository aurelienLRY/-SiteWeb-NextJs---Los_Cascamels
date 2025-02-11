/**
 * Pied de page principal du site
 * @module Footer
 */
import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

/**
 * Interface pour les éléments de navigation
 * @interface NavItem
 */
interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

/**
 * Configuration des liens de navigation
 * @constant {NavItem[]}
 */
const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/contact", label: "Contact" },
  { href: "#", label: "Blog" },
  { href: "#", label: "FAQ" },
  { href: "#", label: "Mentions légales" },
  { href: "#", label: "Politique de confidentialité" },
];

/**
 * Configuration des liens utiles
 * @constant {NavItem[]}
 */
const USEFUL_LINKS: NavItem[] = [
  {
    href: "https://www.facebook.com/CalandretaRieux/",
    label: "Facebook",
    external: true,
  },
  {
    href: "https://www.helloasso.com/associations/los-cascamels",
    label: "HelloAsso",
    external: true,
  },
  {
    href: "https://calandreta.org/",
    label: "La fédération Calandreta",
    external: true,
  },
];

/**
 * Styles CSS pour le footer
 * @constant {Object}
 */
const STYLES = {
  footer: "relative bg-bleuRoyale py-8 ",
  background:
    "absolute inset-0 bg-[url('/img/Sky2.webp')] bg-cover bg-center opacity-30",
  container: "container mx-auto px-4 relative z-10 text-white",
  grid: "grid grid-cols-1 md:grid-cols-3 gap-8 ",
  section: "space-y-2",
  heading: "text-xl font-bold mb-4",
  link: "hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1",
  socialLink:
    "text-2xl hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-2",
  socialContainer: "flex space-x-4",
  copyright: "text-center text-sm mt-4 pt-4 border-t border-white/20",
} as const;

/**
 * Composant pour les liens de navigation
 * @component FooterLink
 */
const FooterLink = ({ href, label, external }: NavItem) => (
  <li>
    <Link
      href={href}
      className={STYLES.link}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {label}
    </Link>
  </li>
);

/**
 * Composant principal du pied de page
 * @component Footer
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={STYLES.footer} role="contentinfo">
      <div className={STYLES.background} aria-hidden="true" />
      <div className={STYLES.container}>
        <div className={STYLES.grid}>
          {/* Section Navigation */}
          <nav aria-label="Navigation du pied de page">
            <p className={STYLES.heading}>Navigation</p>
            <ul className={STYLES.section}>
              {NAV_ITEMS.map((item, index) => (
                <FooterLink key={`nav-${index}`} {...item} />
              ))}
            </ul>
          </nav>

          {/* Section Contact */}
          <div>
            <p className={STYLES.heading}>Contact</p>
            <address className={STYLES.section}>
              <p>📍 123 Rue des Cascamels</p>
              <p>
                📞{" "}
                <a href="tel:+33123456789" className={STYLES.link}>
                  +33 1 23 45 67 89
                </a>
              </p>
              <p>
                ✉️{" "}
                <a href="mailto:contact@cascamels.fr" className={STYLES.link}>
                  contact@cascamels.fr
                </a>
              </p>
            </address>
          </div>

          {/* Section Liens utiles */}
          <nav aria-label="Liens utiles">
            <p className={STYLES.heading}>Liens utiles</p>
            <ul className={STYLES.section}>
              {USEFUL_LINKS.map((item, index) => (
                <FooterLink key={`useful-${index}`} {...item} />
              ))}
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className={STYLES.copyright}>
          <p>© {currentYear} Los Cascamels. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
