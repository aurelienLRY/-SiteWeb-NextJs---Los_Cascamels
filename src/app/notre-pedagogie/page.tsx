import React from "react";
import {
  HeroSectionPedagogyPage,
  LearningLinguisticSection,
  ActivePedagogySection,
  EducationalMaterials,
  BenefitsSection,
} from "@/components/section/pedagogyPage";

export default function NotrePedagogie() {
  return (
    <React.Fragment>
      <HeroSectionPedagogyPage />
      <LearningLinguisticSection />
      <ActivePedagogySection />
      <EducationalMaterials />
      <BenefitsSection />
    </React.Fragment>
  );
}
