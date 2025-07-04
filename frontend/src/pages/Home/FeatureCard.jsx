import React, { useState } from 'react';
import DataFeatures from './DataFeatures';

function FeatureCard() {
  const data = DataFeatures();
  const [hoveredIndex, setHoveredIndex] = useState(0); 

  return (
    <div className="h-[70vh] flex p-4 text-white  bg-white rounded-2xl">
      {data[0].ImgSection.map((img, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={index}
            className={`
              transition-all duration-500 ease-in-out h-full border-black shadow-white shadow-2xl
              ${
                isHovered
                  ? `w-2/3  bg-cover bg-no-repeat p-4 rounded-3xl`
                  : 'bg-black w-16 p-4 rounded-3xl'
              }
            `}
             style={{
      backgroundImage: isHovered
        ? `url(${data[0].BgImgSection[index]})`
        : 'none',
        }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(0)}
          >
            {isHovered ? (
              <>
                <img
                  src={img}
                  alt={`Feature ${index}`}
                  className="w-full h-40 object-cover object-center rounded-md mb-3"
                />
                <p>{data[0].DataSection[index]}</p>
              </>
            ) : (
                <div className='h-full w-full flex flex-col justify-between'>
                <p className="text-white bg-black bg-opacity-50 rounded-full text-center">
                {index + 1}
              </p>
              <h3 className='text-gray-500 text-2xl '><i className="ri-arrow-right-wide-fill"></i></h3>
                <div>

                </div>
                </div>
              
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FeatureCard;
