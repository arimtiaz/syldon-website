import React from "react";
import ServicesImg from "../../images/ServicesImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import cardiology from "../../images/cardiology.jpeg";
import respiratory from "../../images/respiratory.jpeg";
import nephrology from "../../images/nephrology.jpeg";
import gynae from "../../images/gynae-obs.jpeg";
import gastroenterology from "../../images/gastoenterology.jpeg";
import ent from "../../images/ent.jpeg";
import hematogy from "../../images/hematogy-oncology.jpeg";
import geriatrics from "../../images/geriatics.jpeg";
import pediatrics from "../../images/pediatrics.jpeg";
import infertility from "../../images/infertility.jpeg";
import neurology from "../../images/neurology.jpeg";
import ct from "../../images/ct.jpeg";
import mri from "../../images/mri.jpeg";
import ultrasound from "../../images/ultrasound.jpeg";
import orthopedics from "../../images/orthopedics.jpeg";

const servicesData = [
  {
    image: cardiology,
    title: "Cardiology",
    description:
      "Specialized care for heart diseases, including diagnosis, treatment, and prevention strategies.",
  },
  {
    image: respiratory,
    title: "Respiratory",
    description:
      "Advanced treatment for respiratory disorders such as asthma, COPD, and lung infections.",
  },
  {
    image: nephrology,
    title: "Nephrology",
    description:
      "Expert care for kidney diseases, including dialysis and kidney transplantation.",
  },
  {
    image: gastroenterology,
    title: "Gastroenterology",
    description:
      "Comprehensive care for digestive system disorders, including GI endoscopy and surgery.",
  },
  {
    image: ent,
    title: "ENT & EYE",
    description:
      "Specialized care for ear, nose, throat, and eye disorders, including surgeries and treatments.",
  },
  {
    image: hematogy,
    title: "Hematology & Oncology",
    description:
      "Advanced treatment for blood disorders and cancer, including chemotherapy and immunotherapy.",
  },
  {
    image: geriatrics,
    title: "Geriatrics",
    description:
      "Specialized care for elderly patients, including management of age-related health conditions.",
  },
  {
    image: pediatrics,
    title: "Pediatrics",
    description:
      "Comprehensive healthcare for children, including preventive care and treatment of childhood illnesses.",
  },
  {
    image: neurology,
    title: "Neurology",
    description:
      "Expert care for neurological disorders, including stroke, epilepsy, and movement disorders.",
  },
  {
    image: ct,
    title: "CT Scan",
    description:
      "Advanced imaging technique using computed tomography for diagnosing various medical conditions.",
  },
  {
    image: mri,
    title: "MRI Scan",
    description:
      "Advanced imaging technique using magnetic resonance imaging for detailed visualization of internal body structures.",
  },
  {
    image: ultrasound,
    title: "Ultrasound",
    description:
      "Non-invasive imaging technique using high-frequency sound waves for diagnostic purposes.",
  },
  {
    image: orthopedics,
    title: "Orthopedics",
    description:
      "Specialized care for musculoskeletal disorders, including joint replacement and sports medicine.",
  },
];

const NewDepartments = () => (
  <li className="flex flex-col p-5 items-start">
    <FontAwesomeIcon
      className="py-4"
      icon={faCircleDot}
      style={{ color: "#6290df" }}
    />
    <p className="mb-4 font-semibold">Special New Departments</p>
    <p className="text-sm text-[#636262]">
      1. Elderly care unit <br />
      2. Fertility Clinic <br />
      3. Neurosurgical unit <br />
      4. Antenatal care services for pregnancy care <br />
    </p>
  </li>
);

const Services = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-12 md:px-10 md:py-16 lg:py-20 text-left">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
        <div className="py-20">
          <h2 className="mb-6 text-2xl font-bold md:mb-10 md:text-4xl lg:mb-12">
            Explore Our Specialized Departments: Tailored Care for Your Health Journey
          </h2>
          <ul className="grid max-w-2xl grid-cols-2 sm:gap-5 lg:max-w-none">
            {servicesData.map((service, index) => (
              <li key={index} className="flex flex-col p-5 items-start">
                <img src={service.image} className="w-2/4 mb-4 rounded-md border-4 border-sky-500" alt="" />
                <p className="mb-4 font-semibold">{service.title}</p>
                <p className="text-sm text-[#636262]">{service.description}</p>
              </li>
            ))}
            <NewDepartments />
          </ul>
        </div>
        <div className="h-full w-full">
          <img
            src={ServicesImg}
            alt=""
            className="mx-auto inline-block h-full w-full max-w-[640px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
