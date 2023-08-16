"use client";
import { useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import Image from "next/image";
import Slider, { Settings } from "react-slick";

interface Products {
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  publishedYear: string;
  platform: string;
  description: string;
  githubLink: string;
}

export default function OurProducts() {
  const initialSlide = 0;
  const [productShowIndex, setProductShowIndex] =
    useState<number>(initialSlide);

  const sliderRef = useRef<Slider | null>(null);

  const productsInfo: Products[] = [
    {
      imageSrc: "icons/logo-sunjad.svg",
      imageAlt: "Susun Jadwal",
      imageWidth: 240,
      publishedYear: "2020",
      platform: "Web",
      description:
        "Universitas Indonesia's #1 student course planning app with over 500 thousand users across 14 faculties.",
      githubLink: "https://www.github.com",
    },
    {
      imageSrc: "icons/bikun-tracker.svg",
      imageAlt: "Bikun Tracker",
      imageWidth: 225,
      publishedYear: "2023",
      platform: "Web",
      description:
        "Experience the Convenience of Riding Bikun with Bikun Tracker! With Bikun Tracker, you no longer have to worry about when Bikun will come or stress about its arrival schedule.",
      githubLink: "https://www.github.com",
    },
    {
      imageSrc: "icons/ristek-link.svg",
      imageAlt: "Ristek Link",
      imageWidth: 188,
      publishedYear: "2021",
      platform: "Web",
      description:
        "World's #1 Easy to use, no-logins, customisable url shortener. 1 million shortened links!",
      githubLink: "https://www.github.com",
    },
    {
      imageSrc: "icons/ulas-kelas.svg",
      imageAlt: "Ulas Kelas",
      imageWidth: 240,
      publishedYear: "2022",
      platform: "Mobile",
      description:
        "Say goodbye to confusion and hello to informed decision-making. UlasKelas is here to be your clever companion to choose your courses!",
      githubLink: "https://www.github.com",
    },
  ];

  const tes: Products[] = [
    {
      imageSrc: "icons/logo-sunjad.svg",
      imageAlt: "Susun Jadwal",
      imageWidth: 240,
      publishedYear: "2020",
      platform: "Web",
      description:
        "Universitas Indonesia's #1 student course planning app with over 500 thousand users across 14 faculties.",
      githubLink: "https://www.github.com",
    },
  ];

  const settings: Settings = {
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    autoplay: false,
    arrows: false,
    initialSlide,
    centerPadding: "-6px",
    beforeChange: (currentSlide, nextSlide) => {
      setProductShowIndex(nextSlide);
    },
  };

  const handleNextProduct = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrevProduct = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div
      id="products-container"
      className="bg-[#3C317E] h-[800px] px-5 py-32 xl:px-16 xl:py-[156.5px] flex flex-col justify-center gap-10 overflow-hidden"
    >
      <Image
        className="absolute mx-auto"
        src="assets/oss-logo.svg"
        alt=""
        width={396}
        height={695}
      />

      <div className="z-10">
        <h1 className="font-bold text-white text-4xl w-[320px] mx-auto text-center xl:hidden">
          Explore Our Products!
        </h1>

        <div className="hidden xl:flex flex-row gap-10 justify-center items-center">
          <h1 className="text-white font-bold text-center text-7xl">
            Explore Our Products!
          </h1>

          <Image
            src="assets/decor-2.svg"
            alt=""
            width={321}
            height={107}
          />
        </div>

        <div id="carousel-card-product">
          <Slider
            {...settings}
            ref={sliderRef}
            className="w-[300px] h-[347px] mx-auto flex flex-row"
          >
            {productsInfo.map((product, index) => {
              return (
                <ProductCard
                  {...product}
                  key={index}
                />
              );
            })}
          </Slider>

          <div
            id="cards-navigation"
            className="flex flex-row gap-11 justify-between"
          >
            <button
              className="bg-white rounded-full w-16 h-16"
              onClick={handlePrevProduct}
            >
              <Image
                className="mx-auto"
                src="icons/caret-left-fill.svg"
                alt=""
                width={52}
                height={52}
              />
            </button>

            <div
              id="pager-carousel-products"
              className="flex flex-row gap-3 justify-center items-center"
            >
              {productsInfo.map((product, index) => {
                return (
                  <div
                    className={`w-3 h-3 ${
                      index == productShowIndex
                        ? "bg-[#64E6FB]"
                        : "bg-neutral-400"
                    } rounded-full`}
                  ></div>
                );
              })}
              {/* <div className="w-3 h-3 bg-[#64E6FB] rounded-full"></div> */}
            </div>

            <button
              className="bg-white rounded-full w-16 h-16"
              onClick={handleNextProduct}
            >
              <Image
                className="mx-auto"
                src="icons/caret-right-fill.svg"
                alt=""
                width={52}
                height={52}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
