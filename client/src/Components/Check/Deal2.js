import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';
import data from "./Dealdata";

export default function Deal2() {
  const[product,setproduct]=useState(data)
    useEffect(()=>{
         // Initialize AOS with your desired options
    AOS.init({
        duration: 1000, // Duration of the animation in milliseconds (3 seconds)
      });
       console.log('deal 1 is mounted')
  }, []);

  const backgroundStyle = {
    backgroundImage: `url('')`,
    backgroundSize: 'cover', // You can adjust this property as needed
    // Other background properties can be added here
  };

  return (
    <div className='w-full bg-light h-5/6  pb-10 overflow-hidden' style={backgroundStyle}>
      <div>
        <h1 className='md:text-4xl mt-20 sm:text-xs ml-10 text-dark-blue  font-bold font-bold tracking-widest'>
        <div data-aos="zoom-in-right" className='md:text-3xl sm:text-xs mt-20 ml-30 text-dark-blue  font-bold font-bold tracking-widest'>Darily Deals </div>
        <div data-aos="zoom-in-left" > Kharedo.com</div>
         
        </h1>
      </div>
      <div className=''>
        <div className='w-full grid md:grid-cols-6 sm:grid-cols-2  gap-4 p-16 sm:p-5 md:text-xl lg:text-2xl'>
        
        {product.map((item, index) => (
  <div className='col-span-1' key={item.id}>
    <div className='w-42 h-60  text-dark-blue bg-light-background shadow-2xl text-1xl cursor-pointer mt-10 relative'>
      <Badge.Ribbon text={`${item.off}%`} color='cyan'>
        <img src={item.imgu} alt={item.title} className='h-44 w-full ' />
        <p className='pl-2'>{item.title}</p>
        <div className='flex justify-between '>
          <h1 className='pl-2'>{item.name}</h1>
          <h1 className='pr-2'>{item.price}</h1>
        </div>
      </Badge.Ribbon>
    </div>
  </div>
))}
    
         
       
      
     
       
        </div>
        <Link to={`dailydeals`} className='place-content-center grid'>
        <div data-aos="flip-down">
        <Link to={`dailydeals`} >
          <button className='border border-2 pt-2 pb-2 pl-5 pr-5 text-white bg-dark-blue hover:bg-black hover:duration-500 transition-all duration-500 hover:text-white hover:shadow-2xl'>
            Explore More Deals
          </button>
          </Link>
          </div>





        </Link>
      </div>
    </div>
  );
}
