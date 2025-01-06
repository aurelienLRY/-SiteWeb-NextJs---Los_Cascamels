"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { SunIcon, MoonIcon } from "@/components";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" aria-hidden="true" />;
  }

  return (
    <Button
      isIconOnly
      variant="ghost"
      className=" bg-primary/10 hover:bg-primary/20 w-10 h-10"
      onPress={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Changer le thème"
    >
      <div className="relative w-5 h-5">
        {resolvedTheme === "dark" ? (
          <SunIcon className="text-primary w-5 h-5" />
        ) : (
          <MoonIcon className="text-primary w-5 h-5" />
        )}
      </div>
    </Button>
  );
}
