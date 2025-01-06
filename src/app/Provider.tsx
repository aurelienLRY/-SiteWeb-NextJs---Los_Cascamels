"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" storageKey="theme">
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
}
