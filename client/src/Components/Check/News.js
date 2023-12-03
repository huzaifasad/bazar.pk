import { Button, Input, Select, Space } from 'antd';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';
import { useEffect } from 'react';


const News = () => {
   
  useEffect(() => {
    // Initialize AOS with your desired options
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds (3 seconds)
    });
  }, []);
  return(
    <>
    <div className='w-full h-80 text-center pt-20 bg-light-blue'>
  <Space direction="vertical" size="middle" >
  
  <h1 className='md:text-3xl text-white font-bold font-bold tracking-widest sm:text-sm'>NEWSLETTER

          </h1>
    <Space.Compact
      style={{
        width: '100%',
      }}
    >
      
      <Input placeholder='Your Email Here!'  className='rounded-none w-80'/>
      <button className='border border-2 pt-2 pb-2 pl-5 pr-5 text-white bg-dark-blue hover:bg-black hover:duration-500 transition-all duration-500 hover:text-white hover:shadow-2xl'>
            Send Email
          </button>
  
    </Space.Compact>
 
  </Space>
  <h1 className=' text-1xl text-white mt-10 tracking-widest '>Sneak a Peek at Exclusive Deals! Be the First to Know - Just Enter Your Email!</h1>

  </div>
  </>
  );
};

export default News;