import React from "react";
import { Github} from "lucide-react";
import Link from "next/link";

const DashboardGrid = () => {

  // open links in new tabs 
  // Noopener =>  Prevents the new page from accessing the original page's window.opener property.
  // Noreferrer => Prevents the new page from knowing which site referred them.
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto my-5">
        <div className="grid grid-cols-12 gap-3">
          {/* Github Cat */}
          <div
            className="col-span-6 bg-[url(/GithubCat2.jpg)] rounded-lg p-4 border border-gray-700 h-40 hover:scale-90 hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer group"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center 30%", // This moves the focus point up
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => handleLinkClick('https://github.com/kartik-m39')}
          >
            <div className="flex items-center justify-baseline gap-2 mb-4 mt-16">
              <Github className="w-8 h-8 text-white" />
              <div>
                <h2 className="text-white font-bold tracking-tighter">
                  GitHub Profile
                </h2>
                <p className="text-gray-400 text-sm tracking-tighter">
                  @kartik-m39
                </p>
              </div>
            </div>
          </div>

            {/* github heatmap */}
          <div
            className="col-span-6 bg-[url(/Heatmap.png)] rounded-lg p-4 border border-gray-700 hover:scale-90 hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer group "
            style={{
              backgroundSize: "cover",
              backgroundPosition: "left 30%", // This moves the focus point up
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
            className="col-span-3 bg-[url(/DarkMan.jpg)] rounded-lg p-6 border border-gray-700 backdrop-blur-2xl hover:scale-90 hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer group"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center 30%", // This moves the focus point up
              backgroundRepeat: "no-repeat",
            }}
          >
            
            <div className="h-full flex flex-col">
              <div className="flex-1 mb-4"></div>
              <div className="flex items-center gap-2 text-white">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">↗</span>
                </div>
                <span className="text-sm">Portfolio</span>
              </div>
            </div>
          </Link>

          <div className="col-span-6">
            <div className="grid grid-rows-2 gap-3 h-full">
              {/* X */}
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="bg-gray-800 rounded-lg bg-[url(/xLogo.jpg)] hover:scale-90 hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer group"
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
                  className="bg-[url(/Leetcode.jpg)] rounded-lg p-4 border border-gray-700 hover:scale-90 hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer group"
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
              <div className="bg-[url(/linkedin.jpg)] rounded-lg p-1 border border-gray-700 hover:scale-90 hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer group h-22"  style={{
              backgroundSize: "cover",
              backgroundPosition: "center 50%",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => handleLinkClick('https://www.linkedin.com/in/kartik-manchanda-538052263/')}
            >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-white text-xs font-medium">
                    (serious stuff 😤)
                  </span>
                </div>
              </div>
            </div>
          </div>

            {/* meme */}
          <div
            className="col-span-3 bg-[url(/fuck.jpg)] rounded-lg p-6 border border-gray-700 hover:scale-90 hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer group"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex items-baseline justify-end">
              <div className="w-8 h-8 text-red-500 animate-pulse">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </div>
            </div>
            <div className="text-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;
