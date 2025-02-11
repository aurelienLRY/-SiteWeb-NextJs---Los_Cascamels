"use client";

import { Card as NextUICard, CardBody, CardHeader } from "@nextui-org/react";
import { ReactNode } from "react";

interface CardProps {
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Card({ title, children, className }: CardProps) {
  return (
    <NextUICard
      className={`${className} p-5 rounded-lg border-t-2 border-primary h-full card-animation flex flex-col  relative z-10`}
    >
      {title && (
        <CardHeader className="font-title justify-center text-2xl text-primary flex-none">
          {title}
        </CardHeader>
      )}
      <CardBody className="flex-grow text-center text-white">
        {children}
      </CardBody>
    </NextUICard>
  );
}
