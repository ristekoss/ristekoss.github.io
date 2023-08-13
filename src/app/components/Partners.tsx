export default function Partners() {
    return (
      <div className="flex flex-col justify-between bg-[#F1F5F9] h-[var(--height-h-screen,800px)]">
        <div className="flex flex-row justify-between w-[100%] justify-center items-center">
            <img src={"/assets/decor-m-3.svg"} className="left-0"></img>
            <p className="text-[color:var(--primary-colors-purple-heart,#5038BC)] text-7xl font-bold leading-[72px];">
                Educational Partners
            </p>
            <img src={"/assets/decor-m-4.svg"} className="right-0"></img>
        </div>

        <div className="flex justify-center items-center bottom-0">
            <img src={"/assets/decor-l.svg"} className="left-0"></img>
        </div>
      </div>
    )
}