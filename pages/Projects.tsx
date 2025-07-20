import Card from "@/components/Card";
import { Projects } from "@/data/Projects";

// interface CardProps {
//   title: string;
//   description?: string;
//   techStack?: string[];
//   liveLink?: string;
//   githubLink?: string;
//   imageUrl: string;
// }

export default function Project() {
  // const projectsArray: CardProps[] = Projects;

  return (
    <div className="relative bg-[#08090a] min-h-screen text-white flex justify-center">
      <div className="min-h-screen w-[50%] px-12 py-32 flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[#fafafa] text-5xl mb-4 font-bold flex justify-center tracking-tighter text-center">
            Been cooking something in the dev kitchen👨‍🍳
          </h2>
          <p className="text-[#ababab] text-xl text-center font-normal leading-6  -tracking-tight ">
            A mix of Full-Stack flavors and development magic
          </p>
          <p className="text-[#ababab] text-xl text-center font-normal leading-6  -tracking-tight w-[50%]">
            {" "}
            – check out the menu below!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto px-5 mt-10">
          {Projects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>  
    </div>
  );
}
