export default function HeroSection() {
    return (
      <div className="hero">

        <div className="relative flex flex-col justify-center w-[50%] h-[100%]">
            <img src={"assets/decor-1.svg"} className="absolute left-0 top-0"></img>
            <div className="flex flex-col justify-center items-start gap-5 flex-[1_0_0] self-stretch pl-20 pr-10 py-0">
                <p className="text-[color:var(--primary-colors-purple-heart,#5038BC)] text-7xl font-bold leading-[72px];">
                    RISTEK Open Source Site
                </p>
                <p>
                    We are the world's largest 
                    <span className="font-[700] text-[#5038BC]"> student-led </span> and 
                    <span className="font-[700] text-[#5038BC]"> product-centered open source organization </span> 
                    that have delivered significant impact, 
                    proven by our <span className="font-[700] text-[#C424A3]"> 200K+ annual users </span> and <span className="font-[700] text-[#C424A3]"> hundreds of community maintainers and contributors. </span>
                </p>
                <div className="flex flex-row gap-[10px]">

                    <a href="#products">
                        <button className="flex flex-row bg-[#5038BC] rounded-[8px] text-white h-[48px] w-[214px] items-center justify-center gap-[8px]">
                            <img src={"/icons/product.svg"}></img>
                            Our Products
                        </button>
                    </a>

                    <a href="">
                        <button className="flex flex-row bg-[#C9CEFC] rounded-[8px] text-[#5038BC] h-[48px] w-[214px] items-center justify-center gap-[8px]">
                            <img src={"/assets/chat.svg"}></img>
                            Chill With Us
                        </button>
                    </a>

                </div>
            </div>

        </div>

        <div className="relative w-[50%] h-[100%]">
            <img src={"assets/decor-2.svg"} className="absolute right-0 bottom-0"></img>
            <img src={"/images/hero.webp"} className="h-[100%] w-[720px]"></img>
        </div>
        
      </div>
    )
}