"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/* components */
import { Clouds } from "@/components";

interface ISectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  showTopClouds?: boolean;
  showBottomClouds?: boolean;
  cloudsColor?: string;
}

interface IParallaxSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  backgroundImage: string;
  showTopClouds?: boolean;
  showBottomClouds?: boolean;
  cloudsColor?: string;
  splashTop?: boolean;
  splashBottom?: boolean;
}

export const Section = ({
  children,
  className = "bg-white",
  showTopClouds = false,
  showBottomClouds = false,
  cloudsColor = "text-white",
  ...props
}: ISectionProps) => {
  return (
    <section className={`relative ${className}`} {...props}>
      {showTopClouds && (
        <div className="absolute -top-1 left-0 w-full overflow-hidden z-20">
          <Clouds className={`w-full ${cloudsColor}`} />
        </div>
      )}
      {children}
      {showBottomClouds && (
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden z-20">
          <Clouds className={`w-full rotate-180 ${cloudsColor}`} />
        </div>
      )}
    </section>
  );
};

export const ParallaxSection = ({
  children,
  className = "",
  backgroundImage,
  ...sectionProps
}: IParallaxSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    const content = contentRef.current;
    const container = containerRef.current;

    if (!background || !content || !container) return;

    gsap.fromTo(
      background,
      { y: 150 },
      {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <Section {...sectionProps} className={`${className} overflow-hidden`}>
        <div
          ref={backgroundRef}
          className="absolute inset-0 w-full h-[150%] -top-[25%] bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            willChange: "transform",
          }}
        />
        <div ref={contentRef} className="relative h-full">
          {children}
        </div>
      </Section>
    </div>
  );
};
