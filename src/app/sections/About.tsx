export default function About() {
    return (
      <div className="flex items-center bg-[#F1F5F9] h-[var(--height-h-screen,800px)] items-start shrink-0" id="about">

            <img src={"/assets/decor-side.svg"} style={{position:"absolute", left:"0"}}></img>
            <img src={"/assets/decor-side.svg"} style={{position:"absolute", right:"0", transform: "rotate(180deg)"}}></img>

            <div className="flex w-[100%] pl-20 pr-20 justify-center items-center content-center gap-10 flex-wrap;">
                <img src={"/assets/glow.svg"} className="absolute z-[0] left-0"></img>
                <img src={"/assets/monitor.svg"} className="z-[1]"></img>
                <div className="flex flex-col items-start gap-5 max-w-[50%]">
                    <p className="text-[color:var(--primary-colors-purple-heart,#5038BC)] text-7xl font-bold leading-[72px];">
                        About <br/>
                        RISTEK OSS
                    </p>
                    <p className="text-black text-justify text-lg not-italic font-normal leading-7;">
                        RISTEK Open Source is a place of limitless inspiration and innovation, where young builders 
                        can work together on groundbreaking projects in an open-source ecosystem.
                    </p>
                    <p className="text-black text-justify text-lg not-italic font-normal leading-7;">
                    Join our community that values open collaboration, knowledge exchange, 
                    and making a positive impact in the world. Let's shape the future of technology together!
                    </p>
                </div>
            </div>
      </div>
    )
}