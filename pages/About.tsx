export default function About() {
  return (
    <div>
      <div className="relative bg-[#08090a] min-h-screen text-white flex justify-center">
        <div className="min-h-screen w-[45%] px-12 py-32 flex flex-col">
          <div className="flex flex-col ">
            <h2 className="text-[#fafafa] text-5xl mb-4 font-bold flex tracking-tighter text-center">
              Hey, I&apos;m Kartik Manchanda
            </h2>
            <p className="text-[#ababab] text-xl font-normal leading-6  -tracking-tight ">
              Breaking limits, building apps!⚡
            </p>
          </div>

          <div className="mt-8 h-80">
            <div
              className="bg-[url(/About.jpg)] w-full h-full bg-cover bg-center rounded-lg p-4 relative"
              style={{
                backgroundPosition: "center 30%",
              }}
            ></div>
          </div>

          <div className="text-[#fafafa] text-xl mb-4 font-semibold flex tracking-tighter text-center mt-8">
            Grinding & hustling
          </div>

          <div className="text-[#fafafa] text-xl mb-4 font-semibold flex tracking-tighter text-center">
            Feels/ Relatables
          </div>
        </div>
      </div>
    </div>
  );
}
