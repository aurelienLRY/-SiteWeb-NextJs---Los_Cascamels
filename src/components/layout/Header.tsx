/**
 * En-tête principal du site contenant la navigation
 * @module Header
 */
"use client";
import React, { useState } from "react";
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
  linkMobile: "block text-gray-600 hover:text-primary transition-colors duration-300 font-title text-xl py-4 px-6 border-b border-gray-200 last:border-b-0",
  linkMobileActive: "text-primary font-semibold",
  nav: "flex items-center justify-center h-full",
  navMobile: "flex flex-col w-full h-full bg-white",
  list: "flex gap-6",
  listMobile: "flex flex-col w-full pt-8",
  header: "h-10 lg:h-20 relative bg-white  z-999",
  container: "flex items-center justify-center h-full max-w-7xl mx-auto px-4",
  hamburger: "md:hidden fixed bottom-6 right-6 flex flex-col justify-center items-center w-14 h-14 bg-primary text-white rounded-full shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 z-50",
  hamburgerLine: "w-6 h-0.5 bg-white transition-all duration-300",
  mobileMenu: "fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40",
  mobileMenuOpen: "translate-x-0",
  mobileMenuClosed: "translate-x-full",
  overlay: "fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden",
  closeButton: "absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary rounded-full",
} as const;

/**
 * Composant pour un élément de navigation individuel (desktop)
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
 * Composant pour un élément de navigation mobile
 * @component NavItemMobile
 * @param {NavItemProps} props - Propriétés du composant
 * @param {Function} onClose - Fonction pour fermer le menu mobile
 */
const NavItemMobile = ({ href, label, onClose }: NavItemProps & { onClose: () => void }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li role="none" className="list-none">
      <Link
        href={href}
        className={`${STYLES.linkMobile} ${isActive ? STYLES.linkMobileActive : ""}`}
        role="menuitem"
        aria-current={isActive ? "page" : undefined}
        tabIndex={0}
        onClick={onClose}
      >
        {label}
      </Link>
    </li>
  );
};

/**
 * Composant de navigation principale (desktop)
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
 * Composant de navigation mobile
 * @component NavBarMobile
 * @param {boolean} isOpen - État d'ouverture du menu mobile
 * @param {Function} onClose - Fonction pour fermer le menu mobile
 */
const NavBarMobile = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <div className={`${STYLES.mobileMenu} ${isOpen ? STYLES.mobileMenuOpen : STYLES.mobileMenuClosed}`}>
      {/* Bouton de fermeture */}
      <button
        className={STYLES.closeButton}
        onClick={onClose}
        aria-label="Fermer le menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <nav aria-label="Navigation mobile" className={STYLES.navMobile}>
        <ul className={STYLES.listMobile} role="menubar" aria-label="Menu mobile">
          {NAV_ITEMS.map((item) => (
            <NavItemMobile key={item.href} {...item} onClose={onClose} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

/**
 * Composant du bouton hamburger
 * @component HamburgerButton
 * @param {boolean} isOpen - État d'ouverture du menu
 * @param {Function} onToggle - Fonction pour basculer l'état du menu
 */
const HamburgerButton = ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => {
  return (
    <button
      className={STYLES.hamburger}
      onClick={onToggle}
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <span
        className={`${STYLES.hamburgerLine} ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
      />
      <span
        className={`${STYLES.hamburgerLine} ${isOpen ? "opacity-0" : "mt-1"}`}
      />
      <span
        className={`${STYLES.hamburgerLine} ${isOpen ? "-rotate-45 -translate-y-1.5" : "mt-1"}`}
      />
    </button>
  );
};

/**
 * Composant d'en-tête principal
 * @component Header
 */
export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={STYLES.header}
        role="banner"
        aria-label="En-tête du site"
      >
        <div className={STYLES.container}>
          {/* Navigation desktop - visible sur md et plus */}
          <div className="hidden md:flex md:items-center md:justify-center md:w-full">
            <NavBar />
          </div>
        </div>
      </header>
      
      {/* Bouton hamburger flottant - visible sur mobile et tablette */}
      <HamburgerButton isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
      
      {/* Menu mobile - visible sur mobile et tablette */}
      <NavBarMobile isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      
      {/* Overlay pour mobile - visible uniquement quand le menu est ouvert */}
      {isMobileMenuOpen && (
        <div 
          className={STYLES.overlay}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};
