import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Card from '../Components/Card';
import Footer from '../Components/HomePageComponents/Footer';
import RazorpayPayment from '../Pages/RazorPay';
import UnderConstruction from '../Components/UnderConstruction';
import NavBar from '../Components/HomePageComponents/NavBar';
import { Button, Typography } from '@material-tailwind/react';
import gallery from '../Assets/gallery01.png';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <div className='bg-gray-100'>
        <div className='mb-4'>
          <div className='w-full flex items-center justify-center relative mb-[8rem]'>
            <img
              src={gallery}
              alt='teamlogo'
              className='w-[9rem] sm:w-[11rem] lg:w-[15rem] z-10 absolute top-[2.5rem] sm:top-[2rem] md:top-[1.5rem] lg:top-[1rem] lg:left-[calc(50vw-25rem)] sm:left-[calc(50vw-17rem)] left-[calc(50vw-14rem)]'
            />
            <div className='w-auto px-[4rem] sm:px-[9rem] md:px-[12rem] lg:px-[16rem] h-[70px] sm:h-[80px] lg:h-[90px] bg-[#599121] flex items-center justify-center rounded-[2rem] relative top-16'>
              <Typography
                variant='h1'
                color='white'
                className=' text-center text-[28px] sm:text-[33px] lg:text-[40px] tracking-tighter font-bold'
              >
                Our Gallery
              </Typography>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-center gap-10'>
          <Button size='lg' className='bg-[#7BBB3B] rounded-3xl'>
            Videos
          </Button>
          <Button size='lg' className='bg-white text-[#797979] rounded-3xl'>
            Photos
          </Button>
        </div>
        <div className='flex items-center justify-center'>
          {' '}
          <div className='grid grid-cols-1 w-[90%] h-auto gap-6 md:grid-cols-2 lg:grid-cols-3 px-6 py-6'>
            <div className='flex flex-col items-center '>
              {' '}
              <iframe
                width='90%'
                height='250'
                src='https://youtube.com/embed/c2APT3f8O3c'
                title='School Chapter'
                className='rounded-md'
              ></iframe>
              <Typography
                color='white'
                variant='h6'
                className='bg-black bg-opacity-70 w-[90%] flex items-center justify-center py-1 px-2 relative bottom-9 rounded-b-md'
              >
                School Student's Chapter
              </Typography>
            </div>
            <div className='flex flex-col items-center '>
              {' '}
              <iframe
                width='90%'
                height='250'
                src='https://youtube.com/embed/YEZrUOD-buA'
                title='School Chapter'
                className='rounded-md'
              ></iframe>
              <Typography
                color='white'
                variant='h6'
                className='bg-black bg-opacity-70 w-[90%] flex items-center justify-center py-1 px-2 relative bottom-9 rounded-b-md'
              >
                College/University Chapter
              </Typography>
            </div>
            <div className='flex flex-col items-center '>
              {' '}
              <iframe
                width='90%'
                height='250'
                src='https://youtube.com/embed/KT8TihwfFjc'
                title='School Chapter'
                className='rounded-md'
              ></iframe>
              <Typography
                color='white'
                variant='h6'
                className='bg-black bg-opacity-70 w-[90%] flex items-center justify-center py-1 px-2 relative bottom-9 rounded-b-md'
              >
                Become an External Advisor!
              </Typography>
            </div>
            <div className='flex flex-col items-center '>
              {' '}
              <iframe
                width='90%'
                height='250'
                src='https://youtube.com/embed/XzhEdjsRzX8'
                title='School Chapter'
                className='rounded-md'
              ></iframe>
              <Typography
                color='white'
                variant='h6'
                className='bg-black bg-opacity-70 w-[90%] flex items-center justify-center py-1 px-2 relative bottom-9 rounded-b-md'
              >
                Become a Global Research
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
