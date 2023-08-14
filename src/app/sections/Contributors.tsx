import ContributorsCard from "../components/ContributorsCard";

export default function Contributors() {
    return (
        <div className="relative bg-[#F1F5F9] h-[var(--height-h-screen,800px)] flex items-center">

            <div className="absolute flex flex-col justify-between w-[100%] h-[100%]">

                <div className="flex flex-row justify-between w-[100%] justify-center items-center pt-[40px]">
                    <img src={"/assets/decor-s-1.svg"} className="left-0"></img>
                    <p className="text-[color:var(--primary-colors-purple-heart,#5038BC)] text-7xl font-bold leading-[72px];">
                        The Developers!
                    </p>
                    <img src={"/assets/decor-s-2.svg"} className="right-0"></img>
                </div>

                <div className="flex flex-row justify-between w-[100%] justify-center items-center bottom-0">
                    <img src={"/assets/decor-m-1.svg"} className="left-0"></img>
                    <img src={"/assets/decor-m-2.svg"} className="right-0"></img>
                </div>
    
            </div>

            <div className="absolute flex flex-wrap align-center justify-center gap-[30px]">
                <ContributorsCard url="/images/placeholder.png" name="Smitty Werben Jagerman Jensen" role="Designer"/>
                <ContributorsCard url="/images/placeholder.png" name="Smitty Werben Jagerman Jensen" role="Designer"/>
                <ContributorsCard url="/images/placeholder.png" name="Smitty Werben Jagerman Jensen" role="Designer"/>
                <ContributorsCard url="/images/placeholder.png" name="Smitty Werben Jagerman Jensen" role="Designer"/>
                <ContributorsCard url="/images/placeholder.png" name="Smitty Werben Jagerman Jensen" role="Designer"/>
            </div>

        </div>
    )
}