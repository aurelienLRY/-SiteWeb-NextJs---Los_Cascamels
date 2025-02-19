import React from "react";

import {
  HeroSectionPedagogyPage,
  LearningLinguisticSection,
  ActivePedagogySection,
  EducationalMaterials,
  BenefitsSection,
} from "@/components/section/pedagogyPage";

export { metadata } from "./metadata";

export default function NotrePedagogie() {
  return (
    <React.Fragment>
      <HeroSectionPedagogyPage />
      <ActivePedagogySection />
      <LearningLinguisticSection />
      <EducationalMaterials />
      <BenefitsSection />
    </React.Fragment>
  );
}
