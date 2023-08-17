export default function About() {
  return (
    <div
      id="about"
      className="flex
                        relative 
                        bg-[#F1F5F9] 
                        w-[100%] 
                        gap-10
                        sm:pl-20 pl-8 
                        sm:pr-20 pr-8 
                        sm:justify-center items-center
                        lg:flex-row flex-col 
                        lg:h-[var(--height-h-screen,800px)] sm:h-[1200px] h-[800px] z-10"
    >
      <img
        src={"/assets/monitor.svg"}
        className="relative lg:max-w-[55%] z-[0] left-0 lg:mt-0 sm:mt-[-128px] mt-0"
      ></img>

      {/* Main Content */}
      <div
        className="flex flex-col lg:items-start items-center z-[1] 
                            gap-[20px] lg:text-left text-center
                            lg:ml-[-40px] ml-0
                            lg:pl-0 sm:pl-0 md:pl-20 pl-0 
                            lg:pl-0 sm:pr-0 md:pr-20 pr-0
                            lg:mt-0 sm:mt-[-128px] mt-[-84px]"
      >
        <p className="text-[#5038BC] sm:text-7xl text-4xl font-bold">
          About <br />
          RISTEK OSS
        </p>

        <p className="text-justify sm:text-xl text-base">
          RISTEK Open Source is a place of limitless inspiration and innovation,
          where young builders can work together on groundbreaking projects in
          an open-source ecosystem.
        </p>

        <p className="text-justify sm:text-xl text-base">
          Join our community that values open collaboration, knowledge exchange,
          and making a positive impact in the world. Let's shape the future of
          technology together!
        </p>
      </div>

      {/* Decoration */}
      <img
        src={"/assets/decor-side.svg"}
        className="md:block hidden absolute left-0"
      ></img>
      <img
        src={"/assets/decor-side.svg"}
        className="md:block hidden absolute right-0"
      ></img>

      <img
        src={"/assets/decor-corner-1.svg"}
        className="md:hidden absolute block right-0 top-0"
      ></img>
      <img
        src={"/assets/decor-corner-2.svg"}
        className="md:hidden absolute block left-0 top-0"
      ></img>
      <img
        src={"/assets/decor-corner-1.svg"}
        className="md:hidden absolute block left-0 bottom-0 rotate-180"
      ></img>
      <img
        src={"/assets/decor-corner-2.svg"}
        className="md:hidden absolute block right-0 bottom-0 rotate-180"
      ></img>
    </div>
  );
}
