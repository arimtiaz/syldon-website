import { faKitMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Feature = () => {
  return (
    <div>
      <section>
        {/* <!-- Container --> */}
        <div class="mx-auto w-full max-w-6xl px-5 py-16 md:px-10 md:py-24 lg:py-16">
          {/* <!-- Title --> */}
          <div class="flex flex-col items-center text-center">
            <h2 class="text-2xl font-bold md:text-4xl">
              Make every step user-centric
            </h2>
            <p class="mb-8 mt-4 max-w-xl text-base text-gray-600 md:mb-12 md:text-lg lg:mb-16">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit amet luctus magna fringilla urna
            </p>
          </div>
          {/* <!-- Features Content --> */}
          <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6 ">
            {/* <!-- Features Item --> */}
            <div class="grid gap-6 rounded-md border border-solid border-blue-200 bg-blue-50 p-8 md:p-10">
              <FontAwesomeIcon className="mx-auto" size="2xl" color="#2563eb" icon={faKitMedical}></FontAwesomeIcon>
              <h3 class="text-xl font-semibold">Support</h3>
              <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/*  */}
            {/* <!-- Features Item --> */}
            <div class="grid gap-6 rounded-md border border-solid border-blue-200 bg-blue-50 p-8 md:p-10">
              <FontAwesomeIcon className="mx-auto" size="2xl" color="#2563eb" icon={faKitMedical}></FontAwesomeIcon>
              <h3 class="text-xl font-semibold">Support</h3>
              <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/*  */}
            {/* <!-- Features Item --> */}
            <div class="grid gap-6 rounded-md border border-solid border-blue-200 bg-blue-50 p-8 md:p-10">
              <FontAwesomeIcon className="mx-auto" size="2xl" color="#2563eb" icon={faKitMedical}></FontAwesomeIcon>
              <h3 class="text-xl font-semibold">Support</h3>
              <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/*  */}
            {/* <!-- Features Item --> */}
            <div class="grid gap-6 rounded-md border border-solid border-blue-200 bg-blue-50 p-8 md:p-10">
              <FontAwesomeIcon className="mx-auto" size="2xl" color="#2563eb" icon={faKitMedical}></FontAwesomeIcon>
              <h3 class="text-xl font-semibold">Support</h3>
              <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/*  */}
            {/* <!-- Features Item --> */}
            <div class="grid gap-6 rounded-md border border-solid border-blue-200 bg-blue-50 p-8 md:p-10">
              <FontAwesomeIcon className="mx-auto" size="2xl" color="#2563eb" icon={faKitMedical}></FontAwesomeIcon>
              <h3 class="text-xl font-semibold">Support</h3>
              <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/*  */}
            {/* <!-- Features Item --> */}
            <div class="grid gap-6 rounded-md border border-solid border-blue-200 bg-blue-50 p-8 md:p-10">
              <FontAwesomeIcon className="mx-auto" size="2xl" color="#2563eb" icon={faKitMedical}></FontAwesomeIcon>
              <h3 class="text-xl font-semibold">Support</h3>
              <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
