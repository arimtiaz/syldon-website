import React from "react";
import ServicesImg from '../../images/ServicesImg.jpg'

const Services = () => {
  return (
    <div>
      <section>
        {/* <!-- Container --> */}
        <div class="mx-auto w-full max-w-6xl px-5 py-12 md:px-10 md:py-16 lg:py-20 text-left">
          {/* <!-- Component --> */}
          <div class="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
            {/* <!-- Item --> */}
            <div class="py-20">
              <h2 class="mb-6 text-2xl font-bold md:mb-10 md:text-4xl lg:mb-12">
                Understand sales performance better
              </h2>
              <ul class="grid max-w-2xl grid-cols-2 sm:gap-5 lg:max-w-none">
                <li class="flex flex-col p-5">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                    alt=""
                    class="mb-4 inline-block h-10 w-10"
                  />
                  <p class="mb-4 font-semibold">Support</p>
                  <p class="text-sm text-[#636262]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam, purus sit.
                  </p>
                </li>
                <li class="flex flex-col p-5">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                    alt=""
                    class="mb-4 inline-block h-10 w-10"
                  />
                  <p class="mb-4 font-semibold">Organise</p>
                  <p class="text-sm text-[#636262]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam, purus sit.
                  </p>
                </li>
                <li class="flex flex-col p-5">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                    alt=""
                    class="mb-4 inline-block h-10 w-10"
                  />
                  <p class="mb-4 font-semibold">Flexibility</p>
                  <p class="text-sm text-[#636262]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam, purus sit.
                  </p>
                </li>
                <li class="flex flex-col p-5">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                    alt=""
                    class="mb-4 inline-block h-10 w-10"
                  />
                  <p class="mb-4 font-semibold">Speed</p>
                  <p class="text-sm text-[#636262]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam, purus sit.
                  </p>
                </li>
              </ul>
            </div>
            {/* <!-- Item --> */}
            <div class="h-full w-full">
              <img
                src={ServicesImg}
                alt=""
                class="mx-auto inline-block h-full w-full max-w-[640px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
