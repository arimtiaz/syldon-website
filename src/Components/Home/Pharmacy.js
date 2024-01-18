import React from "react";
import PharamcyImg from '../../images/pharmacy.jpg'

const Pharmacy = () => {
  return (
    <div>
      <section>
        <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div class="text-left flex flex-col gap-8 sm:gap-20 lg:flex-row-reverse lg:items-center">
            <div class="lg:w-1/2">
              <h2 class="mb-4 max-w-3xl text-3xl font-bold md:text-5xl">
              Modern Medicinal Hub
              </h2>
              <p class="mb-6 max-w-lg text-sm text-[#636262] sm:text-base md:mb-10 lg:mb-12">
              Discover convenience and care at Syldon Hospital's modern pharmacy — your trusted source for expert consultations and a comprehensive range of medications.
              </p>
              <div class="mb-12 mt-12 h-0 w-40 border [border-top-style:solid]"></div>
              <ul class="flex flex-col">
                <li class="mb-2 flex items-start">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                    alt=""
                    class="mr-2 inline-block h-4 w-4"
                  />
                  <p class="text-[#636262] max-[479px]:text-sm">
                  Personalized guidance from knowledgeable pharmacists for tailored health solutions
                  </p>
                </li>
                <li class="mb-2 flex items-start">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                    alt=""
                    class="mr-2 inline-block h-4 w-4"
                  />
                  <p class="text-[#636262] max-[479px]:text-sm">
                  Receive personalized advice from our knowledgeable pharmacists for tailored health solutions.
                  </p>
                </li>
                <li class="mb-2 flex items-start">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                    alt=""
                    class="mr-2 inline-block h-4 w-4"
                  />
                  <p class="text-[#636262] max-[479px]:text-sm">
                  Streamlined management at our modern pharmacy, ensuring accessible health services.
                  </p>
                </li>
                <li class="flex items-start">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                    alt=""
                    class="mr-2 inline-block h-4 w-4"
                  />
                  <p class="text-[#636262] max-[479px]:text-sm">
                  Quick prescription processing and timely medication dispensing for efficient service.
                  </p>
                </li>
              </ul>
            </div>

            <div class="lg:w-1/2">
              <img
                src={PharamcyImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pharmacy;
