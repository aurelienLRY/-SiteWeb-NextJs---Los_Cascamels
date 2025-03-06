import { Section } from "@/components";

export const HeroSection = ({
  children,
  className,
  props,
}: {
  children: React.ReactNode;
  className?: string;
  props?: {
    showBottomClouds?: boolean;
    showTopClouds?: boolean;
    cloudsColor?: string;
  };
}) => {
  return (
    <Section
      className={`min-h-[900px] md:min-h-[1000px] flex flex-col-reverse lg:flex-row justify-center items-center relative bg-lightBlue bg-[url('/img/sky1.webp')] bg-cover bg-center ${className}`}
      showBottomClouds={props?.showBottomClouds}
      showTopClouds={props?.showTopClouds}
      cloudsColor={props?.cloudsColor}
    >
      {children}
    </Section>
  );
};
