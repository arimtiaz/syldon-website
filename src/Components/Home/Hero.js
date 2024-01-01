import React from 'react';
import HeroImg from '../../images/Hero_Image.png'

const Hero = () => {
    return (
        <div>
            
		<header>
		  {/* <!-- Hero Container --> */}
		  <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-16 md:py-24 lg:py-32 text-left">
		    {/* <!-- Component --> */}
		    <div class="grid grid-cols-1 items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
		      {/* <!-- Hero Content --> */}
		      <div class="flex flex-col">
		        {/* <!-- Hero Title --> */}
		        <h1 class="mb-4 text-4xl font-bold md:text-6xl"> Welcome To Syldon Hospital</h1>
		        <p class="mb-6 max-w-lg text-base text-[#636262] md:mb-10 lg:mb-6"> Leaders in care, Syldon Hospital is Sylhet's largest private hospital. Our foreign consultants and modern facilities redefine healthcare, ensuring your well-being is at the heart of all we do</p>
		        {/* <!-- Hero Button --> */}
		        <div class="flex items-center">
                    <a href="" className='mr-5 flex items-center bg-[#276ef1] px-8 py-4 font-semibold text-white md:mr-6 lg:mr-8 rounded-md'><p class="font-bold">Let's Talk</p></a>
		          <a href="https://www.facebook.com/reel/987584262345445" class="flex font-bold" target="_blank">
		            <p class="text-black">Watch Video</p>
		            <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357752f71727ed3edf9213b_Vector (5).svg" alt="" class="ml-2 inline-block" />
		          </a>
		        </div>
		      </div>
		      {/* <!-- Hero Image --> */}
		      <img src={HeroImg} alt="" class="inline-block h-full w-full max-w-[640px]" />
		    </div>
		  </div>
		</header>
        </div>
    );
};

export default Hero;