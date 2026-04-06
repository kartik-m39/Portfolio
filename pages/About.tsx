export default function About() {
  return (
    <div>
      <div className="relative min-h-screen text-gray-900 dark:text-white flex justify-center w-full">
        <div className="min-h-screen w-full max-w-2xl px-6 md:px-12 py-32 flex flex-col items-start">
          <div className="flex flex-col">
            <h2 className="text-gray-900 dark:text-[#fafafa] text-4xl md:text-5xl mb-4 font-bold tracking-tighter">
              Hey, I&apos;m Kartik Manchanda
            </h2>
            <p className="text-gray-600 dark:text-[#ababab] text-lg md:text-xl font-medium leading-6 tracking-tight">
              Breaking limits, building apps!⚡
            </p>
          </div>

          <div className="mt-10 md:mt-10 h-64 md:h-80 w-full">
            <div
              className="bg-[url(/About.jpg)] w-full h-full bg-cover rounded-lg p-4 relative shadow-lg"
              style={{
                backgroundPosition: "center 30%",
              }}
            ></div>
          </div>

          <div className="text-gray-900 dark:text-[#fafafa] text-xl mb-4 font-semibold tracking-tighter text-center mt-12">
            Grinding & hustling
          </div>

          <div className="text-gray-900 dark:text-[#fafafa] text-xl mb-4 font-semibold tracking-tighter text-center">
            Feels/ Relatables
          </div>
        </div>
      </div>
    </div>
  );
}
