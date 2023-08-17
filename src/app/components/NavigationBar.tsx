
export default function NavigationBar() {
    return (
      <div className="flex flex-row fixed z-20 bg-white h-[64px] w-[100%] 
                      lg:pr-[80px] sm:pr-[40px] pr-[32px]
                      lg:pl-[80px] sm:pl-[40px] pl-[32px]
                      items-center justify-between">

        <img src={"/assets/logo.svg"} className="sm:block hidden"></img>
        <img src={"/assets/logogram.svg"} className="sm:hidden block"></img>

        <div className="hidden md:flex flex-wrap items-center gap-[8px]">

            <a href="#about">
                <p className="lg:pr-[32px] pr-[24px] lg:pl-[32px] pl-[24px] justify-center items-center">
                    About
                </p>
            </a>

            <a href="#products">
                <p className="lg:pr-[32px] pr-[24px] lg:pl-[32px] pl-[24px] justify-center items-center">
                    Our Products
                </p>
            </a>

            <a href="">
                <div className="flex flex-row lg:pr-[32px] pr-[24px] lg:pl-[32px] pl-[24px] justify-center items-center gap-[8px]">
                    <img src={"/assets/chat.svg"}></img>
                    <p className="text-[#5038BC]">
                        Chill With Us
                    </p>
                </div>
            </a>

        </div>

        <img src={"/assets/menu.svg"} className="flex md:hidden"></img>
        
      </div>
    )
}