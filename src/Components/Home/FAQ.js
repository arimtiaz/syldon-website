import { Accordion } from "flowbite-react";
import React from "react";

const FAQ = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
      <div class="flex flex-col items-center text-center">
            <h2 class="text-2xl font-bold md:text-4xl text-black">
              Make every step user-centric
            </h2>
            <p class="mb-8 mt-4 max-w-xl text-base text-gray-600 md:mb-12 md:text-lg lg:mb-16">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit amet luctus magna fringilla urna
            </p>
          </div>
      <div className="max-w-4xl mx-auto">
        <Accordion className="bg-white text-left ">
          <Accordion.Panel>
            <Accordion.Title className="bg-white text-black">
              What is Flowbite?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-700">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-white text-black">
              What is Flowbite?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-700">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-white text-black">
              What is Flowbite?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-700">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
