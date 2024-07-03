import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
function Comp3() {
  const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const isVisible = scrollPosition > windowHeight / 10;

      controls.start({
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 50,
        transition: { duration: 0.5, ease: 'easeInOut' },
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);
  return (
    <div className='w-full h-auto Tablet:h-[calc(100vh-(80px))] relative z-10 bg-gradient-to-b from-[#6DAD8A] to-[#8BBB67] flex flex-col justify-center items-center space-y-4 Tablet:py-0 Tablet:px-0'>
      <div className='text-[#1B2D37]'>
        <p className='font-inter font font-medium text-lg Tablet:text-2xl text-center '>
          We want to give them best available facilities & Braille techniques
        </p>
      </div>
      <div className='w-full h-auto flex flex-col Tablet:flex-row justify-around Laptop-lg:justify-center items-center space-y-6  Laptop-lg:space-x-20 text-[#010101] font-poppins '>
        <div className='bg-[#E9FCC0] rounded-[20px] w-full Tablet:w-[30%] Laptop-lg:w-[22%] h-auto Tablet:h-[50vh] Laptop-lg:h-[60vh] z-10 py-4 Tablet:py-0 Laptop-lg:py-4 flex flex-col items-center justify-around space-y-3 shadow-custom'>
          <img
            className='h-[200px] w-[200px]'
            src='/HomePageImages/Comp3-Images/image2.svg'
            alt='image2'
          />
          <p className='font-medium text-lg Tablet:text-xl text-center'>
            Agri Farm & Techno Education.
          </p>
          <p className='font-normal text-base Tablet:text-lg text-center'>
            The main focus is on to <br /> promote hi-tech agriculture
          </p>
          <button className='text-[#F8F8F8] bg-[#051731] w-[163px] h-[65px] rounded-[50px]'>
            Read More
          </button>
        </div>
        <div className='bg-[#E9FCC0] rounded-[20px] w-full Tablet:w-[30%] Laptop-lg:w-[22%] h-auto Tablet:h-[50vh] Laptop-lg:h-[60vh]   z-10  py-4 flex flex-col items-center justify-around space-y-3 shadow-custom'>
          <img
            className='h-[180px] w-[200px]'
            src='/HomePageImages/Comp3-Images/image3.svg'
            alt='image3'
          />
          <p className='font-medium text-lg Tablet:text-xl text-center'>
            Home & School for Physically Challenged{' '}
          </p>
          <p className='font-normal text-base Tablet:text-lg text-center'>
            We want to give them best <br />
            available facilities & Braille <br /> techniques
          </p>
          <button className='text-[#F8F8F8] bg-[#051731] w-[163px] h-[65px] rounded-[50px]'>
            Read More
          </button>
        </div>
        <div className='bg-[#E9FCC0] rounded-[20px] w-full Tablet:w-[30%] Laptop-lg:w-[22%] h-auto Tablet:h-[50vh] Laptop-lg:h-[60vh]  z-10  py-4 flex flex-col items-center justify-around space-y-3 shadow-custom'>
          <img
            className='h-[180px] w-[200px]'
            src='/HomePageImages/Comp3-Images/image4.svg'
            alt='image4'
          />
          <p className='font-medium text-lg Tablet:text-xl text-center'>
            Home & Feeding for Pets
          </p>
          <p className='font-normal text-base Tablet:text-lg text-center'>
            Land and space become a <br />
            costly things now a day for <br />
            animal
          </p>
          <button className='text-[#F8F8F8] bg-[#051731] w-[163px] h-[65px] rounded-[50px]'>
            Read More
          </button>
        </div>
      </div>
      <img
        className='absolute h-[65vh] bottom-0 left-0 hidden Tablet:flex'
        src='/HomePageImages/Comp3-Images/image1.svg'
        alt='img1'
      />
    </div>
  );
}

export default Comp3;
