import { faKitMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import illustration1 from "../../images/illustrations1.png";
import illustration2 from "../../images/infertility.jpeg";
import illustration3 from "../../images/illustrations3.png";
import illustration4 from "../../images/illustrations4.png";
import illustration5 from "../../images/NICU.jpeg";
import illustration6 from "../../images/cathlab.jpeg";

const Feature = () => {
  return (
    <div>
      <section>
        {/* <!-- Container --> */}
        <div class="mx-auto w-full max-w-6xl px-8 py-24 md:px-10 md:py-24 lg:py-24">
          {/* <!-- Title --> */}
          <div class="flex flex-col items-center text-center">
            <h2 class="text-2xl font-bold md:text-4xl text-white">
              Innovative Healthcare Solutions: Explore Our Distinctive Services
              for Your Well-being.
            </h2>
            <p class="mb-8 mt-4 max-w-2xl text-base text-gray-200 md:mb-12 md:text-lg lg:mb-16">
              Experience a new frontier in healthcare excellence as we showcase
              unparalleled services at Syldon Hospital, uniquely designed to
              prioritize your well-being.
            </p>
          </div>
          {/* <!-- Features Content --> */}
          <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6 ">
            {/* <!-- Features Item --> */}
            <div class=" grid gap-6 rounded-md border border-solid border-blue-200 bg-gray-50 p-8 md:p-10">
              <img src={illustration1} className="w-24 mx-auto" alt="" />
              <h3 class="text-xl font-semibold">Environment</h3>
              <p class="text-sm text-gray-500">
                At Syldon Hospital, we prioritize your well-being in an
                exceptional care environment, where your health takes center
                stage
              </p>
            </div>
            {/*  */}
            <div class=" grid gap-6 rounded-md border border-solid border-blue-200 bg-gray-50 p-8 md:p-10">
              <img src={illustration2} className="w-24 mx-auto" alt="" />
              <h3 class="text-xl font-semibold">Infertility Center</h3>
              <p class="text-sm text-gray-500">
                Introducing Sylhet's First Infertility Center: Pioneering
                Reproductive Solutions with Compassion and Expertise.
              </p>
            </div>
            {/*  */}
            <div class=" grid gap-6 rounded-md border border-solid border-blue-200 bg-gray-50 p-8 md:p-10">
              <img src={illustration3} className="w-24 mx-auto" alt="" />
              <h3 class="text-xl font-semibold">Advanced Departments</h3>
              <p class="text-sm text-gray-500">
                1. Neonatal Intensive Care Unit (NICU) <br></br>
                2. Pediatric Intensive Care <br></br>
                3. Unit (PICU) Coronary Care Unit (CCU) Intensive Care Unit
                (ICU) <br></br>
                4. Renal Dialysis Unit <br></br>
              </p>
            </div>
            {/*  */}
            <div class=" grid gap-6 rounded-md border border-solid border-blue-200 bg-gray-50 p-8 md:p-10">
              <img src={illustration4} className="w-24 mx-auto" alt="" />
              <h3 class="text-xl font-semibold">Specialized Clinics</h3>
              <p class="text-sm text-gray-500">
                1. Community Clinic: <br></br>
                • Physical Therapy <br></br>
                • Speech Therapy <br></br>
                • Hearing <br></br>
                2. Problems Asthma Clinic <br></br>
                3. Cardiac Clinic <br></br>
                4. Diabetic Clinic <br></br>
              </p>
            </div>
            {/*  */}
            <div class=" grid gap-6 rounded-md border border-solid border-blue-200 bg-gray-50 p-8 md:p-10">
              <img src={illustration5} className="w-24 mx-auto" alt="" />
              <h3 class="text-xl font-semibold">High-tech ICU, NICU, PICU</h3>
              <p class="text-sm text-gray-500">
                Precision Healthcare at Its Pinnacle: Explore Our High-Tech ICU,
                NICU, and PICU for Specialized and Compassionate Critical Care.
              </p>
            </div>
            {/*  */}
            <div class=" grid gap-6 rounded-md border border-solid border-blue-200 bg-gray-50 p-8 md:p-10">
              <img src={illustration6} className="w-24 mx-auto" alt="" />
              <h3 class="text-xl font-semibold">Specialized Cathlab</h3>
              <p class="text-sm text-gray-500">
                Revolutionizing Cardiac Care: Experience Precision in Our
                Specialized Cath Lab for Advanced Diagnosis and Intervention.
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
