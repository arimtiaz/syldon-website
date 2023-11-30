import React from "react";
import RestaurantImg from '../../images/Restaurant.jpg'

const Entertainment = () => {
  return (
    <div>
      <section>
        <div class="text-left mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div class="flex flex-col gap-8 sm:gap-20 lg:flex-row-reverse lg:items-center">
            <div class="lg:w-1/2">
              <img
                src={RestaurantImg}
                alt=""
              />
            </div>
            <div class="lg:w-1/2">
              <h2 class="mb-4 max-w-3xl text-3xl font-bold md:text-5xl">
              Syldon Hospital's Entertainment Oasis for Comfort and Well-being
              </h2>
              <p class="mb-6 max-w-lg text-sm text-gray-700 sm:text-base md:mb-10 lg:mb-12">
              Discover joy in healing at Syldon Hospital. Our carefully curated entertainment options aim to uplift spirits and enhance well-being during your stay. From soothing music to engaging activities, we prioritize creating a positive and enjoyable atmosphere to support your healing journey.
              </p>
              <div class="mb-12 mt-12 h-0 w-40 border [border-top-style:solid]"></div>
              <ul class="flex flex-col">
                <li class="mb-2 flex items-start">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                    alt=""
                    class="mr-2 inline-block h-4 w-4"
                  />
                  <p class="text-gray-700 max-[479px]:text-sm">
                    <span className="font-bold">Restaurant:</span> Indulge in Culinary Excellence at Our Immaculate Restaurant.
                  </p>
                </li>
                <li class="mb-2 flex items-start">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                    alt=""
                    class="mr-2 inline-block h-4 w-4"
                  />
                  <p class="text-gray-700 max-[479px]:text-sm">
                    <span className="font-bold">Shopping Center:</span>  Unveiling a Shopping Center for Modern Convenience and Stylish Discoveries.
                  </p>
                </li>
                <li class="mb-2 flex items-start">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                    alt=""
                    class="mr-2 inline-block h-4 w-4"
                  />
                  <p class="text-gray-700 max-[479px]:text-sm">
                    <span className="font-bold">Coffee Shop:</span>  Savor Every Sip at Syldon's Cozy Coffee Haven.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Entertainment;