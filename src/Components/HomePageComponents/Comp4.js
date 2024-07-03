import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

function Comp4() {
  const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const isVisible = scrollPosition > windowHeight / 0.46;

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
    <div className='w-full h-auto  bg-[#E9FCC0] py-[74px] px-[85px] space-y-[55px] flex flex-col justify-center items-center'>
      <h1 className='text-[#000000] font-poppins font-bold text-xl Tablet:text-4xl text-center w-full'>
        Our Sponsors and Partners{' '}
      </h1>
      <div className='w-full flex flex-col Laptop-lg:flex-row justify-around items-center space-y-4 Laptop-lg:space-y-0 '>
        <div className='bg-[#FFFFFF] w-[350px] h-[350px] rounded-[10px] shadow-custom flex flex-col items-center justify-center space-y-3'>
          <img
            className='relative -left-2 top-4'
            src='/HomePageImages/Comp4-Images/Soilsense.png'
            alt='soilsense'
          />
          <div className=' text-center relative -top-[4.7rem] '>
            <p>Transforming farming throught innovations </p>
            <Link
              to='https://soilsense.in/'
              className='font-semibold text-green-600 relative top-3'
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className='bg-[#FFFFFF]  w-[350px] h-[350px] rounded-[10px] shadow-custom flex flex-col items-center justify-center space-y-3'>
          <img
            className='h-[60%]'
            src='/HomePageImages/Comp4-Images/techland.svg'
            alt='techland'
          />
          <p>Invest with high interest rate </p>
          <Link
            to='https://tech-land.in/'
            className='font-semibold text-green-600'
          >
            Learn More
          </Link>
        </div>
        <div className='bg-[#FFFFFF]  w-[350px] h-[350px] rounded-[10px] shadow-custom flex flex-col items-center justify-center space-y-3'>
          <img
            className='h-[60%]'
            src='/HomePageImages/Comp4-Images/organic-chef.svg'
            alt='soilsense'
          />
          <p>100% organic products, no artificial additives </p>
          <Link
            to='https://organic-chef.com'
            className='font-semibold text-green-600'
          >
            Learn More
          </Link>
        </div>
      </div>
      {/* <div className='w-full flex flex-col Laptop-lg:flex-row justify-around items-center space-y-4 Laptop-lg:space-y-0'>
                    <Card sx={{ maxWidth: 300 }}>
                         <CardMedia
                              sx={{
                                   height: 250,
                                   width: 300
                              }}
                              image="/HomePageImages/Comp4-Images/Soilsense.png"
                         />
                         <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}>
                              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                                   Transforming farming through innovations
                              </Typography>
                         </CardContent>
                         <CardActions sx={{ justifyContent: 'center' }}>
                              <Link href="https://soilsense.in/">
                                   <Button size="small">Learn More</Button>
                              </Link>
                         </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 300 }}>
                         <CardMedia
                              sx={{
                                   height: 250,
                                   width: 300
                              }}
                              image="/HomePageImages/Comp4-Images/techland.svg"
                         />
                         <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}>
                              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }} >
                                   Invest with high interest rate
                              </Typography>
                         </CardContent>
                         <CardActions sx={{ justifyContent: 'center' }}>
                              <Link href="https://tech-land.in/">
                                   <Button size="small">Learn More</Button>
                              </Link>
                         </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 300 }}>
                         <CardMedia
                              sx={{
                                   height: 250,
                                   width: 300
                              }}
                              image="/HomePageImages/Comp4-Images/organic-chef.svg"
                         />
                         <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}>
                              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                                   100% organic products, no artificial additives
                              </Typography>
                         </CardContent>
                         <CardActions sx={{ justifyContent: 'center' }}>
                              <Link href="https://organic-chef.com">
                                   <Button size="small">Learn More</Button>
                              </Link>
                         </CardActions>
                    </Card>
               </div> */}
    </div>
  );
}

export default Comp4;
