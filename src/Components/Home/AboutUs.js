import React from "react";
import HeroImg from "../../images/Hero_Image.png";

const AboutUs = () => {
  return (
    <div>
      {/* <!-- Hero Container --> */}
      <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-16 md:py-24 lg:py-32 text-left">
        {/* <!-- Component --> */}
        <div class="grid grid-cols-1 items-start justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
          <img src={HeroImg} alt="" class="inline-block h-full w-full" />
          {/* <!-- Hero Content --> */}
          <div class="flex flex-col">
            {/* <!-- Hero Title --> */}
            <h1 class="mb-4 text-2xl font-bold md:text-4xl">
              Our Commitment to Exceptional Healthcare
            </h1>
            <p class="mb-6 max-w-lg text-base text-gray-600 md:mb-10 lg:mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus consectetur
              adipiscing elit ut aliquam, purus sit amet luctus venenatis,
              lectus consectetur adipiscing elit ut aliquam, purus sit amet
              luctus venenatis, lectus
            </p>
            <div class="mt-2 flex flex-row items-center text-left text-gray-600">
              <div className="bg-teal-600 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                style={{color: "white"}}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>

              </div>
              <p className="ml-2 text-xl text-gray-900 font-semibold">Our Mission</p>
            </div>
            <p className="mt-2 mb-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis purus sit amet luctus venenatis amet luctus venenatis purus amet luctus venenatis purus</p>
            <div class="mt-2 flex flex-row items-center text-left text-gray-600">
              <div className="bg-teal-600 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                style={{color: "white"}}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>

              </div>
              <p className="ml-2 text-xl text-gray-900 font-semibold">Our Vision</p>
            </div>
            <p className="mt-2 mb-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis purus sit amet luctus venenatis amet luctus venenatis purus amet luctus venenatis purus</p>
          </div>
          {/* <!-- Hero Image --> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
