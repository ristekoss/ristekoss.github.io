import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  publishedYear: string;
  platform: string;
  description: string;
  githubLink: string;
  appLink: string;
  modal: Function;
  modalApp: Function
}

function ProductCard({
  name,
  imageSrc,
  imageAlt,
  imageWidth,
  publishedYear,
  platform,
  description,
  githubLink,
  appLink,
  modal,
  modalApp
}: Props) {
  return (
    <div className="w-[300px] h-fit rounded-[20px] p-5 bg-white text-sm xl:w-[360px]">
      <div className="card-content flex flex-col gap-[15px]">
        <div className="upper-content">
          <div className="brand h-12 w-fit">
            <Image
              src={imageSrc}
              alt={imageAlt}
              height={48}
              width={imageWidth}
            />
          </div>
          <div className="card-text flex flex-col gap-1">
            <div className="product-tags flex flex-row gap-1 py-1">
              <div className="text-white bg-[#C424A3] rounded-[200px] font-bold w-fit py-1 px-3">
                {publishedYear}
              </div>
              <div className="bg-[#64E6FB] rounded-[200px] w-fit py-1 px-3">
                {platform}
              </div>
            </div>
            <p className="text-base">{description}</p>
          </div>
        </div>

        <div className="buttons-container ml-auto flex flex-row gap-3">
          <a
            href={githubLink}
            target="_blank"
            className="bg-[#C9CEFC] p-[10px] rounded-lg"
          >
            <Image
              src="icons/github.svg"
              alt=""
              width={20}
              height={20}
            />
          </a>

          <a
            href={appLink}
            target="_blank"
            className="bg-[#C9CEFC] p-[10px] rounded-lg"
          >
            <Image
              src="icons/box-arrow-up-right.svg"
              alt=""
              width={20}
              height={20}
            />
          </a>

          <button className="bg-[#C9CEFC] p-[10px] rounded-lg" onClick={() => {modal(); modalApp(name)}}>
            <Image
              src="icons/code-slash.svg"
              alt=""
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
