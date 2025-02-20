"use client";
import { Section } from "@/components";
import { Button } from "@nextui-org/react";

import Link from "next/link";

export default function NotFound() {
  return (
    <Section className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-primary">
          Oups, cette page n&apos;existe pas !
        </h1>
        <p>
          Veuillez vérifier l&apos;URL ou retourner à la page d&apos;accueil.
        </p>
        <Link href="/">
          <Button color="primary">Retour à la page d&apos;accueil</Button>
        </Link>
      </div>
    </Section>
  );
}
