export default function HeroSection() {
    return (
        <div className="hero relative flex items-stretch lg:flex-row flex-col pt-[64px] lg:h-[var(--height-h-screen,800px)]">
            
            {/* Main Content */}
            <div className="flex flex-col justify-center gap-5 
                            pt-[64px]
                            sm:pl-20 pl-8
                            sm:pr-20 lg:pr-10 pr-8
                            sm:h-[var(--height-h-screen,800px)] lg:h-[100%] h-[500px] 
                            lg:items-start items-center 
                            lg:text-start text-center 
                            lg:w-[55%] w-[100%]">

                {/* Texts */}
                <p className="text-[#5038BC] sm:text-7xl text-4xl font-bold">
                    RISTEK Open Source Site
                </p>
                <p className="sm:text-xl text-base text-justify">
                    We are the world's largest 
                    <span className="font-[700] text-[#5038BC]"> student-led </span> and 
                    <span className="font-[700] text-[#5038BC]"> product-centered open source organization </span> 
                    that have delivered significant impact, 
                    proven by our <span className="font-[700] text-[#C424A3]"> 200K+ annual users </span> and <span className="font-[700] text-[#C424A3]"> hundreds of community maintainers and contributors. </span>
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap lg:justify-start justify-center gap-[10px]">
                    <a href="#products">
                        <button className="flex flex-row bg-[#5038BC] rounded-[8px] text-white sm:h-[48px] h-[40px] sm:w-[214px] w-[186px] items-center justify-center gap-[8px]">
                            <img src={"/icons/product.svg"}></img>
                            Our Products
                        </button>
                    </a>
                    <a href="https://discord.com/invite/b4D99hZZ" target="_blank">
                        <button className="flex flex-row bg-[#C9CEFC] rounded-[8px] text-[#5038BC] sm:h-[48px] h-[40px] sm:w-[214px] w-[186px] items-center justify-center gap-[8px]">
                            <img src={"/assets/chat.svg"}></img>
                            Chill With Us
                        </button>
                    </a>
                </div>
            </div>
            <img src={"/images/hero.webp"} className="lg:h-[100%] sm:h-[400px] h-[300px] lg:w-[45%] w-[100%] object-cover"></img>
            
            {/* Decoration */}
            <img src={"assets/decor-1.svg"} className="lg:block hidden absolute left-0 top-0 pt-[64px]"></img>
            <img src={"assets/decor-2.svg"} className="lg:block hidden absolute right-0 bottom-0"></img>

            <div className="lg:hidden flex flex-row absolute justify-between w-[100%] top-0 pt-[64px]">
                <img src={"assets/decor-1.svg"} className="left-0 max-w-[50%] top-0"></img>
                <img src={"assets/decor-2.svg"} className="right-0 max-w-[50%] top-0 scale-y-[-1]"></img>
            </div>
        </div>
    )
}