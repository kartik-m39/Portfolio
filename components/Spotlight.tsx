import React from "react";
// import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";
import Portfolio from "@/pages/Portfolio";
import { FloatingNavDemo } from "./FloatingNavDemo";

export function SpotlightPreview() {
  return (
    <>
    <FloatingNavDemo/>
    <div className="relative flex min-h-screen w-full overflow-hidden bg-gray-50 dark:bg-black/[0.96] antialiased md:items-center md:justify-center transition-colors duration-300">
      <Spotlight
        className="fixed -top-40 left-0 md:-top-20 md:left-60 z-[80] opacity-30 dark:opacity-100"
        fill="currentColor"
      />
      <div className="relative z-20 mx-auto w-full pt-20 md:pt-0">
        <Portfolio/>
      </div>
    </div>
    </>
  );
}
