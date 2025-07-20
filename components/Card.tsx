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
      className="bg-card
     border border-[#303030] w-full rounded-lg overflow-hidden"
    >
      {/* Main Project Image */}
      <div className="mb-1 bg-gray-800  h-40 relative">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="p-2 pt-0">
        {/* Project Title */}
        <h3 className="text-white text-lg font-semibold mb-1">{title}</h3>

        {/* Project Description */}
        <p className="text-[#b3b3b3] text-xs mb-2 leading-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-2">
          {techStack?.map((tech, index) => (
            <span
              key={index}
              className="bg-[#262626] text-white px-2 py-1 rounded-md text-[10px] font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-1 mt-2">
          { liveLink !== "" ?  <a
            href={liveLink}
            className="flex items-center gap-2 bg-white hover:bg-[#878787] text-black px-2 py-1 rounded-md text-[10px] font-medium transition-colors"
          >
            <ExternalLink className="w-2 h-2" />
            Live
          </a> : ""}
          
          <a
            href={githubLink}
            className="flex items-center gap-2 bg-white hover:bg-[#878787] text-black px-2 py-1 rounded-md text-[10px] font-medium transition-colors"
          >
            <Github className="w-2 h-2" />
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
