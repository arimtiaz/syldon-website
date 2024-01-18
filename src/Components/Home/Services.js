import React from "react";
import ServicesImg from "../../images/ServicesImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faCircleDotDot } from "@fortawesome/free-solid-svg-icons";
import urology from "../../images/Urology.png";
import medical from "../../images/Medical.png";
import neurology from "../../images/Neurology.png";
import cardio from "../../images/Cardio.png";
import gynae from "../../images/Gynae.png";
import ortho from "../../images/Ortho.png";
import onco from "../../images/Oncology.png";
import radio from "../../images/radio.png";

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
                Explore Our Specialized Departments: Tailored Care for Your
                Health Journey
              </h2>
              <ul class="grid max-w-2xl grid-cols-2 sm:gap-5 lg:max-w-none">
                <li class="flex flex-col p-5 items-start">
                  {/* <FontAwesomeIcon
                    className="py-4"
                    icon={faCircleDot}
                    style={{ color: "#6290df" }}
                  /> */}
                  <img src={urology} className="w-2/4" alt="" />
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <p class="mb-4 font-semibold">Urology</p>
                  <p class="text-sm text-[#636262]">
                    Comprehensive Urological Care: Nurturing Your Urinary Health
                    with Expertise and Compassion
                  </p>
                </li>
                <li class="flex flex-col p-5 items-start">
                  {/* <FontAwesomeIcon
                    className="py-4"
                    icon={faCircleDot}
                    style={{ color: "#6290df" }}
                  /> */}
                  <img src={medical} className="w-2/4" alt="" />
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <p class="mb-4 font-semibold">Medical</p>
                  <p class="text-sm text-[#636262]">
                    Holistic Medical Excellence: Fostering Your Wellness Journey
                    with Expertise and Compassion
                  </p>
                </li>
                <li class="flex flex-col p-5 items-start">
                  {/* <FontAwesomeIcon
                    className="py-4"
                    icon={faCircleDot}
                    style={{ color: "#6290df" }}
                  />
                   */}
                   <img src={neurology} className="w-2/4" alt="" />
                  <p class="mb-4 font-semibold">Psychiatry</p>
                  <p class="text-sm text-[#636262]">
                    Navigating Neurological Wellness: Precision Care for Your
                    Brain and Nervous System.
                  </p>
                </li>
                <li class="flex flex-col p-5 items-start">
                  {/* <FontAwesomeIcon
                    className="py-4"
                    icon={faCircleDot}
                    style={{ color: "#6290df" }}
                  /> */}
                   <img src={cardio} className="w-2/4" alt="" />
                  <p class="mb-4 font-semibold">Cardiology</p>
                  <p class="text-sm text-[#636262]">
                    Heart Health Excellence: Elevating Cardiac Care with
                    Expertise and Compassion.
                  </p>
                </li>
                <li class="flex flex-col p-5 items-start">
                  {/* <FontAwesomeIcon
                    className="py-4"
                    icon={faCircleDot}
                    style={{ color: "#6290df" }}
                  /> */}
                   <img src={gynae} className="w-2/4" alt="" />
                  <p class="mb-4 font-semibold">Gynaecology</p>
                  <p class="text-sm text-[#636262]">
                    Empowering Women's Health: Compassionate Gynecological Care
                    Tailored to Your Well-being.
                  </p>
                </li>
                <li class="flex flex-col p-5 items-start">
                  {/* <FontAwesomeIcon
                    className="py-4"
                    icon={faCircleDot}
                    style={{ color: "#6290df" }}
                  /> */}
                  <img src={ortho} className="w-2/4" alt="" />
                  <p class="mb-4 font-semibold">Orthopedics</p>
                  <p class="text-sm text-[#636262]">
                    Revitalizing Movement, Restoring Strength: Orthopedic
                    Excellence for Your Active Lifestyle.
                  </p>
                </li>
                <li class="flex flex-col p-5 items-start">
                  {/* <FontAwesomeIcon
                    className="py-4"
                    icon={faCircleDot}
                    style={{ color: "#6290df" }}
                  /> */}
                  <img src={onco} className="w-2/4" alt="" />
                  <p class="mb-4 font-semibold">Oncology</p>
                  <p class="text-sm text-[#636262]">
                    Transformative Oncology Care: Focused on Healing, Empowering
                    Your Cancer Journey.
                  </p>
                </li>
                <li class="flex flex-col p-5 items-start">
                  {/* <FontAwesomeIcon
                    className="py-4"
                    icon={faCircleDot}
                    style={{ color: "#6290df" }}
                  /> */}
                  <img src={radio} className="w-2/4" alt="" />
                  <p class="mb-4 font-semibold">Radiology</p>
                  <p class="text-sm text-[#636262]">
                    Illuminating Insight, Precision Imaging: Radiology
                    Excellence for Informed Healthcare Solutions.
                  </p>
                </li>
                <li class="flex flex-col p-5 items-start">
                  <FontAwesomeIcon
                    className="py-4"
                    icon={faCircleDot}
                    style={{ color: "#6290df" }}
                  />
                  <p class="mb-4 font-semibold">Special New Departments</p>
                  <p class="text-sm text-[#636262]">
                    1. Elderly care unit <br></br>
                    2. Fertility Clinic <br></br>
                    3.Neurosurgical unit  <br></br>
                    4. Antenatal care services for pregnancy care <br></br>
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
