import ContributorsCard from "../components/ContributorsCard";

interface Contributors {
    url : string,
    name : string,
    role : string
}

export default function Contributors() {

    const contributors : Contributors[] = [
        {
            url:"/images/placeholder.png",
            name:"Tukang Ulas Kelas",
            role:"Designer"
        },
        {
            url:"/images/placeholder.png",
            name:"Tukang Ulas Kelas",
            role:"Designer"
        },
        {
            url:"/images/placeholder.png",
            name:"Tukang Ulas Kelas",
            role:"Designer"
        },
        {
            url:"/images/placeholder.png",
            name:"Tukang Ulas Kelas",
            role:"Designer"
        },
        {
            url:"/images/placeholder.png",
            name:"Tukang Ulas Kelas",
            role:"Designer"
        },
        {
            url:"/images/placeholder.png",
            name:"Tukang Ulas Kelas",
            role:"Designer"
        },
        {
            url:"/images/placeholder.png",
            name:"Tukang Ulas Kelas",
            role:"Designer"
        }
    ] 

    return (
        <div className="relative bg-[#F1F5F9] flex items-center">

            <div className="absolute flex flex-col justify-between w-[100%] h-[100%]">

                <div className="flex flex-row justify-between w-[100%] justify-center items-center pt-[40px]">
                    <img src={"/assets/decor-s-1.svg"} className="left-0 max-w-[15%]"></img>
                    <p className="text-[color:var(--primary-colors-purple-heart,#5038BC)] sm:text-7xl text-2xl text-center font-bold">
                        The Developers!
                    </p>
                    <img src={"/assets/decor-s-2.svg"} className="right-0 max-w-[15%]"></img>
                </div>

                <div className="flex flex-row sm:justify-between w-[100%] justify-center items-center bottom-0">
                    <img src={"/assets/decor-m-1.svg"} className="sm:block hidden left-0 "></img>
                    <img src={"/assets/decor-m-2.svg"} className="sm:right-0"></img>
                </div>
    
            </div>

            <div className="relative flex flex-wrap align-center justify-center gap-[30px] sm:mt-[256px] mt-[156px] mb-[300px] pl-[42px] pr-[42px]">
                    {contributors.map((contributors, index) => {
                        return (
                        <ContributorsCard url={contributors.url} name={contributors.name} role={contributors.role} key={index}/>
                        )
                    })}
            </div>

        </div>
    )
}