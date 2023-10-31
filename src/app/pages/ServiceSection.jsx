"use client"
import { Image } from "@nextui-org/react";
import React, { useState, useEffect } from 'react';
import { servicesData } from '../components/ServiceData'

function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="services" className='items-center py-16 text-center min-h-min'>
      <h1 className='text-[#623375] text-7xl font-bold'>Our Services</h1>
      <p className='text-[#f52e55] text-4xl py-2 font-bold'>All you need for e-commerce success</p>
      <div className='grid grid-cols-1 gap-2 px-8 py-16 md:px-48 md:grid-cols-2'>
        {servicesData.map((service) => (
          <React.Fragment key={service.id}>
            {isMobile ? (
              <div className='flex flex-col justify-center text-black text-start'>
                <div className='mt-2'>
                  <Image isZoomed src={service.imageSrc} width={700} height={750} alt='My Image' />
                </div>
                <h2 className='mt-2 text-3xl text-[#f52e55] font-bold md:mt-0'>{service.title}</h2>
                <h3 className='mt-2 text-xl text-[#623375] font-bold'>{service.subTitle}</h3>
                <p className='mt-2 text-lg'>{service.description}</p>
              </div>
            ) : (
              service.id % 2 === 0 ? (
                <>
                  <div className='flex flex-col justify-center text-black text-start md:ml-4'>
                    <h2 className='mt-2 ml-12 text-3xl text-[#f52e55] font-bold md:mt-0'>{service.title}</h2>
                    <h3 className='mt-2 ml-12 text-xl text-[#623375] font-bold'>{service.subTitle}</h3>
                    <p className='mt-2 ml-12 text-xl'>{service.description}</p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <Image isZoomed src={service.imageSrc} width={700} height={750} alt='My Image' />
                  </div>
                </>
              ) : (
                <>
                  <div className='flex items-center justify-center'>
                    <Image isZoomed src={service.imageSrc} width={700} height={750} alt='My Image' />
                  </div>
                  <div className='flex flex-col justify-center text-black text-start md:ml-4'>
                    <h2 className='mt-2 ml-16 text-3xl text-[#f52e55] font-bold md:mt-0'>{service.title}</h2>
                    <h3 className='mt-2 ml-16 text-xl text-[#623375] font-bold'>{service.subTitle}</h3>
                    <p className='mt-2 ml-16 text-lg'>{service.description}</p>
                  </div>
                </>
              )
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Services;