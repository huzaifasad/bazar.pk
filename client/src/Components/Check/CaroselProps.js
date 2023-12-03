import React from 'react';
import { Carousel } from 'antd';

const App = () => (
  <Carousel autoplay className="w-full md:h-screen sm:h-48">
    <div className="md:h-screen sm:h-48 bg-blue-700 text-white flex items-center justify-center">
      <img src='https://img.freepik.com/premium-photo/3d-black-gift-boxes-with-red-yellow-bows-shopping-bags-percent-sign-minimalistic-realistic-style-banner-advertising-sale-black-friday-new-year-3d-rendering_653154-393.jpg?size=626&ext=jpg&ga=GA1.1.293752515.1696849887&semt=ais' className='w-full h-full overflow-hidden'/>
      <h3 className="text-center text-2xl">1</h3>
    </div>
    <div className="md:h-screen  sm:h-48 bg-blue-700 text-white flex items-center justify-center">
      <img src='https://img.freepik.com/premium-photo/sign-with-word-sale-green-white-paper-bags-it-3d-render_360032-42.jpg?size=626&ext=jpg&ga=GA1.1.293752515.1696849887&semt=ais' className='w-full h-full overflow-hidden'/>
      <h3 className="text-center text-2xl">2</h3>
    </div>
    <div className="md:h-screen sm:h-48 bg-blue-700 text-white flex items-center justify-center">
      <img src='https://img.freepik.com/premium-photo/sign-with-word-sale-green-white-paper-bags-it-3d-render_360032-42.jpg?size=626&ext=jpg&ga=GA1.1.293752515.1696849887&semt=ais'  className='w-full h-full overflow-hidden'/>
      <h3 className="text-center text-2xl">3</h3>
    </div>
    <div className="md:h-screen sm:h-48 bg-blue-700 text-white flex items-center justify-center">
      <img src='https://img.freepik.com/premium-photo/sign-with-word-sale-green-white-paper-bags-it-3d-render_360032-42.jpg?size=626&ext=jpg&ga=GA1.1.293752515.1696849887&semt=ais'  className='w-full h-full overflow-hidden'/>
      <h3 className="md:text-center text-2xl">4</h3>
    </div>
  </Carousel>
);

export default App;
