import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
  FaEnvelope,
} from "react-icons/fa";

/**
 * Interface pour les liens sociaux d'un membre de l'équipe
 */
interface SocialLinks {
  facebook?: string;
  twitter?: string;
  youtube?: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
}

/**
 * Interface pour les propriétés du composant PedagoTeamCard
 */
interface PedagoTeamCardProps {
  /** Nom du membre de l'équipe */
  name: string;
  /** Rôle/fonction du membre */
  role: string;
  /** URL de la photo du membre */
  urlImage: string;
  /** Couleur de fond de la carte (classe Tailwind) */
  color?: string;
  /** Description du membre */
  description?: string;
  /** Liens vers les réseaux sociaux */
  socialLinks?: SocialLinks;
}

const SOCIAL_ICONS: Record<keyof Omit<SocialLinks, "email">, IconType> = {
  facebook: FaFacebookSquare,
  twitter: FaTwitterSquare,
  youtube: FaYoutubeSquare,
  linkedin: FaLinkedin,
  instagram: FaInstagramSquare,
};

const CSS_LINK = "hover:opacity-80";

/**
 * Composant de carte pour afficher un membre de l'équipe pédagogique
 * avec sa photo, ses informations et ses liens sociaux
 */
export const PedagoTeamCard = ({
  name,
  role,
  urlImage,
  color = "orange-300",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  socialLinks,
}: PedagoTeamCardProps) => {
  const renderSocialIcon = (
    platform: keyof typeof SOCIAL_ICONS,
    url: string
  ) => {
    const Icon = SOCIAL_ICONS[platform];
    return (
      <Link
        key={`social-${platform}-${name}`}
        target="_blank"
        href={url}
        className={CSS_LINK}
        aria-label={`Lien ${platform} de ${name}`}
      >
        <Icon className="text-white h-8 w-8" />
      </Link>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-[800px] gap-2">
      <div className="rounded-2xl  overflow-hidden  h-full">
        <Image
          src={urlImage}
          alt={`Photo de ${name}`}
          width={300}
          height={300}
          className="object-cover aspect-square rounded-2xl"
          loading="lazy"
        />
      </div>

      <div
        className={`bg-${color} rounded-2xl p-6 flex flex-col justify-between w-fit relative`}
      >
        <svg
          className={`absolute  lg:-left-4 -top-6 lg:top-6 -rotate-90 lg:rotate-180 text-${color}`}
          width="16"
          height="45"
          viewBox="0 0 16 45"
          aria-hidden="true"
        >
          <path d="M16 22.5L0 0L0 45L16 22.5Z" fill="currentColor" />
        </svg>

        <div className="min-w-[250px]">
          <h2 className="text-white text-2xl font-bold mb-1">{name}</h2>
          <h3 className="text-white/80 text-xl mb-4">{role}</h3>
          <hr className="border-0 border-t-2 border-dotted border-primary my-4 max-w-[150px]" />
          <p className="text-white">{description}</p>
        </div>

        {socialLinks && (
          <div className="flex gap-4 mt-4">
            {Object.entries(SOCIAL_ICONS).map(([platform]) => {
              const url = socialLinks[platform as keyof typeof SOCIAL_ICONS];
              return (
                url &&
                renderSocialIcon(platform as keyof typeof SOCIAL_ICONS, url)
              );
            })}
            {socialLinks.email && (
              <Link
                href={`mailto:${socialLinks.email}`}
                className={CSS_LINK}
                aria-label={`Email de ${name}`}
              >
                <FaEnvelope className="text-white h-8 w-8" />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
