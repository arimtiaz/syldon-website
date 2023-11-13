import React from "react";

const Facts = () => {
  return (
    <div>
      {/* <!-- Container --> */}
      <div class="px-5 ">
        {/* <!-- Component --> */}
        <div class="mx-auto flex w-full max-w-7xl flex-col rounded-2xl bg-blue-800 py-8 text-white">
          {/* <!-- Facts Div --> */}
          <div class="grid h-full w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
            {/* <!-- Fact Item --> */}
            <div class="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
              <h4 class="mb-4 text-2xl font-bold md:text-3xl">200+</h4>
              <p class="text-sm">Blocks</p>
            </div>
            {/* <!-- Fact Item --> */}
            <div class="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
              <h4 class="mb-4 text-2xl font-bold md:text-3xl">45</h4>
              <p class="text-sm">Templates</p>
            </div>
            {/* <!-- Fact Item --> */}
            <div class="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
              <h4 class="mb-4 text-2xl font-bold md:text-3xl">1500+</h4>
              <p class="text-sm">Customers</p>
            </div>
            {/* <!-- Fact Item --> */}
            <div class="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
              <h4 class="mb-4 text-2xl font-bold md:text-3xl">890</h4>
              <p class="text-sm">Support Tickets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
