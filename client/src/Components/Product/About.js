import React from 'react';
import Testimonial from './Testimonial';
import MyProfile from './MyProfile';

export default function About() {
  return (
    <div className='relative'>
      {/* Top Section */}
      <div className="flex items-center justify-center h-64 bg-dark-blue relative">
        <h1 className="lg:text-4xl sm:text-xs md:text-xs font-bold text-white absolute top-2/4 transform -translate-y-2/4 z-10">About Kharedo.pk</h1>
      </div>

      {/* Bottom Section */}
      <div className='flex justify-center w-full '>
        <div className='w-4/5 bg-white z-20 border border-2 p-8 mt-12 -mt-20 z-1 shadow-lg shadow-cyan-500/50 '>
          <h1 className='lg:text-3xl sm:text-xs md:text-xs font-bold text-dark-blue mb-4 mt-2'>WHO WE ARE</h1>
          <p className="text-gray-700 font-medium leading-7 sm:text-xs md:text-xs">
  In the realm of e-commerce, <span className="text-dark-blue hover:underline cursor-pointer font-semibold">
  Kharedo.pk&nbsp;
</span>
    is a trailblazer, redefining online shopping with innovation and finesse. Our cutting-edge technological infrastructure ensures a seamless, secure, and user-friendly experience. Leveraging advanced algorithms, we personalize recommendations for a bespoke shopping journey. Committed to data security, efficient order fulfillment, and AI-driven customer support, Kharedo.pk stands as a paragon of technological excellence, setting new standards in online retail.
</p>
<h1 className='lg:text-3xl sm:text-xs md:text-xs font-bold text-dark-blue mb-4 mt-4'>WE'RE DIFFERENT THAN THE REST
</h1>
<p className="text-gray-700 font-medium leading-7 sm:text-xs md:text-xs">
Kharedo.pk redefines e-commerce with technological excellence, offering a distinctive and personalized shopping experience. Unlike others, we prioritize cutting-edge innovation, data security, and efficient customer support. We're not just different; we're setting new standards in online retail.
</p>

<Testimonial/>
<h1 className='lg:text-3xl sm:text-xs md:text-xs font-bold text-dark-blue text-center'> MEET OUR TEAM
</h1>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

  <MyProfile />
</div>


        </div>
      </div>
    </div>
  );
}
