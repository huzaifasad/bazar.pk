




import React from "react";
import { Carousel } from "antd";

const CaroelProps = ({ images }) => (
  <Carousel autoplay className="w-full h-full">
    {images.map((imageUrl, index) => (
      <div key={index} className="w-full h-full relative overflow-hidden">
        <style>{`
          .zoom-container-${index}:hover .zoom-image-${index} {
            transform: scale(1.2);
          }
        `}</style>
        <div
          className={`w-full h-full object-cover zoom-container-${index}`}
        >
          <img
            src={imageUrl}
            className={`w-full h-full object-cover transition-transform duration-300 zoom-image-${index}`}
            alt={`carousel-image-${index}`}
          />
        </div>
      </div>
    ))}
  </Carousel>
);

export default CaroelProps;
























// import React from "react";
// import { Carousel } from "antd";

// const CaroelProps = ({ images }) => (
//   <Carousel autoplay className="w-full h-full">
//     {images.map((imageUrl, index) => (
//       <div key={index} className="w-full h-full flex items-center justify-center">
//         <img
//           src={imageUrl}
//           className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
//           alt={`carousel-image-${index}`}
//         />
//       </div>
//     ))}
//   </Carousel>
// );

// export default CaroelProps;
