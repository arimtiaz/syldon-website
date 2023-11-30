import React from "react";
import Construction1 from '../../images/construction1.jpeg'
import Construction2 from '../../images/construction2.jpeg'
import Construction3 from '../../images/construction3.jpeg'

const Construction = () => {
  return (
    <div className="mx-auto">
      <section>
        <div class=" mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-18 lg:py-16">
          <h2 class="text-3xl font-bold md:text-5xl">Our Construction Progress</h2>
          <p class=" msm:text-base t mb-8 mt-4 text-sm text-[#636262] md:mb-12 lg:mb-16">
          Witness the transformation that is shaping the future of healthcare in Sylhet
          </p>
          <div class="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2">
            <div
              class="relative flex h-[300px] items-end [grid-area:1/1/3/2] md:h-auto"
            >
              <img
                src={Construction1}
                alt=""
                class="inline-block h-full w-full rounded-lg object-cover"
              />
            </div>

            <div class="relative flex h-[300px] items-end">
              <img
                src={Construction2}
                alt=""
                class="inline-block h-full w-full rounded-lg object-cover"
              />
            </div>

            <div class="relative flex h-[300px] items-end">
              <img
                src={Construction3}
                alt=""
                class="inline-block h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Construction;
