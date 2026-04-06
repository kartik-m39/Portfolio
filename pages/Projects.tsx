import Card from "@/components/Card";
import { Projects as ProjectsData } from "@/data/Projects";

export default function Project() {
  return (
    <div className="relative min-h-screen text-gray-900 dark:text-white flex justify-center w-full">
      <div className="min-h-screen w-full max-w-3xl px-6 md:px-12 py-32 flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-gray-900 dark:text-[#fafafa] text-3xl md:text-5xl mb-4 font-bold flex justify-center tracking-tighter text-center">
            Been cooking something in the dev kitchen👨‍🍳
          </h2>
          <p className="text-gray-600 dark:text-[#ababab] text-sm md:text-xl text-center font-medium leading-relaxed tracking-tight w-[90%] md:w-[80%] lg:w-[80%]">
            A mix of Full-Stack flavors and development magic – check out the menu below!
          </p>
        </div>

        <div className="grid grid-cols-1 px-2 md:grid-cols-2 gap-6 w-full mt-10 md:mt-8">
          {ProjectsData.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>  
    </div>
  );
}
