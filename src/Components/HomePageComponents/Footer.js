import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };
  return (
    <div className='w-full h-auto  sapce-y-10'>
      <div className='bg-[#F8F8F8] w-full h-auto py-8  flex flex-col Tablet:flex-row justify-around items-center Tablet:space-x-12'>
        <p className='font-poppins font-normal text-lg Tablet:text-4xl'>
          Become a LARF Member
        </p>
        <button className='text-[#F8F8F8] bg-[#051731] w-[150px] Tablet:w-[200px] h-[40px] Tablet:h-[60px] rounded-[50px] font-bold text-base Tablet:text-2xl'>
          Join LARF
        </button>
      </div>
      <div className='bg-gradient-to-b from-[#0A7597] to-[#040506] w-full h-auto Laptop-sm:h-[75%] px-0 Laptop-sm:px-6 space-y-3 pb-8'>
        <div className='flex flex-col Laptop-sm:flex-row justify-between items-start Laptop-sm:space-x-8'>
          <div className='bg-[#FFFFFF] h-[80%] w-full Laptop-sm:w-[25%] px-6 flex flex-col items-center justify-center space-y-4 pb-8'>
            <img src='/HomePageImages/Comp5-Images/logo.svg' alt='logo' />
            <p className='font-poppins font-medium text-sm'>
              We, Largest Agro Research Foundation promoted by (LARGEST AGRO
              FARM & TECHNO EDUCATION LTD.) are a NGO registered under companies
              act in India.
            </p>
            <div className='w-full flex flex-col items-start justify-center space-y-2'>
              <p className='font-poppins font-medium text-base '>Follow Us</p>
              <div className=' w-full flex flex-row  justify-start items-center space-x-3'>
                <a href='https://www.facebook.com/larfoffical' target='_blank'>
                  <img
                    src='/HomePageImages/Comp5-Images/facebook.svg'
                    alt='logo'
                  />
                </a>
                <a
                  href='https://instagram.com/larf____?igshid=NTc4MTIwNjQ2YQ=='
                  target='_blank'
                >
                  <img
                    src='/HomePageImages/Comp5-Images/instagram.svg'
                    alt='logo'
                  />
                </a>
                <a href='https://www.youtube.com/@LARF-fr6wz' target='_blank'>
                  <img
                    src='/HomePageImages/Comp5-Images/youtube.svg'
                    alt='logo'
                  />
                </a>
                <a
                  href='https://www.linkedin.com/showcase/offical-largest-agro-research-foundation/'
                  target='_blank'
                >
                  {' '}
                  <img
                    src='/HomePageImages/Comp5-Images/linkedin.svg'
                    alt='logo'
                  />
                </a>
                <a href='https://twitter.com/LARF__' target='_blank'>
                  {' '}
                  <img
                    src='/HomePageImages/Comp5-Images/twitter.svg'
                    alt='logo'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col Tablet:flex-row w-full justify-center Tablet:justify-around items-center Tablet:items-start px-6 Tablet:px-0'>
            <div className='w-full Tablet:w-[15%] h-[80%] space-y-4 flex flex-col items-start justify-start mt-6'>
              <div className='space-y-4'>
                <p className='text-[#FFFFFF] font-poppins font-bold text-lg Tablet:text-xl'>
                  Useful Links
                </p>
                <div className='border-1 bg-[#FFFFFF] w-full h-[1px]'></div>
              </div>
              <div className='font-poppins font-bold text-sm Tablet:text-base text-[#B6B6B6] justify-center items-start flex flex-col space-y-4'>
                <button>Partners</button>
                <button>Memberships</button>
                <Link to='/certificates' onClick={scrollToTop}>
                  Certificates
                </Link>
              </div>
            </div>
            <div className='w-full Tablet:w-[20%] h-[80%] space-y-4 flex flex-col items-start justify-start mt-6'>
              <div className='space-y-4'>
                <p className='text-[#FFFFFF] font-poppins font-bold  text-lg Tablet:text-xl'>
                  Brouchers & Info
                </p>
                <div className='border-1 bg-[#FFFFFF] w-full h-[1px]'></div>
              </div>
              <div className='font-poppins font-bold text-sm Tablet:text-base text-[#B6B6B6] justify-center items-start flex flex-col space-y-4'>
                <a
                  href='https://drive.google.com/file/d/1-YVdBdV3eOm_WmtJrIlK3EHQEpgMpfcp/view?usp=drive_link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  School Chapter
                </a>
                <a
                  href='https://drive.google.com/file/d/1-RJhAVRX4Ch3bsc9OA9H1y930xVtSn_u/view?usp=drive_link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  College / University Chapter
                </a>
                <a
                  href='https://drive.google.com/file/d/1-TgDmjh18k0BLYkzrFlFSoPbU7lvDzai/view?usp=drive_link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Global Research Experts
                </a>
                <a
                  href='https://drive.google.com/file/d/1-RSomLasLtwq164KeL1Tb4CZdAoGO0SL/view?usp=drive_link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  External Advisor
                </a>
                <a
                  href='https://drive.google.com/file/d/1-ZyXScbLSC1tLmw_ej26-mAVOHTNepwn/view?usp=drive_linkk'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LARF Common Info
                </a>
              </div>
            </div>

            <div className='w-full Tablet:w-[30%] h-[80%] space-y-6 flex flex-col items-start justify-start mt-6'>
              <div className='space-y-4'>
                <p className='text-[#FFFFFF] font-poppins font-bold  text-lg Tablet:text-xl'>
                  Reach Out
                </p>
                <div className='border-1 bg-[#FFFFFF] w-full h-[1px]'></div>
              </div>
              <p className='font-poppins font-medium text-sm Tablet:text-base text-[#FFFFFF]'>
                Contact us for inquiries or any questions through our website's
                mail feature
              </p>

              <div className='bg-[#237AFF] w-[80%] rounded-[40px] flex flex-row justify-start items-center overflow-hidden'>
                <input
                  type='text'
                  className='bg-[#2F2F2F] w-[75%] h-[40px] text-[#FFFFFF] px-6'
                />
                <img
                  className='px-4'
                  src='/HomePageImages/Comp5-Images/search-arrow.svg'
                  alt='search'
                />
              </div>
              <p className='font-poppins font-medium text-sm Tablet:text-base  text-[#FFFFFF]'>
                2637, FIRST FLOOR, UNIT-II, NAYA BAZAR DELHI North Delhi DL
                110006 IN
              </p>
              <div className='flex flex-row items-center justify-start text-[#FFFFFF] space-x-6'>
                <img
                  className='h-[25px] w-[25px]'
                  src='/HomePageImages/Comp5-Images/phone.svg'
                  alt='phone'
                />
                <p>
                  <b>+91-7827154022</b>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[#BEBEBF] border-1 w-full h-[1px]'></div>
        <div className=' w-full flex flex-col Laptop-lg:flex-row justify-center Laptop-lg:justify-between items-center px-4 pb-4 text-sm Tablet:text-base space-y-4'>
          <div className='w-full Laptop-lg:w-[40%] flex flex-col justify-between items-center Laptop-lg:items-start'>
            <div className='flex flex-row justify-start items-center space-x-4'>
              <img
                className='w-[25px] h-[25px]'
                src='/HomePageImages/Comp5-Images/copyright.svg'
                alt='copyright'
              />
              <p className='text-[#FFFFFF] '>
                Copyright 2023 All rights reserved LARF.
              </p>
            </div>
            <p className='text-[#FFFFFF] px-8 Tablet:px-0'>
              Corporate Identification Number : (CIN) U85100DL2014NPL270553
            </p>
          </div>

          <div className='text-[#FFFFFF] w-full Laptop-lg:w-[60%] flex flex-col Tablet:flex-row justify-around items-start Tablet:items-center space-x-0 Tablet:space-x-6 Laptop-lg:space-x-12'>
            <Link to='/contact' onClick={scrollToTop}>
              Contact
            </Link>
            <Link to='/terms-&-conditions' onClick={scrollToTop}>
              Terms & Conditions
            </Link>
            <Link to='/privacy-policy' onClick={scrollToTop}>
              Privacy Policy
            </Link>
            <Link to='/refund-&-cancellation-policy' onClick={scrollToTop}>
              Refund & Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
