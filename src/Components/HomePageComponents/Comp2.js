import { Button } from '@material-tailwind/react';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { NavLink } from 'react-router-dom';
function Comp2() {
  const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const isVisible = scrollPosition > windowHeight / 1;

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
    <div className='relative'>
      {' '}
      <div className='w-full h-[400px] Tablet:h-[calc(77vh-(1px))] bg-comp2-background opacity-50 bg-cover relative flex flex-col justify-center items-center '></div>
      <div className='md:mt-10 lg:mt-[3rem] z-20 w-full h-auto Tablet:h-full flex flex-col items-center justify-start space-y-8 pt-8 absolute top-4'>
        <h1 className=' text-[#000000] font-poppins font-normal text-2xl Laptop-lg:text-4xl '>
          Welcome To
        </h1>
        <h1 className='text-[#000000] font-poppins font-medium text-xl Tablet:text-3xl Laptop-lg:text-5xl text-center'>
          Largest Agro Research Foundation
        </h1>
        <p className='text-[#000000] w-full Laptop-lg:w-[70%] h-auto Tablet:h-[170px] text-center font-inter font-medium text-lg Tablet:text-2xl px-4'>
          We are an organization working into the field of research in
          agriculture and organic crops/medicinal plants. We have conducted
          various consultancies into these fields and successfully achieved good
          results...
        </p>
        <NavLink to='/membership'>
          <Button className='w-auto h-auto px-6 py-4 flex items-center justify-center -mt-4 sm:-mt-10 rounded-3xl bg-[#051731] font-poppins font-medium text-lg Tablet:text-2xl text-[#FFFFFF]'>
            {' '}
            Join Now
          </Button>
        </NavLink>
      </div>
      {/* <img
        className='flex Tablet:absolute h-auto Tablet:h-[60vh] bottom-0 right-0 z-10 '
        src='/HomePageImages/Comp2-Images/image1.svg'
        alt='img2'
      /> */}
    </div>
  );
}

export default Comp2;
