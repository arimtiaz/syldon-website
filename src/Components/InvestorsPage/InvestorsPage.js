import React from "react";
import InvestorsData from "../../investors.json";
import Nav from "../Nav/Nav";

const Investors = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="bg-blue-500 flex-h-screen py-32">
        <h1 className="text-3xl font-semibold text-white">All Our Investors</h1>
      </div>
      <section>
        {/* <!-- Container --> */}
        <div class="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-10 lg:py-14 text-left">
          {/* <!-- Content --> */}
          <div class="grid justify-items-stretch md:mb-12 md:grid-cols-3 md:gap-4 lg:mb-16 lg:gap-6">
            {InvestorsData.map((investor) => {
              return (
                <div className="bg-white shadow-md rounded-xl lg:p-6 sm:p-2">
                  <div class=" p-2 flex flex-col gap-4 rounded-md px-4 py-8 md:p-0">
                    <img
                      src={investor.img}
                      className="h-56 inline-block w-full object-cover"
                      alt=""
                    />
                    <div class="flex flex-col items-start py-4">
                      <p class="mb-2 text-xl font-bold md:text-2xl">
                        {investor.name}
                      </p>
                      <div class="text-blue-800 text-lg">
                        <p>{investor.department}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;
