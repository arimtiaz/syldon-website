import React from "react";
import ysio from '../../images/Ysio.png'
import acuson from '../../images/Acuson.png'
import magnetom from '../../images/MAGNETOM.png'
import attelica from '../../images/Atellica.png'

const Diagonostic = () => {
  return (
    <div>
      <section>
        <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <h2 class="text-center text-3xl font-bold md:text-5xl">High Tech Diagnostic Equipment</h2>
          <p class="msm:text-base mb-8 mt-4 text-center text-sm text-[#636262] md:mb-12 lg:mb-16">
            Lorem ipsum dolor sit amet elit ut aliquam
          </p>
          <div class="text-left mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-10">
            <div className="relative flex h-[300px] items-end">
              <img
                src={ysio}
                alt=""
                class="inline-block h-full w-full rounded-lg object-cover"
              />
              <div class="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <p class="text-sm font-medium sm:text-xl">Ysio Max</p>
                <p class="text-sm sm:text-base">Siemens</p>
              </div>
            </div>
            <div className="relative flex h-[300px] items-end">
              <img
                src={acuson}
                alt=""
                class="inline-block h-full w-full rounded-lg object-cover"
              />
              <div class="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <p class="text-sm font-medium sm:text-xl">ACUSON Sequoia</p>
                <p class="text-sm sm:text-base">Siemens</p>
              </div>
            </div>
            <div className="relative flex h-[300px] items-end">
            <img
                src={magnetom}
                alt=""
                class="inline-block h-full w-full rounded-lg object-cover"
              />
              <div class="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <p class="text-sm font-medium sm:text-xl">MAGNETOM Amira</p>
                <p class="text-sm sm:text-base">Siemens</p>
              </div>
            </div>
            <div className="relative flex h-[300px] items-end">
              <img
                src={attelica}
                alt=""
                class="inline-block h-full w-full rounded-lg object-cover"
              />
              <div class="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <p class="text-sm font-medium sm:text-xl">Atellica UAS 60 Analyzer</p>
                <p class="text-sm sm:text-base">Siemens</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Diagonostic;
