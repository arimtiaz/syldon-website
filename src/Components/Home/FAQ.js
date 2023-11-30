import { Accordion } from "flowbite-react";
import React from "react";

const FAQ = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
      <div class="flex flex-col items-center text-center">
        <h2 class="text-2xl font-bold md:text-4xl text-black">
          FAQ – Navigating Your Healthcare Concerns.
        </h2>
        <p class="mb-8 mt-4 max-w-2xl text-base text-gray-600 md:mb-12 md:text-lg lg:mb-16">
          Find quick answers to your healthcare questions in Syldon Hospital's
          FAQ. Your guide to a seamless experience, from appointments to billing
          and beyond.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <Accordion className="bg-white text-left ">
          <Accordion.Panel>
            <Accordion.Title className="bg-white text-black">
            What specialties does Syldon Hospital offer?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-700">
              Syldon Hospital provides a wide range of specialties, including but not limited to cardiology, orthopedics, neurology, oncology, and gynecology. You can find more information on our website or by contacting our main information line.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-white text-black">
            How can I obtain my medical records from Syldon Hospital?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-700">
              You can request your medical records by contacting our medical records department. The request can typically be submitted online, in person, or through mail, following the hospital's guidelines and procedures.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-white text-black">
            How can I provide feedback or share my experience with Syldon Hospital?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-700">
              We value your feedback. You can share your experience or provide feedback through our online feedback form on the website, or you may contact our patient relations department directly.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
