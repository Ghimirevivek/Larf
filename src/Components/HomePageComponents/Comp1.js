import { Button } from '@material-tailwind/react';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import img3 from '../../Assets/final design.png';
function Comp1() {
  return (
    <div className='w-full sm:h-[88vh] relative px-4 bg-gradient-to-r from-transparent  via-[#d7f3a8] to-transparent'>
      <div className='flex h-[40vh] sm:h-auto items-center justify-between p-4'>
        <img
          className='w-[35vw] Laptop-lg:w-[26vw] h-[40vh]'
          src='/HomePageImages/Comp1-Images/image1.svg'
          alt='img1'
        />
        {/* <img
          className='h-[25vh] Tablet:h-[30vh] Laptop-lg:h-[40vh] hidden sm:block mr-[6rem]'
          src='/HomePageImages/Comp1-Images/image3.jpg'
          alt='img3'
        /> */}
        <img
          className='h-[25vh] Tablet:h-[35vh] Laptop-lg:h-[45vh] hidden sm:block mr-[6rem]'
          src={img3}
          alt='img3'
        />

        <img
          className='h-[25vh] Tablet:h-[30vh] Laptop-lg:h-[40vh]'
          src='/HomePageImages/Comp1-Images/image2.svg'
          alt='img2'
        />
      </div>
      <div className='h-auto sm:mt-10 flex items-center flex-col justify-center w-full'>
        <div className='flex flex-wrap sm:flex-nowrap items-center justify-center sm:items-start sm:justify-between h-auto p-4 font-medium text-center rounded-[32px] text-[#FFFFFF] '>
          <NavLink to='/experts'>
            <Button className='mt-0 w-auto p-2 sm:p-4 h-auto flex items-center justify-center bg-gradient-to-r from-blue-200 to-green-300 rounded-3xl text-[#FFFFFF] font-poppins font-medium text-sm Mobile:text-base Tablet:text-xl Laptop-lg:text-xl'>
              Global Research Experts
            </Button>
          </NavLink>
          <div className='flex flex-col items-center justify-start'>
            {' '}
            <div className='mt-2 mb-4 text-black leading-normal font-poppins font-medium text-xl Tablet:text-3xl Laptop-lg:text-4xl text-center'>
              <p>Largest Agro Research Foundation (LARF)</p>
            </div>
            <p className='max-w-[800px] p-4 text-black hidden Tablet:flex text-base Tablet:text-xl font-poppins mt-4'>
              Now students and Farmers will grow India's economy with advance
              research and technology at LARF. Connecting universities, colleges
              and school with farmers for digital and advance farming.
            </p>
            <p className='max-w-[800px] text-black Tablet:hidden text-base font-poppins mt-4'>
              Now students and Farmers will grow India's economy with advance
              research and technology at LARF. Connecting universities, colleges
              and school with farmers for digital and advance farming.
            </p>
          </div>
          <NavLink to='/research'>
            <Button className='mt-0 w-auto p-2 sm:p-4 h-auto flex items-center justify-center bg-gradient-to-r from-blue-200 to-green-300 rounded-3xl  text-[#FFFFFF] font-poppins font-medium text-sm Mobile:text-base Tablet:text-xl Laptop-lg:text-xl'>
              {' '}
              Research and Innovation
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Comp1;
