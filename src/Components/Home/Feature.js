import { faKitMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import illustration1 from '../../images/illustrations1.png'
import illustration2 from '../../images/illustrations2.png'
import illustration3 from '../../images/illustrations3.png'
import illustration4 from '../../images/illustrations4.png'
import illustration5 from '../../images/illustrations5.png'
import illustration6 from '../../images/illustrations6.png'

const Feature = () => {
  return (
    <div>
      <section>
        {/* <!-- Container --> */}
        <div class="mx-auto w-full max-w-6xl px-8 py-24 md:px-10 md:py-24 lg:py-24">
          {/* <!-- Title --> */}
          <div class="flex flex-col items-center text-center">
            <h2 class="text-2xl font-bold md:text-4xl text-white">
              Make every step user-centric
            </h2>
            <p class="mb-8 mt-4 max-w-xl text-base text-gray-200 md:mb-12 md:text-lg lg:mb-16">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit amet luctus magna fringilla urna
            </p>
          </div>
          {/* <!-- Features Content --> */}
          <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6 ">
            {/* <!-- Features Item --> */}
            <div class=" grid gap-6 rounded-md border border-solid border-blue-200 bg-gray-50 p-8 md:p-10">
              <img src={illustration1} className="w-24 mx-auto" alt="" />
              <h3 class="text-xl font-semibold">Environment</h3>
              <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/*  */}
            <div class=" grid gap-6 rounded-md border border-solid border-blue-200 bg-gray-50 p-8 md:p-10">
              <img src={illustration2} className="w-24 mx-auto" alt="" />
              <h3 class="text-xl font-semibold">Infertility Center</h3>
              <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/*  */}
            <div class=" grid gap-6 rounded-md border border-solid border-blue-200 bg-gray-50 p-8 md:p-10">
              <img src={illustration3} className="w-24 mx-auto" alt="" />
              <h3 class="text-xl font-semibold">Advanced Departments</h3>
              <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/*  */}
            <div class=" grid gap-6 rounded-md border border-solid border-blue-200 bg-gray-50 p-8 md:p-10">
              <img src={illustration4} className="w-24 mx-auto" alt="" />
              <h3 class="text-xl font-semibold">Institute Trained Staffs</h3>
              <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/*  */}
            <div class=" grid gap-6 rounded-md border border-solid border-blue-200 bg-gray-50 p-8 md:p-10">
              <img src={illustration5} className="w-24 mx-auto" alt="" />
              <h3 class="text-xl font-semibold">High-tech ICU, NICU, PICU</h3>
              <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/*  */}
            <div class=" grid gap-6 rounded-md border border-solid border-blue-200 bg-gray-50 p-8 md:p-10">
              <img src={illustration6} className="w-24 mx-auto" alt="" />
              <h3 class="text-xl font-semibold">Specialized Cathlab</h3>
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
