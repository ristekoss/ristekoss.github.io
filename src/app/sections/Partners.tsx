'use client'
import Slider, { Settings } from "react-slick"
import { useState } from "react"

export default function Partners() {

    const Gojek : string = "/images/partners/gojek.svg"
    const Grammarly : string = "/images/partners/grammarly.svg"
    const Tiket : string = "/images/partners/tiket.svg"
    const Techinasia : string = "/images/partners/techinasia.svg"
    const Google : string = "images/partners/google.svg"
    const Traveloka : string = "/images/partners/traveloka.svg"
    const Dicoding : string = "/images/partners/dicoding.svg"
    const Hack : string = "/images/partners/hack+.svg"
    const Datacamp : string = "/images/partners/datacamp.svg"

    const [imageIndex, setImageIndex] = useState(0)

    const Partners : string[] = [Gojek, Grammarly, Tiket, Techinasia, Google, Traveloka, Dicoding, Hack, Datacamp]
    const settings : Settings = {
        infinite : true,
        slidesToShow : 3,
        centerMode : true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        beforeChange : (currentSlide, nextSlide) =>{
            setImageIndex(nextSlide)
        },
    }

    return (
            <div className="relative bg-[#F1F5F9] h-[var(--height-h-screen,800px)] flex items-center">
                <div className="absolute flex flex-col justify-between w-[100%] h-[100%]">

                    <div className="flex flex-row justify-between w-[100%] justify-center items-center">
                        <img src={"/assets/decor-m-3.svg"} className="left-0"></img>
                        <p className="text-[color:var(--primary-colors-purple-heart,#5038BC)] text-7xl font-bold leading-[72px];">
                            Educational Partners
                        </p>
                        <img src={"/assets/decor-m-4.svg"} className="right-0"></img>
                    </div>

                    <Slider {...settings} className="flex items-center"> 
                        {Partners.map((img : string, idx)  => {
                            return (
                                <img src={img} key={idx} className= {(idx === imageIndex)? "activeSlide max-h-[120px]" : "slide max-h-[120px]"}></img>
                            )
                        })}
                    </Slider>

                    <div className="flex justify-center items-center bottom-0">
                        <img src={"/assets/decor-l.svg"} className="left-0"></img>
                    </div>

                </div>
            </div>
    )
}