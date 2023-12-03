import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";
import d from "./data";

export default function Deal1() {
  const [data, setdata] = useState(d);

  useEffect(() => {
    // Initialize AOS with your desired options
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds (3 seconds)
    });
  }, []);

  return (
    <div className="w-full bg-dark-blue h-auto  pb-10 overflow-hidden">
      <div>
        <h1 className="md:text-4xl mt-20 sm:text-xs ml-10 text-white font-bold tracking-widest">
          <div
            data-aos="zoom-in-right"
            className="md:text-3xl sm:text-xs mt-20 ml-30 text-white font-bold tracking-widest"
          >
            Top Deals on{" "}
          </div>
          <div data-aos="zoom-in-left"> Kharedo.com</div>
        </h1>
      </div>
      <div className="">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 p-16 sm:p-5 md:text-xl lg:text-2xl">
          {data.map((item, index) => (
            <div className="col-span-1" key={item.id}>
              <div className="w-80 h-auto text-white mt-10 relative overflow-hidden">
                <Badge.Ribbon
                  text={`${item.sundayDeal.discount}%`}
                  color="cyan"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60"
                  />
                  <p className="pl-2">{item.category}</p>
                  <div className="flex justify-between p-2">
                    <Link to={`productdetail/${item.id}`}>
                      <h1 className="">{item.name}</h1>
                      <h1 className="">{item.price}</h1>
                    </Link>
                  </div>
                </Badge.Ribbon>
              </div>
            </div>
          ))}
        </div>
        <Link to={`/dailydeals`} className="place-content-center grid">
          <div data-aos="flip-down">
            <button className=" pt-2 pb-2 pl-5 pr-5 text-white bg-dark-blue hover:bg-black hover:duration-500 transition-all duration-500 hover:text-white hover:shadow-2xl">
              Explore More Deals
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
