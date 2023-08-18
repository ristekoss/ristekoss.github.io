"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex md:flex-row justify-between px-[30px] py-[40px] md:px-[76px] md:py-12 text-sm flex-col text-center md:text-left gap-10 md:gap-0 max-w-sm h-fit md:max-w-[840px] lg:max-w-[1440px] mx-auto">
      <div className="md:w-fit md:h-fit flex flex-col justify-between md:gap-5 lg:gap-4 lg:h-fit">
        <div className="flex lg:flex-row items-start justify-between flex-col gap-5 md:w-[340px] lg:w-fit lg:gap-10 xl:gap-[116px]">
          <Image
            className="mx-auto md:mx-0"
            src="/assets/logo.svg"
            alt="Ristek Fasilkom UI"
            width={254}
            height={48}
          />

          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2 justify-center md:justify-start">
              <Image
                src="/icons/location.svg"
                alt="location"
                width={8.94}
                height={12}
              />
              <p className="font-semibold">Universitas Indonesia, Depok</p>
            </div>

            <p className="lg:w-[260px] xl:w-[430px]">
              RISTEK is a student-founded non-profit organization from
              Universitas Indonesia's Faculty of Computer Science, supported by
              a United States of America 501(c)(3) non-profit.
            </p>

            <div>
              <p className="font-semibold">Contact us (Email):</p>
              <p>team@ristek.cs.ui.ac.id</p>
            </div>
          </div>
        </div>

        <p className="hidden md:block">© 2023 RISTEK Fasilkom</p>
      </div>

      <div className="w-fit h-fit md:w-fit md:h-[233px] lg:h-[188px] flex flex-col md:justify-between items-center gap-5">
        <div className="flex flex-row gap-4 md:gap-5">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-xs md:text-sm">
              Official Learning Partner
            </p>
            <div className="flex flex-row gap-3">
              <Image
                className="w-[84px] md:w-[92px]"
                src="/icons/gojek.svg"
                alt="Gojek logo"
                width={92}
                height={24}
              />
              <Image
                className="w-[60px] md:w-[67px]"
                src="/icons/goto-financial.svg"
                alt="Gojek Financial"
                width={67}
                height={49}
              />
            </div>
          </div>

          <Image
            className="h-[70px] md:h-[78px]"
            src="/icons/vertical-divider.svg"
            alt=""
            width={1}
            height={78}
          />

          <div className="flex flex-col gap-4 items-center">
            <p className="font-semibold text-xs md:text-sm">Accelerated by</p>
            <Image
              className="w-[85px] md:w-[93px]"
              src="/icons/hackplus.svg"
              alt="Hack+ logo"
              width={92.96}
              height={28.72}
            />
          </div>
        </div>

        <div
          id="socmeds-container"
          className="gap-8 flex flex-row justify-between lg:mr-auto"
        >
            <a href="https://www.instagram.com/ristek.csui/">
                <Image
                    src="/icons/instagram.svg"
                    alt="RISTEK's Instagram"
                    width={24}
                    height={24}
                />
            </a>

            <a href="https://twitter.com/RistekCSUI">
                <Image
                    src="/icons/twitter.svg"
                    alt="RISTEK's Twitter"
                    width={29}
                    height={24}
                />
            </a>

            <a href="https://www.linkedin.com/company/ristek-fakultas-ilmu-komputer-universitas-indonesia">
                <Image
                    src="/icons/linkedin.svg"
                    alt="RISTEK's LinkedIn"
                    width={25}
                    height={24}
                />
            </a>

            <a href="https://liff.line.me/1645278921-kWRPP32q?accountId=rye2953f&openerPlatform=webview&openerKey=webview%3AunifiedSearch">
                <Image
                    src="/icons/line.svg"
                    alt="RISTEK's Official Account LINE"
                    width={25}
                    height={24}
                />
            </a>

            <a href="https://medium.com/ristek-fasilkom">
                <Image
                    src="/icons/medium.svg"
                    alt="RISTEK's Medium"
                    width={24}
                    height={24}
                />
            </a>
        </div>
      </div>

      <p className="md:hidden">© 2023 RISTEK Fasilkom</p>
    </footer>
  );
}
