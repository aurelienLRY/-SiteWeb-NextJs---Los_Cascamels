/**
 * En-tête principal du site contenant la navigation
 * @module Header
 */
"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Interface définissant la structure d'un élément de navigation
 * @interface NavItemProps
 * @property {string} href - URL de destination
 * @property {string} label - Texte affiché pour le lien
 */
interface NavItemProps {
  href: string;
  label: string;
}

/**
 * Configuration des éléments de navigation
 * @constant {NavItemProps[]}
 */
const NAV_ITEMS: NavItemProps[] = [
  { href: "/", label: "Accueil" },
  { href: "/notre-pedagogie", label: "Notre Pédagogie" },
  { href: "/a-propos", label: "A propos" },
  { href: "/contact", label: "Contact" },
];

/**
 * Styles CSS pour les liens de navigation
 * @constant {Object}
 */
const STYLES = {
  link: "text-gray-600 hover:text-primary transition-colors duration-300 font-title md:text-2xl text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1",
  linkActive: "text-primary",
  nav: "flex items-center justify-center h-full",
  list: "flex gap-6",
  header: "h-20 relative bg-white shadow-sm z-10",
  container: "flex items-center justify-center h-full max-w-7xl mx-auto px-4",
} as const;

/**
 * Composant pour un élément de navigation individuel
 * @component NavItem
 * @param {NavItemProps} props - Propriétés du composant
 */
const NavItem = ({ href, label }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li role="none" className="list-none flex items-center justify-center">
      <Link
        href={href}
        className={`${STYLES.link} ${isActive ? STYLES.linkActive : ""}`}
        role="menuitem"
        aria-current={isActive ? "page" : undefined}
        tabIndex={0}
      >
        {label}
      </Link>
    </li>
  );
};

/**
 * Composant de navigation principale
 * @component NavBar
 */
const NavBar = () => {
  return (
    <nav aria-label="Navigation principale" className={STYLES.nav}>
      <ul className={STYLES.list} role="menubar" aria-label="Menu principal">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </ul>
    </nav>
  );
};

/**
 * Composant d'en-tête principal
 * @component Header
 */
export const Header = () => {
  return (
    <header
      className={STYLES.header}
      role="banner"
      aria-label="En-tête du site"
    >
      <div className={STYLES.container}>
        <NavBar />
      </div>
    </header>
  );
};
