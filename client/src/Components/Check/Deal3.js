import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";
import d from "./data";

export default function Deal3() {
  const [data, setdata] = useState(d);

  useEffect(() => {
    // Initialize AOS with your desired options
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds (3 seconds)
    });
    console.log("deal 1 is mounted");

    ///deals
  }, []);
  return (
    <div className="w-full  h-5/6 bg-light-background pb-10 overflow-hidden">
      <div>
        <h1 className="md:text-4xl mt-20 sm:text-xs ml-10 text-dark-blue font-bold font-bold tracking-widest">
          <div
            data-aos="zoom-in-right"
            className="md:text-3xl sm:text-xs mt-20 ml-30 text-dark-blue font-bold font-bold tracking-widest"
          >
            Buy Our Mysterious Boxes Nows and Save upto 70%
          </div>
          <div data-aos="zoom-in-left" className="md:text-lg">
            Why You Waiting Buy and Open Your Box Now!
          </div>
        </h1>
      </div>
      <div className="">
        <div className="w- grid md:grid-cols-4 sm:grid-cols-2  gap-4 p-16 sm:p-5 md:text-xl lg:text-2xl">
        {data.map((item, index) => (
        
          <div className="col-span-1"  key={item.id}>
            <div className="w-42 h-96  text-dark-blue mt-10 relative">
              <Badge.Ribbon text="50%" color="cyan">
                <img src={`https://img.freepik.com/free-photo/mystery-box-collage_23-2150061736.jpg?size=626&ext=jpg&ga=GA1.1.293752515.1696849887&semt=ais`} alt=".." className="h-80 " />
                <p className="pl-2">{item.category}</p>
                <div className="flex justify-between">
                  <h1 className="pl-2">{item.name}</h1>
                  <h1 className="pr-2">{item.price}</h1>
                </div>
              </Badge.Ribbon>
            </div>
          </div>
            ))}
  
        
        </div>
        <Link to={``} className="place-content-center grid">
          <div data-aos="flip-down">
            <button className="border border-2 pt-2 pb-2 pl-5 pr-5 text-white bg-dark-blue hover:bg-black hover:duration-500 transition-all duration-500 hover:text-white hover:shadow-2xl">
              Explore More Deals
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
