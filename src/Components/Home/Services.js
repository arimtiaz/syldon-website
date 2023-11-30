import React from "react";
import ServicesImg from '../../images/ServicesImg.jpg'
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faCircleDot, faCircleDotDot } from "@fortawesome/free-solid-svg-icons";

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
              Explore Our Specialized Departments: Tailored Care for Your Health Journey
              </h2>
              <ul class="grid max-w-2xl grid-cols-2 sm:gap-5 lg:max-w-none">
                <li class="flex flex-col p-5 items-start">
                <FontAwesomeIcon className="py-4" icon={faCircleDot} style={{color: "#6290df",}} />
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <p class="mb-4 font-semibold">Urology</p>
                  <p class="text-sm text-[#636262]">
                  Comprehensive Urological Care: Nurturing Your Urinary Health with Expertise and Compassion
                  </p>
                </li>
                <li class="flex flex-col p-5 items-start">
                   <FontAwesomeIcon className="py-4" icon={faCircleDot} style={{color: "#6290df",}} />
                  <p class="mb-4 font-semibold">Neurology</p>
                  <p class="text-sm text-[#636262]">
                  Navigating Neurological Wellness: Precision Care for Your Brain and Nervous System.
                  </p>
                </li>
                <li class="flex flex-col p-5 items-start">
                   <FontAwesomeIcon className="py-4" icon={faCircleDot} style={{color: "#6290df",}} />
                  <p class="mb-4 font-semibold">Cardiology</p>
                  <p class="text-sm text-[#636262]">
                  Heart Health Excellence: Elevating Cardiac Care with Expertise and Compassion.
                  </p>
                </li>
                <li class="flex flex-col p-5 items-start">
                   <FontAwesomeIcon className="py-4" icon={faCircleDot} style={{color: "#6290df",}} />
                  <p class="mb-4 font-semibold">Gynaecology</p>
                  <p class="text-sm text-[#636262]">
                  Empowering Women's Health: Compassionate Gynecological Care Tailored to Your Well-being.
                  </p>
                </li>
                <li class="flex flex-col p-5 items-start">
                   <FontAwesomeIcon className="py-4" icon={faCircleDot} style={{color: "#6290df",}} />
                  <p class="mb-4 font-semibold">Orthopedics</p>
                  <p class="text-sm text-[#636262]">
                  Revitalizing Movement, Restoring Strength: Orthopedic Excellence for Your Active Lifestyle.
                  </p>
                </li>
                <li class="flex flex-col p-5 items-start">
                   <FontAwesomeIcon className="py-4" icon={faCircleDot} style={{color: "#6290df",}} />
                  <p class="mb-4 font-semibold">Oncology</p>
                  <p class="text-sm text-[#636262]">
                  Transformative Oncology Care: Focused on Healing, Empowering Your Cancer Journey.
                  </p>
                </li>
                <li class="flex flex-col p-5 items-start">
                   <FontAwesomeIcon className="py-4" icon={faCircleDot} style={{color: "#6290df",}} />
                  <p class="mb-4 font-semibold">Radiology</p>
                  <p class="text-sm text-[#636262]">
                  Illuminating Insight, Precision Imaging: Radiology Excellence for Informed Healthcare Solutions.
                  </p>
                </li>
                <li class="flex flex-col p-5 items-start">
                   <FontAwesomeIcon className="py-4" icon={faCircleDot} style={{color: "#6290df",}} />
                  <p class="mb-4 font-semibold">Psychiatry</p>
                  <p class="text-sm text-[#636262]">
                  Nurturing Mental Wellness: Compassionate Psychiatry Care for Your Emotional Health.
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
