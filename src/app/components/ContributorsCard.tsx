export default function ContributorsCard({url, name, role} : any) : JSX.Element {
    return (
        <div className="flex items-start gap-2.5 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.20)] px-5 py-4 rounded-[20px] max-w-[376px] max-h-[138px]">
            <div className="w-[160px] h-[106px]" style={{background:`url(${url})`}}></div>
            <div className="flex flex-col max-w-[166px]">
                <p className="font-bold text-base text-[#45349F]">{name}</p>
                <p className="font-normal text-base text-[#45349F]">{role}</p>
            </div>
        </div>
    )
}