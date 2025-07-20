// app/page.tsx  (or wherever)
import AvatarViewer from "@/components/AvatarModel";
import { Allan } from "next/font/google";
import Marquee from "react-fast-marquee";
import { Typewriter } from "react-simple-typewriter";

const allan = Allan({ weight: ["400", "700"], subsets: ["latin"] });

export default function Splash() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-transparent px-6 py-8 lg:px-12">
      {/* ───── HERO TEXT ───── */}
       {/* Marquee Background - Behind everything */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-full">
          {/* Multiple marquee rows for better coverage */}
          <div className="space-y-12">
            <Marquee 
              gradient={false} 
              speed={100} 
              className="opacity-10"
            >
              <span className={`text-8xl font-bold text-white mr-20 ${allan.className}`}>
                I write code that helps • build Products that connect • A dev passionate about crafting • bold and memorable projects •
              </span>
            </Marquee>
            
            <Marquee 
              gradient={false} 
              speed={120} 
              direction="right" 
              className="opacity-15"
            >
              <span className={`text-6xl font-bold text-white mr-20 ${allan.className}`}>
                Frontend Developer • Full Stack Engineer • React Specialist • TypeScript Expert •
              </span>
            </Marquee>
            
            <Marquee 
              gradient={false} 
              speed={140} 
              className="opacity-8"
            >
              <span className={`text-9xl font-bold text-white mr-20 ${allan.className}`}>
                KARTIK MANCHANDA • DEVELOPER • CREATOR • INNOVATOR •
              </span>
            </Marquee>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center text-center">
        <h1
          className="
            font-anton
            font-extrabold uppercase tracking-[-0.02em]
            text-transparent
            whitespace-nowrap
            bg-[linear-gradient(180deg,#4a4a4a_0%,#a8a8a8_45%,#f8f8f8_100%)]
            bg-clip-text
            text-[clamp(2.5rem,13vw,12rem)]
            text-center
            w-full
            overflow-hidden
            leading-none
            z-0
          "
        >
          Hi, I’m Kartik
        </h1>
      </section>

      <div className="relative flex mt-0">
        <p
          className={`mt-20 pr-15  ml-7 w-[400px] text-3xl font-medium ${allan.className} font-allan leading-relaxed text-white/70 sm:max-w-none whitespace-normal break-words allan-regular`}
        >
          <span className="block overflow-hidden break-words whitespace-normal">
            <Typewriter
              words={[
                "I write code that helps, build Products that connect. A dev passionate about crafting bold and memorable projects",
              ]}
              // cursor
              typeSpeed={20}
              deleteSpeed={0}
              // delaySpeed={1000}
            />
          </span>
        </p>

        

        <div className="flex justify-center -mt-20 z-20">
          <AvatarViewer />
        </div>
      </div>

      {/* subtle vignette / glow */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-radial from-transparent via-black/70 to-black" />
    </main>
  );
}
