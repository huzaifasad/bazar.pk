import React, { useEffect, useState } from "react";
import { Carousel } from "@material-tailwind/react";
import data from "../Check/Datta";
import data2 from "../Check/Data2";

export default function Home() {
  const [datas, setdatas] = useState(data);
  const [datas2, setdatas2] = useState(data2);
  const handleClick = (product) => {
    console.log("Clicked Product:", product);
  };
  const imag = [
    {
      url: "https://cartproshop.com/demo/public/images/storefront/three_column_full_width_banners/0fDYh0O2sH.jpg",
    },
    {
      url: "https://cartproshop.com/demo/public/images/storefront/three_column_full_width_banners/wpqwCT51dE.jpg",
    },
    {
      url: "https://cartproshop.com/demo/public/images/storefront/three_column_full_width_banners/lIG8AmDGIw.jpg",
    },
  ];
  useEffect(() => {
    console.log(datas);
    console.log(datas2);
  }, []);

  return (
    <div className="">
      <div className="grid grid-rows-3 grid-flow-col gap-1 sm:gap-3 h-80">
        <div className="row-span-3 col-span-12 sm:col-span-7 custom-carousel-width h-80 sm:h-auto overflow-hidden">
          <Carousel transition={{ duration: 2 }} className="rounded-none">
            <img
              src="https://m.media-amazon.com/images/I/71tRx1QehaL._SX3000_.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://icms-image.slatic.net/images/ims-web/97f79f52-affb-4925-bb2e-c3fd00ee0028.jpg"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://icms-image.slatic.net/images/ims-web/3b59c73b-0a07-4bb4-899b-5a9e44c59567.jpg"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
      </div>
      <div className="font-bold text-3xl mt-4 mb-5 text-center underline ">
        <h1>Top Category</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 ml-5 mr-5 mb-10 ">
        {datas.map((item, index) => (
          <div
            key={item.id}
            className="max-w-xs mx-auto bg-white shadow-lg rounded-none hover:bg-customRed cursor-pointer hover:text-text-ligh hover:border-3 border overflow-hidden"
          >
            <img
              src={item.imgu}
              alt={`Product Image ${index}`}
              className="w-200 h-40 object-cover"
            />
            <div className="px-4 py-2">
              <h2 className="text-lg font-semibold text-gray-800 ">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="font-bold text-3xl mt-4 mb-5 text-center underline">
        <h1>Today Deals</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 ml-5 mr-5 mb-10">
        {imag.map((item, index) => (
          <div
            key={item.id}
            className="max-w-xs mx-auto bg-white shadow-lg rounded-none overflow-hidden"
          >
            <img
              src={item.url}
              alt={`Product Image ${index}`}
              className="w-full h-200 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Random */}

      <div className="font-bold text-3xl mt-4 mb-5 text-center underline">
        <h1>Top Category</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 ml-5 mr-5 mb-10">
        {data2.map((item, index) => (
          <div
            key={item.Id}
            className="max-w-xs mx-auto bg-white shadow-lg rounded-none overflow-hidden"
          >
            <img
              src={item.img}
              alt={`Product Image ${index}`}
              className="w-full h-200 object-cover"
            />
            <div className="px-4 py-2">
              <h2 className="text-lg font-semibold text-gray-800 ">
                {item.Title}
              </h2>
            </div>
            <div className="px-4 py-2">
              <p
                className="text-lg font-semibold text-gray-800 pb-[-1rem] cursor-pointer"
                onClick={() => handleClick(item)}
              >
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
