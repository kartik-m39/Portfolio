import React from "react";
import { Github} from "lucide-react";
import Link from "next/link";

const DashboardGrid = () => {

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto my-5">
        <div className="grid grid-cols-12 gap-3">
          {/* Github Cat */}
          <div
            className="col-span-12 md:col-span-6 bg-[url(/GithubCat2.jpg)] rounded-lg p-4 border border-gray-200 dark:border-gray-700 h-40 hover:scale-[0.98] hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer group relative overflow-hidden shadow-sm dark:shadow-none"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => handleLinkClick('https://github.com/kartik-m39')}
          >
            {/* Added overlay to ensure text is readable on light/dark backgrounds */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="relative flex items-center justify-baseline gap-2 mb-4 mt-16 z-10">
              <Github className="w-8 h-8 text-white drop-shadow-md" />
              <div>
                <h2 className="text-white font-bold tracking-tighter drop-shadow-md">
                  GitHub Profile
                </h2>
                <p className="text-gray-200 text-sm tracking-tighter drop-shadow-md">
                  @kartik-m39
                </p>
              </div>
            </div>
          </div>

            {/* github heatmap */}
          <div
            className="col-span-12 md:col-span-6 bg-[url(/Heatmap.png)] rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:scale-[0.98] hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer group shadow-sm dark:shadow-none min-h-[160px]"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "left 30%", 
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => handleLinkClick('https://github.com/kartik-m39')}
          >
            <div className="grid grid-cols-10 gap-1 mb-4">
            </div>
            <div className="flex gap-6 text-sm"></div>
          </div>

          {/* Portfolio */}
          <Link href='/about'
            className="col-span-12 md:col-span-3 bg-[url(/DarkMan.jpg)] rounded-lg p-6 border border-gray-200 dark:border-gray-700 backdrop-blur-2xl hover:scale-[0.98] hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer group shadow-sm dark:shadow-none min-h-[160px]"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="h-full flex flex-col justify-end">
              <div className="flex items-center gap-2 text-white drop-shadow-md bg-black/40 w-max px-2 py-1 rounded-md">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">↗</span>
                </div>
                <span className="text-sm font-semibold">Portfolio</span>
              </div>
            </div>
          </Link>

          <div className="col-span-12 md:col-span-6">
            <div className="grid grid-rows-2 gap-3 h-full">
              {/* X */}
              <div className="grid grid-cols-2 gap-3 min-h-[80px]">
                <div
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg bg-[url(/xLogo.jpg)] border border-gray-200 dark:border-gray-700 hover:scale-[0.98] hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer group shadow-sm dark:shadow-none"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center 50%",
                    backgroundRepeat: "no-repeat",
                  }}
                  onClick={() => handleLinkClick('https://x.com/kartikm39')}
                >
                </div>

                  {/* Leetcode */}
                <div
                  className="bg-[url(/Leetcode.jpg)] rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:scale-[0.98] hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer group shadow-sm dark:shadow-none"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center 30%",
                    backgroundRepeat: "no-repeat",
                  }}
                  onClick={() => handleLinkClick('https://leetcode.com/u/Kartik_Manchanda/')}
                >
                </div>
              </div>

              {/* Linkedin */}
              <div className="bg-[url(/linkedin.jpg)] rounded-lg p-3 border border-gray-200 dark:border-gray-700 hover:scale-[0.98] hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer group min-h-[80px] flex items-end shadow-sm dark:shadow-none"  style={{
              backgroundSize: "cover",
              backgroundPosition: "center 50%",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => handleLinkClick('https://www.linkedin.com/in/kartik-manchanda-538052263/')}
            >
                <div className="bg-black/50 px-2 py-1 rounded">
                  <span className="text-white text-xs font-medium drop-shadow-md">
                    (serious stuff 😤)
                  </span>
                </div>
              </div>
            </div>
          </div>

            {/* meme */}
          <div
            className="col-span-12 md:col-span-3 bg-[url(/fuck.jpg)] rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:scale-[0.98] hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer group shadow-sm dark:shadow-none min-h-[160px] flex flex-col"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex items-baseline justify-end">
              <div className="w-8 h-8 text-red-500 animate-pulse bg-white/80 rounded-full p-1 shadow-md">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;
