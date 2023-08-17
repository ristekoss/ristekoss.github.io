"use client";
import Slider, { Settings } from "react-slick";
import { useState } from "react";

export default function Partners() {
  const Gojek: string = "/images/partners/gojek.svg";
  const Grammarly: string = "/images/partners/grammarly.svg";
  const Tiket: string = "/images/partners/tiket.svg";
  const Techinasia: string = "/images/partners/techinasia.svg";
  const Google: string = "images/partners/google.svg";
  const Traveloka: string = "/images/partners/traveloka.svg";
  const Dicoding: string = "/images/partners/dicoding.svg";
  const Hack: string = "/images/partners/hack+.svg";
  const Datacamp: string = "/images/partners/datacamp.svg";

  const [imageIndex, setImageIndex] = useState(0);

  const Partners: string[] = [
    Gojek,
    Grammarly,
    Tiket,
    Techinasia,
    Google,
    Traveloka,
    Dicoding,
    Hack,
    Datacamp,
  ];
  const settings: Settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    beforeChange: (currentSlide, nextSlide) => {
      setImageIndex(nextSlide);
    },
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bg-[#F1F5F9] sm:h-[var(--height-h-screen,800px)] h-[650px] flex items-center overflow-x-hidden">
      <div className="absolute flex flex-col justify-between w-[100%] h-[100%]">
        <div className="flex sm:flex-row flex-col justify-between w-[100%] sm:items-start items-center">
          <img
            src={"/assets/decor-m-3.svg"}
            className="left-0 lg:block hidden"
          ></img>
          <img
            src={"/assets/decor-xs-1.svg"}
            className="left-0 lg:hidden sm:block hidden max-w-[15%]"
          ></img>

          <div className="flex flex-row justify-center sm:hidden block">
            <img
              src={"/assets/decor-xs-2.svg"}
              className="left-0 sm:hidden block"
            ></img>
            <img
              src={"/assets/decor-xs-1.svg"}
              className="left-0 sm:hidden invisible"
            ></img>
          </div>

          <p
            className="text-[#5038BC] max-h-[134px] lg:pt-0 pt-[56px] text-center sm:text-7xl text-4xl font-bold
                                    sm:pl-0 pl-10 
                                    sm:pr-0 pr-10"
          >
            Educational Partners
          </p>

          <img
            src={"/assets/decor-xs-2.svg"}
            className="left-0 lg:hidden sm:block hidden max-w-[15%]"
          ></img>
          <img
            src={"/assets/decor-m-4.svg"}
            className="right-0 lg:block hidden"
          ></img>
        </div>

        <div className="lg:pl-20 pl-0 lg:pr-20 pr-0 sm:mt-0 mt-[-124px]">
          <div className="edge-fade sm:w-[240px] w-[84px] h-[120px] bg-black absolute left-0 lg:ml-20 ml-0 z-[1]"></div>
          <div className="edge-fade sm:w-[240px] w-[84px] h-[120px] bg-black absolute right-0 lg:mr-20 mr-0 z-[1] rotate-180"></div>
          <Slider
            {...settings}
            arrows={false}
          >
            {Partners.map((img: string, idx) => {
              return (
                <img
                  src={img}
                  key={idx}
                  className={
                    idx === imageIndex
                      ? "activeSlide sm:h-[120px] h-[84px]"
                      : "slide sm:h-[120px] h-[84px]"
                  }
                ></img>
              );
            })}
          </Slider>
        </div>

        <div className="bottom-0 flex-shrink-0 flex-grow-0 w-[938px] relative left-1/2 transform -translate-x-1/2">
          <img
            src={"/assets/decor-l.svg"}
            className="w-[938px] h-[134px]"
          ></img>
        </div>
      </div>
    </div>
  );
}
