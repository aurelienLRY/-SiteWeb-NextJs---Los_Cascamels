import { Section } from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";

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
      className={`min-h-[900px] md:min-h-[1000px] flex flex-col-reverse lg:flex-row justify-center items-center relative bg-lightBlue bg-[url('/img/sky1.2.webp')] bg-cover bg-center overflow-hidden ${className}`}
      showBottomClouds={props?.showBottomClouds}
      showTopClouds={props?.showTopClouds}
      cloudsColor={props?.cloudsColor}
    >
            <motion.div
        initial={{ y: 1000, x: 100 }}
        animate={{ y: 200, x: 100 }}
        transition={{ duration: 8, ease: "easeInOut" }}
        className="absolute top-0 left-7  hidden md:block  w-48 overflow-hidden"
      >
        <Image
          src="/img/test.png"
          alt="Mongolfière en train de voler"
          width={800}
          height={400}
          className="object-cover "
          loading="lazy"
        />
      </motion.div>
      {children}
    </Section>
  );
};
