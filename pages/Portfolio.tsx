"use client";

import DashboardGrid from "@/components/BentoGrid";
import Card from "@/components/Card";
import { LensDemoThird } from "@/components/Magnifyinglens";
import TechMarquee from "@/components/Marquee";
import { Projects } from "@/data/Projects";
import { AlarmClock } from "lucide-react";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [time, setTime] = useState(
    new Date()
      .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      .replace("AM", "am")
      .replace("PM", "pm")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date()
          .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          .replace("AM", "am")
          .replace("PM", "pm")
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const featuredProjects = Projects.slice(2, 4);

  return (
    <div className="relative min-h-screen text-gray-900 dark:text-white flex justify-center w-full">
      <div className="min-h-screen w-full max-w-3xl px-6 py-10 md:px-12 md:py-32 flex flex-col justify-between">
        <div className="flex flex-col-reverse md:flex-row justify-between w-full items-center md:items-start  md:gap-0">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hi, I&apos;m Kartik
            </h1>

            <h2 className="text-xl mt-5 font-semibold">dev | kxm39</h2>

            <ul className="flex flex-wrap justify-center md:justify-start gap-1 mt-2">
              <li className="bg-gray-200 dark:bg-[#2e2e2e] text-xs px-2 py-1 rounded-md font-bold flex items-center gap-1">
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
                      className="fill-black dark:fill-white"
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
              <li className="bg-gray-200 dark:bg-[#2e2e2e] text-xs px-3 py-1 rounded-md font-bold flex items-center gap-1">
                <AlarmClock className="w-4 h-4" />
                {time} (IST)
              </li>
              <li className="bg-gray-200 dark:bg-[#2e2e2e] text-xs px-3 py-1 rounded-md font-bold flex items-center cursor-pointer duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-[#434343]">
                <a href="https://drive.google.com/file/d/1SIIuU9ue0j-QPoLd9uoqmRoUh5CnAShd/view?usp=sharing" target="_blank">
                  ✨Resume
                </a>
              </li>
            </ul>
          </div>

          <div className="w-40 h-40 md:w-30 md:h-30">
            <LensDemoThird />
          </div>
        </div>

        <div className="mt-12 md:mt-10">
          <h2 className="font-bold text-xl mb-2 text-center md:text-left">About</h2>
          <p className="text-gray-600 dark:text-[#ababab] font-medium md:leading-relaxed tracking-tight text-justify md:text-left">
            I build things for the internet, sometimes
            they even work on the first try.
            Always experimenting with new tech,
            breaking stuff (and fixing it better), and pushing boundaries to
            keep the game interesting. Web, Dbs, real-time magic—you name it,
            I’m on it. <br/><br/>When I’m not knee-deep in code, I’m probably shooting
            hoops, walking through nature, vibing to music, or doom-scrolling
            Instagram for the next big meme drop. Big on learning, big on
            building, and always chasing that next crazy idea that just might
            work. <br/><br/>But I’m not just about semicolons and Git commits—I’m here to
            craft products that don’t just work, they wow..
          </p>
        </div>

        <div className="mt-12 md:mt-10">
          <TechMarquee />
        </div>

        <div className="mt-12 md:mt-10">
          <DashboardGrid />
        </div>

        <div className="mb-5 mt-16">
          <h2 className="text-gray-900 dark:text-[#fafafa] text-4xl md:text-5xl mb-4 font-bold flex justify-center text-center tracking-tighter">
            Fresh stuff from my Desk
          </h2>
          <p className="text-gray-600 dark:text-[#ababab] font-medium md:leading-relaxed tracking-tight text-lg md:text-[20px] text-center w-full md:max-w-[80%] mx-auto">
            I’ve been creating some awesome stuff, from sleek apps to cool projects and more. Here’s a glimpse of what I’ve been working on—check out the full{" "}
            <a href={"/project"} className="text-blue-600 dark:text-[#3b82f5] hover:underline font-semibold">
              projects page
            </a>{" "}
            for more!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {featuredProjects.map((project, index) => (
              <Card key={index} project={project} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center md:text-left">
          <h2 className="text-gray-900 dark:text-[#fafafa] text-4xl md:text-5xl mb-6 font-bold tracking-tighter">
            Say Hello👋
          </h2>
          <p className="text-gray-600 dark:text-[#ababab] font-medium md:leading-relaxed tracking-tight">
            Let’s build something legendary. My DMs on{" "}
            <a
              href={"https://x.com/kartikm39"} target="_blank"
              className="text-gray-900 dark:text-white font-bold hover:cursor-pointer hover:underline"
            >
              X/Twitter
            </a>{" "}
            and{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=manchandakartik11@gmail.com&su=Inquiry&body=Hi%20Kartik,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you..."
              target="_blank"
              className="text-gray-900 dark:text-white font-bold hover:cursor-pointer hover:underline"
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
