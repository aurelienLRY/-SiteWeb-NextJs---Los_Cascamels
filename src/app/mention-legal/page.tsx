import { Section } from "@/components";

export default function MentionsLegales() {
  return (
    <Section className="min-h-screen bg-bleuRoyale py-20">
      <div className="container mx-auto px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-title text-center text-primary mb-12">
          Mentions Légales
        </h1>

        <div className="space-y-8 max-w-3xl mx-auto">
          <p className="text-lg">
            Conformément à l&apos;article 6 de la loi n°2004-575 du 21 juin 2004
            pour la confiance dans l&apos;économie numérique, il est précisé aux
            utilisateurs du site de l&apos;école associative Los Cascamèls les
            informations suivantes :
          </p>

          <section>
            <h2 className="text-2xl font-subtitle text-primary mb-4">
              Éditeur du site
            </h2>
            <p className="space-y-2">
              <strong>Nom de l&apos;association :</strong> Los Cascamèls
              <br />
              <strong>Forme juridique :</strong> Association loi 1901
              <br />
              <strong>Adresse du siège social :</strong> [Adresse complète]
              <br />
              <strong>Adresse de courrier électronique :</strong> [Adresse
              e-mail]
              <br />
              <strong>Numéro de téléphone :</strong> [Numéro de téléphone]
              <br />
              <strong>Numéro SIRET :</strong> [Numéro SIRET]
              <br />
              <strong>Code APE :</strong> [Code APE]
              <br />
              <strong>Directeur de la publication :</strong> [Nom du président
              de l&apos;association]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-subtitle text-primary mb-4">
              Hébergeur du site
            </h2>
            <p className="space-y-2">
              <strong>Nom de l&apos;hébergeur :</strong> [Nom de
              l&apos;hébergeur]
              <br />
              <strong>Adresse :</strong> [Adresse complète de l&apos;hébergeur]
              <br />
              <strong>Numéro de téléphone :</strong> [Numéro de téléphone de
              l&apos;hébergeur]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-subtitle text-primary mb-4">
              Propriété intellectuelle
            </h2>
            <p className="text-justify">
              Les contenus présents sur ce site (textes, images, graphismes,
              logo, icônes, etc.) sont la propriété exclusive de Los Cascamèls
              ou de tiers ayant autorisé leur utilisation. Toute reproduction,
              représentation, modification, publication ou adaptation des
              éléments du site, quel que soit le moyen ou le procédé utilisé,
              est interdite, sauf autorisation écrite préalable de Los
              Cascamèls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-subtitle text-primary mb-4">
              Protection des données personnelles
            </h2>
            <p className="text-justify">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), Los Cascamèls s&apos;engage à ce que la collecte et le
              traitement des données personnelles soient effectués de manière
              licite, loyale et transparente. Les informations recueillies sont
              destinées uniquement à l&apos;usage de l&apos;association et ne
              seront en aucun cas cédées ou vendues à des tiers sans
              consentement préalable.
            </p>
            <p className="mt-4">
              Pour exercer vos droits d&apos;accès, de rectification,
              d&apos;effacement et de portabilité de vos données, ainsi que
              votre droit de limitation et d&apos;opposition au traitement,
              contactez :<br />
              <strong>Email :</strong> [Adresse e-mail]
              <br />
              <strong>Adresse postale :</strong> [Adresse complète]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-subtitle text-primary mb-4">
              Cookies
            </h2>
            <p className="text-justify">
              Le site de Los Cascamèls utilise des cookies pour améliorer
              l&apos;expérience utilisateur et réaliser des statistiques de
              visites. Lors de votre première visite, un bandeau vous informe de
              la présence de ces cookies et vous invite à les accepter ou à les
              refuser. Vous pouvez à tout moment configurer votre navigateur
              pour gérer vos préférences en matière de cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-subtitle text-primary mb-4">
              Liens hypertextes
            </h2>
            <p className="text-justify">
              Le site de Los Cascamèls peut contenir des liens vers
              d&apos;autres sites externes. Los Cascamèls n&apos;exerce aucun
              contrôle sur ces sites et décline toute responsabilité quant à
              leur contenu ou leurs pratiques en matière de protection des
              données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-subtitle text-primary mb-4">
              Responsabilité
            </h2>
            <p className="text-justify">
              Los Cascamèls met tout en œuvre pour assurer l&apos;exactitude et
              la mise à jour des informations diffusées sur son site. Toutefois,
              l&apos;association ne peut garantir l&apos;exactitude, la
              précision ou l&apos;exhaustivité des informations mises à
              disposition sur le site et décline toute responsabilité pour toute
              imprécision, inexactitude ou omission.
            </p>
            <p className="mt-4">
              En cas de litige, le droit applicable sera le droit français et
              les tribunaux compétents seront ceux du ressort de la Cour
              d&apos;appel de [Ville].
            </p>
          </section>

          <section className="border-t border-primary pt-8">
            <p className="text-sm">
              Ces mentions légales sont susceptibles d&apos;être modifiées à
              tout moment ; nous vous invitons donc à les consulter
              régulièrement.
              <br />
              <strong>Dernière mise à jour :</strong> [Date]
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
