import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";
import { Badge } from "antd";

import data from "./Datta";
import Carosel from "./Carosel";
import Deal1 from "./Deal1";
import Deal2 from "./Deal2";
import Deal3 from "./Deal3";
import News from "./News";
const Hometest = () => {
  const [dd, setdd] = useState(data);
  useEffect(() => {
    // Initialize AOS with your desired options
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds (3 seconds)
    });
    console.log(dd);
  }, []);

  return (
    <>
      <div className="w-100 ">
        <div class="  md:h-screen sm:h-48 border border-2 overflow-hidden">
          <div class=" w-full overflow-hidden rounded-none">
            <Carosel />
          </div>
        </div>
      </div>

      
      <Deal1 />
      <Deal2 />
      <Deal3 />


      <div className="scroll-animation  overflow-hidden bg-light-background">
        <div data-aos="flip-up" className="mt-10 mb-10  text-center 	">
          <h1 className="md:text-3xl text-dark-blue font-bold font-bold  sm:text-sm">
            POPULAR CATEGORIES
          </h1>
          <p className="md:text-1xl sm:text-xs mt-5 mb-10 underline underline-offset-8">
            Simplify Your Shopping Journey: Explore by Category
          </p>
        </div>

        <div className="w-full mt-10 grid grid-cols-4 gap-y-0 p-16 row-gap-0 sm:p-5   sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-4 xl:grid-cols-4 md:text-xl lg:text-2xl">
          {dd.map((item, index) => (
            <Link to={`${item.link}`}>
              <div
                className={`relative  ${
                  index < dd.length - 1 ? "border-r" : ""
                }`}
              >
                <div className="lg:h-80 sm:h-32 lg:w-full " key={item.id}>
                  <div className="lg:h-72 bg-dark-blue sm:h-28">
                    <img
                      src={`${item.imgu}`}
                      className={`  h-full hover:shadow-2xl  overflow-hidden w-full  hover:z-5 shadow-md hover:opacity-10 inset-0 hover:transition-all hover:duration-500 transition-all duration-500`}
                    />
                  </div>
                  <div className="h-8 bg-light-background sm:h-4 sm:text-xs lg:text-lg text-dark-blue text-center  ">
                    {item.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <News />

    </>
  );
};

export default Hometest;
