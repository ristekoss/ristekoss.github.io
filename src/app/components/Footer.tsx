"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex sm:flex-row justify-between px-[30px] py-[40px] sm:px-[76px] sm:py-12 text-sm flex-col text-center sm:text-left gap-10 sm:gap-0 max-w-sm h-fit sm:max-w-[840px] xl:max-w-[1440px]">
      <div className="sm:w-fit sm:h-fit flex flex-col justify-between sm:gap-5 xl:gap-4 xl:h-[188px]">
        <div className="flex xl:flex-row items-start justify-between flex-col gap-5 sm:w-[340px] xl:w-fit xl:gap-[116px]">
          <Image
            className="mx-auto sm:mx-0"
            src="/assets/logo.svg"
            alt="Ristek Fasilkom UI"
            width={254}
            height={48}
          />

          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2 justify-center sm:justify-start">
              <Image
                src="/icons/location.svg"
                alt="location"
                width={8.94}
                height={12}
              />
              <p className="font-semibold">Universitas Indonesia, Depok</p>
            </div>

            <p className="xl:w-[430px]">
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

        <p className="hidden sm:block">© 2023 RISTEK Fasilkom</p>
      </div>

      <div className="w-fit h-fit sm:w-fit sm:h-[233px] xl:h-[188px] flex flex-col sm:justify-between items-center gap-5">
        <div className="flex flex-row gap-4 sm:gap-5">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xs sm:text-sm">
              Official Learning Partner
            </p>
            <div className="flex flex-row gap-3">
              <Image
                className="w-[84px] sm:w-[92px]"
                src="/icons/gojek.svg"
                alt="Gojek logo"
                width={92}
                height={24}
              />
              <Image
                className="w-[60px] sm:w-[67px]"
                src="/icons/goto-financial.svg"
                alt="Gojek Financial"
                width={67}
                height={49}
              />
            </div>
          </div>

          <Image
            className="h-[70px] sm:h-[78px]"
            src="/icons/vertical-divider.svg"
            alt=""
            width={1}
            height={78}
          />

          <div className="flex flex-col gap-4 items-center">
            <p className="font-bold text-xs sm:text-sm">Accelerated by</p>
            <Image
              className="w-[85px] sm:w-[93px]"
              src="/icons/hackplus.svg"
              alt="Hack+ logo"
              width={92.96}
              height={28.72}
            />
          </div>
        </div>

        <div
          id="socmeds-container"
          className="gap-8 flex flex-row justify-between xl:mr-auto"
        >
          <Image
            src="/icons/instagram.svg"
            alt="RISTEK's Instagram"
            width={24}
            height={24}
          />

          <Image
            src="/icons/twitter.svg"
            alt="RISTEK's Twitter"
            width={29}
            height={24}
          />

          <Image
            src="/icons/linkedin.svg"
            alt="RISTEK's LinkedIn"
            width={25}
            height={24}
          />

          <Image
            src="/icons/line.svg"
            alt="RISTEK's Official Account LINE"
            width={25}
            height={24}
          />

          <Image
            src="/icons/medium.svg"
            alt="RISTEK's Medium"
            width={24}
            height={24}
          />
        </div>
      </div>

      <p className="sm:hidden">© 2023 RISTEK Fasilkom</p>
    </footer>
  );
}
