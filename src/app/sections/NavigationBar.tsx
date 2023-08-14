
export default function NavigationBar() {
    return (
      <div className="flex z-[2] bg-white fixed h-[64px] w-[100%] pr-[80px] pl-[80px] justify-between items-center content-center">

        {/* <img src={"/assets/logo.svg#svgView(viewBox(-100, 0, 48, 48))"}></img> */}
        <img src={"/assets/logo.svg"}></img>

        <div className="flex flex-wrap justify-end items-center gap-[8px] navigation">

            <a href="#about">
                <p className="pr-[32px] pl-[32px] justify-center items-center gap-[8px]">
                    About
                </p>
            </a>

            <a href="#products">
                <p className="pr-[32px] pl-[32px] justify-center items-center gap-[8px]">
                    Our Products
                </p>
            </a>

            <a href="">
                <div className="flex flex-row pr-[32px] pl-[32px] justify-center items-center gap-[8px]">
                    <img src={"/assets/chat.svg"}></img>
                    <p className="text-[#5038BC]">
                        Chill With Us
                    </p>
                </div>
            </a>

        </div>

        <img src={"/assets/menu.svg"} className="nav-mobile"></img>
        
      </div>
    )
}