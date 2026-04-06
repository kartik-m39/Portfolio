import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description?: string;
  techStack?: string[];
  liveLink?: string;
  githubLink?: string;
  imageUrl: string;
}

interface CardProps {
  project: Project;
}

export default function Card({ project }: CardProps) {
  const { title, description, techStack, liveLink, githubLink, imageUrl } = project;

  return (
    <div
      className="bg-white dark:bg-[#0f1115]
     border border-gray-200 dark:border-[#303030] w-full rounded-lg overflow-hidden shadow-sm dark:shadow-none hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
    >
      {/* Main Project Image */}
      <div className="mb-1 bg-gray-200 dark:bg-gray-800 h-48 relative">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4 pt-2 flex flex-col flex-grow">
        {/* Project Title */}
        <h3 className="text-gray-900 dark:text-white text-lg font-bold mb-1">{title}</h3>

        {/* Project Description */}
        <p className="text-gray-600 dark:text-[#b3b3b3] text-sm mb-3 leading-snug">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {techStack?.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 dark:bg-[#262626] text-gray-700 dark:text-white border border-gray-200 dark:border-transparent px-2.5 py-1 rounded-md text-[10px] font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2 mt-auto items-end">
          { liveLink !== "" ?  <a
            href={liveLink} target="_blank"
            className="flex items-center justify-center gap-1.5 bg-gray-900 dark:bg-white hover:bg-gray-700 dark:hover:bg-[#878787] text-white dark:text-black px-3 py-1.5 rounded-md text-xs font-bold transition-colors w-full"
          >
            <ExternalLink className="w-3 h-3" />
            Live
          </a> : ""}
          
          <a
            href={githubLink} target="_blank"
            className={`flex items-center justify-center gap-1.5 bg-gray-200 dark:bg-white hover:bg-gray-300 dark:hover:bg-[#878787] text-gray-900 dark:text-black px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${liveLink !== "" ? "w-full" : "w-1/2"}`}
          >
            <Github className="w-3 h-3" />
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
