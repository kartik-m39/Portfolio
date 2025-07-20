import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";
import Portfolio from "@/pages/Portfolio";

export function SpotlightPreview() {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
        {/* Grid background pattern */}
      {/* <div
        className={cn(
          "pointer-events-none fixed inset-0 [background-size:40px_40px] select-none opacity-40",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      /> */}

      <Spotlight
        className="fixed -top-40 left-0 md:-top-20 md:left-60 z-[80]"
        fill="white"
      />
      <div className="relative z-20 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <Portfolio/>
      </div>
    </div>
  );
}
