"use client";

import { NextUIProvider } from "@nextui-org/react";
export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <div className="min-h-screen light text-foreground bg-background">
        {children}
      </div>
    </NextUIProvider>
  );
}
