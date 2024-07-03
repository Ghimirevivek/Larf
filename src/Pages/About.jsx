import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/HomePageComponents/Footer';
import { Typography } from '@material-tailwind/react';
import Accordian from '../Components/Accordian';
import NavBar from '../Components/HomePageComponents/NavBar';
import UnderConstruction from '../Components/UnderConstruction';
import bottle from '../Assets/bottle.png';
import about01 from '../Assets/about01.png';

const About = () => {
  const data = {
    header: 'Why Choose LARF?',
    title: '',
    body: 'Choosing LARF means joining a passionate community of individuals who share a common vision: to make agriculture more sustainable, efficient, and environmentally responsible. We offer a unique blend of education, collaboration, and real-world impact that empowers our members to drive positive change in the world of farming. Together, we are sowing the seeds of innovation and reaping the benefits of a more sustainable and productive agricultural future. Join us in this exciting journey of transformation.',
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='flex flex-col items-center w-full'>
      <NavBar />
      {/* <div className='h-auto w-[80%]'>
        <div className='h-full w-full'>
          <div className='text-center bg-about-image bg-cover bg-no-repeat w-full h-auto flex items-center justify-around'>
            <div className='relative -top-20 right-10 bg-[#E3EEEF] w-80 h-auto py-2 flex items-center justify-center px-4 bg-opacity-40 rounded-md'>
              <Typography variant='h2' color='black' className='px-4 py-2'>
                About
              </Typography>
            </div>

            <div className='relative left-10 top-[6rem] pb-[20rem]'>
              <div className=''>
                <Accordian data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>  */}
      <div className='w-auto px-[5rem] sm:px-[9rem] md:px-[12rem] lg:px-[16rem] h-[70px] sm:h-[80px] lg:h-[100px] bg-[#599121] flex items-center justify-center rounded-[2rem] mb-12 relative top-16'>
        <Typography
          variant='h1'
          color='white'
          className=' text-center text-[28px] sm:text-[33px] lg:text-[40px] tracking-tighter font-bold'
        >
          About Us
        </Typography>
      </div>
      <div className='w-[90%] flex items-center justify-center relative mb-10'>
        <img
          src={bottle}
          alt='teamlogo'
          className='w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[22rem] z-10 absolute -top-[4rem] sm:-top-[5.5rem] md:-top-[7rem] lg:-top-[9rem] xl:left-[calc(50vw-42rem)] lg:left-[calc(50vw-40rem)] md:left-[calc(50vw-31.5rem)] sm:left-[calc(50vw-25rem)] left-[calc(50vw-20rem)]'
        />
        <div className='w-[35rem] sm:w-[40rem] md:w-[50rem] lg:w-[60rem] xl:w-[65rem] h-[70px] sm:h-[70px] lg:h-[80px] bg-[#7BBB3B] flex items-center justify-center rounded-[3rem] relative top-14'>
          <Typography
            variant='h1'
            color='white'
            className='text-center text-[18px] sm:text-[25px] md:text-[33px] lg:text-[40px] tracking-tighter font-bold ml-[calc(50vw-13rem)] sm:ml-8 md:marker:l-4 lg:ml-0 '
          >
            We are Delivering only quality work here
          </Typography>
        </div>
      </div>
      <div className='w-[80%] h-auto mt-6 lg:mt-10'>
        <div className='flex flex-col items-center px-2 py-1 sm:px-4 sm:py-2 lg:px-10 lg:py-4'>
          <Typography
            variant='h5'
            color='black'
            className='font-thin tracking-wide text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px]'
          >
            Largest Agro Research Foundation (LARF) is committed to encouraging
            sustainable agricultural methods and enhancing the effectiveness of
            farming operations. To address the problems facing contemporary
            agriculture, this foundation engages in research and development
            operations. <br />
            <br /> LARF is working on research and development in order to set
            up a base for innovation in agriculture. LARF promotes its research
            works with its brand “Soil Sense”.
          </Typography>
        </div>
      </div>
      <div className='flex flex-col 2xl:flex-row items-center justify-between w-[80%] mb-10 gap-6 2xl:gap-14'>
        <img
          src={about01}
          alt='iot'
          className='w-[22rem] sm:w-[25rem] xl:w-[28rem] rounded-lg'
        />
        <div className='bg-custom-gradient w-full xl:w-[80%] rounded-3xl pl-6 py-4'>
          <Typography variant='h6'>Mission and Vision:</Typography>
          <Typography
            variant='h6'
            color='white'
            className='font-thin px-4 text-[12px] md:text-[14px] 2xl:text-[16px]'
          >
            Our society is built on agriculture, which supports billions of
            people globally by supplying them with food, resources, and a means
            of subsistence. For the sake of ensuring food security, resource
            conservation, and environmental protection, adopting modern
            techniques is not just a choice but a must. At LARF, we can help
            create a more sustainable and successful future by providing
            students with the knowledge and opportunity they need.
          </Typography>
          <Typography variant='h6'>LARF at a glance:</Typography>
          <Typography
            variant='h6'
            color='white'
            className='font-thin px-4 text-[12px] md:text-[14px] 2xl:text-[16px]'
          >
            LARF is your gateway to a world of opportunities in the exciting
            realm of modern agriculture.
          </Typography>
          <Typography variant='h6'>Awards:</Typography>
          <Typography
            variant='h6'
            color='white'
            className='font-thin px-4 text-[12px] md:text-[14px] 2xl:text-[16px]'
          >
            By giving out awards, LARF motivates students and mentors to make
            significant contributions in relevant sectors for the advancement of
            society.
          </Typography>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
