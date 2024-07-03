import React from 'react';
import Header from '../Components/Header';
import Team from '../Components/Team';
import { Typography } from '@material-tailwind/react';
import Footer from '../Components/HomePageComponents/Footer';
import anmolImg from '../Assets/drive-download/Anmol Garg.png';
import ashishImg from '../Assets/drive-download/ashish.png';
import pravienImg from '../Assets/drive-download/praveen sir.png';
import img4 from '../Assets/drive-download/Nandini.png';
import img3 from '../Assets/drive-download/Gokul.png';
import img5 from '../Assets/drive-download/Ayush.png';
import img6 from '../Assets/drive-download/Abhinav.png';
import img7 from '../Assets/drive-download/Pravin.png';
import img8 from '../Assets/drive-download/Nitish Narula.png';
import img9 from '../Assets/drive-download/amit chauhan.png';
import img10 from '../Assets/drive-download/Ankit Panigrahi.png';
import img11 from '../Assets/drive-download/profile-pic.png';
import img12 from '../Assets/drive-download/Harsh_Mittal.png';
import img13 from '../Assets/drive-download/Shobhit Kundu.png';
import UnderConstruction from '../Components/UnderConstruction';
import NavBar from '../Components/HomePageComponents/NavBar';
import team1 from '../Assets/svg 1.png';
import team2 from '../Assets/svg 2.png';

const TeamPage = () => {
  const advisors = [
    {
      name: 'Nitish Narula',
      image: img8,
      designation: 'PR and Student Welfare',
    },
    {
      name: 'Amit Chauhan',
      image: img9,
      designation: 'Agronomist and Indian Forest Service',
    },
    {
      name: 'Praveen Soni',
      image: pravienImg,
      designation: 'Research and Innovation',
    },
  ];
  const exadvisors = [
    {
      name: '',
      image: '',
      designation: '',
    },
    {
      name: '',
      image: '',
      designation: '',
    },
    {
      name: '',
      image: '',
      designation: '',
    },
  ];
  const operations = [
    { name: 'Pravin Kumar', image: img7, designation: 'President' },

    { name: 'Anmol Garg', image: anmolImg, designation: 'Vice President' },

    { name: 'Ankit Panigrahi', image: img10, designation: 'Secratery' },
    { name: 'Abhinav Sehgal', image: img6, designation: 'Treasurer' },
  ];
  const depthead = [
    { name: 'Ashish', image: ashishImg, designation: 'Technical Head' },
    {
      name: 'Ayush Kumar ',
      image: img5,
      designation: 'Research and Innovation Head',
    },
    {
      name: 'Nandini Chauhan',
      image: img4,
      designation: 'Public Relation Executive',
    },

    {
      name: 'Shobhit Kundu',
      image: img13,
      designation: 'IoT and Robotics Head',
    },
  ];
  const executive = [
    { name: 'Gokul Mittal', image: img3, designation: 'Graphics Designer' },
    { name: 'Harsh Mittal', image: img12, designation: 'Graphics Designer' },
  ];

  return (
    <div className='flex flex-col items-center w-full h-auto bg-gray-200'>
      <NavBar />
      <div className='w-[90%] flex items-center justify-center relative mb-[6rem]'>
        <img
          src={team2}
          alt='teamlogo'
          className='w-[9rem] sm:w-[11rem] lg:w-[16rem] z-10 absolute top-[2.5rem] sm:top-[2rem] md:top-[1.5rem] lg:top-[1rem] lg:right-[calc(70vw-0rem)] sm:right-[calc(70vw-0rem)] right-[calc(70vw-2rem)]'
        />

        <div className='w-auto px-[2rem] sm:px-[5.5rem] md:px-[10rem] lg:px-[15rem] h-[70px] sm:h-[80px] lg:h-[100px] bg-[#599121] flex items-center justify-center rounded-[2rem] relative top-14'>
          <Typography
            variant='h1'
            color='white'
            className=' text-center text-[25px] sm:text-[30px] lg:text-[40px] tracking-tighter font-bold'
          >
            Meet the People Behind Our Success
          </Typography>
        </div>
        <img
          src={team1}
          alt=''
          className='w-[9rem] sm:w-[11rem] lg:w-[15rem] z-10 absolute top-[2.5rem] sm:top-[2rem] md:top-[1.5rem] lg:top-[1rem] lg:left-[calc(70vw-0rem)] sm:left-[calc(70vw-0rem)] left-[calc(70vw-2rem)]'
        />
      </div>
      <div className='w-[80%] h-auto mb-8 pb-10 rounded-b-3xl  '>
        <div className='flex flex-col items-center justify-center'>
          <Typography
            variant='h3'
            className='flex items-center justify-center mt-4 px-4 bg-[#00639A] text-white py-2 rounded-full font-bold z-10 lg:text-[30px] text-[20px]'
          >
            Advisor
          </Typography>

          <div className=' w-full border-dashed border-[#00639A] border-[8px] h-auto relative -top-7 mb-20 lg:mb-[8rem]'>
            <div className='w-full h-full flex items-center justify-center flex-wrap mt-12 lg:-mb-[9rem] -mb-[7rem] gap-12'>
              {advisors.map((item, i) => (
                <Team key={i} data={item} />
              ))}
            </div>
          </div>

          {/* <Typography
            variant='h3'
            className='flex items-center justify-center mt-4 px-4 bg-[#00639A] text-white py-2 rounded-full font-bold z-10'
          >
            External-Advisor
          </Typography>
          <div className='relative w-full'>
            <div className='absolute -top-7 w-full border-dashed border-[#00639A] border-[8px] h-[13rem]'></div>
          </div>
          <div className='w-full h-full flex items-start justify-center flex-wrap gap-12 -mt-12'>
            {exadvisors.map((item, i) => (
              <Team key={i} data={item} />
            ))}
          </div> */}
          <Typography
            variant='h3'
            className='flex items-center justify-center text-center  mt-4 px-4 bg-[#00639A] text-white py-2 rounded-full font-bold z-10 lg:text-[30px] text-[20px]'
          >
            Operation and Management
          </Typography>

          <div className=' w-full border-dashed border-[#00639A] border-[8px] h-auto relative -top-7 mb-20 lg:mb-[8rem]'>
            <div className='w-full h-full flex items-center justify-center flex-wrap mt-12 lg:-mb-[9rem] -mb-[7rem] gap-12'>
              {operations.map((item, i) => (
                <Team key={i} data={item} />
              ))}
            </div>
          </div>

          <Typography
            variant='h3'
            className='flex items-center justify-center  mt-4 px-4 bg-[#00639A] text-white py-2 rounded-full font-bold z-10 lg:text-[30px] text-[20px]'
          >
            Department Head
          </Typography>

          <div className=' w-full border-dashed border-[#00639A] border-[8px] h-auto relative -top-7 mb-20 lg:mb-[8rem]'>
            {' '}
            <div className='w-full h-full flex items-center justify-center flex-wrap mt-12 lg:-mb-[9rem] -mb-[7rem] gap-12'>
              {depthead.map((item, i) => (
                <Team key={i} data={item} />
              ))}
            </div>
          </div>

          <Typography
            variant='h3'
            className='flex items-center justify-center  mt-4 px-4 bg-[#00639A] text-white py-2 rounded-full font-bold z-10 lg:text-[30px] text-[20px]'
          >
            Executive Members
          </Typography>

          <div className=' w-full border-dashed border-[#00639A] border-[8px] h-auto relative -top-7 mb-20 lg:mb-[8rem]'>
            <div className='w-full h-full flex items-center justify-center flex-wrap mt-12 lg:-mb-[9rem] -mb-[7rem] gap-12'>
              {executive.map((item, i) => (
                <Team key={i} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
