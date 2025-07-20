"use client";

import DashboardGrid from "@/components/BentoGrid";
import Card from "@/components/Card";
import { LensDemoThird } from "@/components/Magnifyinglens";
import TechMarquee from "@/components/Marquee";
import { AlarmClock } from "lucide-react";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [time, setTime] = useState(
    new Date()
      .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      .replace("AM", "am")
      .replace("PM", "pm")
  );

  // updating the time after evrey second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date()
          .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          .replace("AM", "am")
          .replace("PM", "pm")
      );
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen text-white flex justify-center">
      <div className="min-h-screen w-[60%] px-12 py-32 flex flex-col justify-between">
        <div className="flex justify-between w-full ">
          <div>
            <h1 className="text-5xl font-bold tracking-tight">
              Hi, I&apos;m Kartik
            </h1>

            <h2 className="text-xl mt-5 font-semibold">dev | kxm39</h2>

            <ul className="flex gap-1 mt-2">
              <li className="bg-[#2e2e2e] text-xs px-2 py-1 rounded-md font-bold flex gap-1">
                <svg
                  version="1.1"
                  width="15"
                  height="15"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="translate(1.41 1.41) scale(2.81 2.81)">
                    <line
                      x1="0"
                      y1="-23.96"
                      x2="0"
                      y2="23.96"
                      stroke="none"
                      strokeWidth="1"
                      fill="rgb(0,0,0)"
                    />
                    <path
                      d="M 45 90 c -0.558 0 -1.011 -0.452 -1.011 -1.011 V 41.062 c 0 -0.558 0.453 -1.011 1.011 -1.011 s 1.011 0.453 1.011 1.011 v 47.927 C 46.011 89.548 45.558 90 45 90 z"
                      fill="#66676B"
                      strokeLinecap="round"
                    />
                    <circle cx="45.001" cy="20.531" r="20.531" fill="#FF0000" />
                    <circle cx="52.076" cy="13.456" r="5.056" fill="#ed3e75" />
                  </g>
                </svg>
                Chandigarh, India
              </li>
              <li className="bg-[#2e2e2e] text-xs px-3 py-1 rounded-md font-bold flex gap-1">
                <AlarmClock className="w-4 h-4" />
                {time} (IST)
              </li>
              <li className="bg-[#2e2e2e] text-xs px-3 py-1 rounded-md font-bold">
                ✨Resume
              </li>
            </ul>
          </div>

          <div className="w-30 h-30 ">
            <LensDemoThird />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-bold text text-xl">About</h2>
          <p className="text-[#ababab] font-semibold leading-7 text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            delectus minus repellendus veniam doloremque tempore fugiat
            assumenda provident unde, voluptatibus deserunt id officiis optio
            quidem. Neque et placeat sequi minima!
          </p>
        </div>

        <div className="mt-8">
          <TechMarquee />
        </div>

        <div>
          <DashboardGrid />
        </div>

        <div className="mb-5 mt-10">
          <h2 className="text-[#fafafa] text-5xl mb-3 font-bold flex justify-center text-justify tracking-tighter">
            Fresh stuff from my Desk
          </h2>
          <p className="text-[#ababab] font-normal leading-7 -tracking-tight text-[20px] text-center max-w-full ">
            I’ve been creating some awesome stuff, from sleek apps to cool
          </p>
          <p className="text-[#ababab] font-normal leading-7 -tracking-tight text-[20px] text-center max-w-[80%] mx-auto">
            projects and more. Here’s a glimpse of what I’ve been{" "}
          </p>
          <p className="text-[#ababab] font-normal leading-7 -tracking-tight text-[20px] text-center max-w-[65%] mx-auto">
            working on—check out the full{" "}
            <a href={"/project"} className="text-[#3b82f5] hover:underline">
              projects page
            </a>{" "}
            for more!
          </p>

          <div className="flex flex-wrap gap-2 mt-10">
            {/* <Card />
            <Card />
            <Card /> */}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-[#fafafa] text-5xl mb-4 font-bold flex justify-center text-justify tracking-tighter">
            Say Hello👋
          </h2>
          <p className="text-[#ababab] font-normal leading-6 text-justify -tracking-tight">
            Let’s build something legendary.My DMs on{" "}
            <a
              href={"https://x.com/kartikm39"}
              className="text-white hover:cursor-pointer hover:underline"
            >
              X/Twitter
            </a>{" "}
            and{" "}
            <a
              href={"mailto:manchandakartik11@gmail.com"}
              className="text-white hover:cursor-pointer hover:underline"
            >
              Mails
            </a>{" "}
            are always open. Got an idea? A spark? A vision that won’t leave
            your head? Let’s bring it to life together. Connect. Create. Shake
            things up.
          </p>
        </div>
      </div>
    </div>
  );
}
