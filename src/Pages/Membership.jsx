import React, { useEffect, useState } from 'react';
import Accordian from '../Components/Accordian';
import {
  Button,
  Option,
  Radio,
  Select,
  Typography,
} from '@material-tailwind/react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/HomePageComponents/Footer';
import img1 from '../Assets/image12.png';
import img2 from '../Assets/image1.png';
import { Outlet } from 'react-router-dom';
import SignupModel from '../Components/SignupModel';
import { useContextValue } from '../Context';
import { MdDoneOutline } from 'react-icons/md';
import UnderConstruction from '../Components/UnderConstruction';
import NavBar from '../Components/HomePageComponents/NavBar';

import graphics from '../Assets/graphics01.png';
import graphics02 from '../Assets/graphics02.png';
import svg03 from '../Assets/svg 3.png';

const Membership = () => {
  const data = {
    header: 'Why choose LARF?',
    title: '',
    body: 'Choosing LARF means joining a passionate community of individuals who share a common vision: to make agriculture more sustainable, efficient, and environmentally responsible. We offer a unique blend of education, collaboration, and real-world impact that empowers our members to drive positive change in the world of farming. Together, we are sowing the seeds of innovation and reaping the benefits of a more sustainable and productive agricultural future. Join us in this exciting journey of transformation.',
  };
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const { state, dispatch } = useContextValue();
  const [isStudentChecked, setIsStudentChecked] = useState(false);
  const [isCollegeChecked, setIsCollegeChecked] = useState(true);
  const [membershipButton, setMembershipButton] = useState({
    schoolStudent: false,
    schoolFaculty: false,
    schoolLifetime: true,
    collegeStudent: false,
    collegeProfessional: false,
    collegeLifetime: true,
  });
  const [memberShip, setMembership] = useState('');
  const [price, setPrice] = useState('');

  const getPackageInformation = async () => {
    try {
      const response = await axios.get(
        'https://qaapis.largestagroresearch.org/packages/allPackages'
      );

      setMembership(response.data.data);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  useEffect(() => {
    getPackageInformation();
  }, []);
  console.log(state);
  const handleSchoolChange = () => {
    setIsStudentChecked(true);
    setIsCollegeChecked(false);
  };
  const handleCollegeChange = () => {
    setIsStudentChecked(false);
    setIsCollegeChecked(true);
  };
  const handleschoolStudent = () => {
    dispatch({
      type: 'ADD',
      membership: `${memberShip ? memberShip[3].package_name : 'Student'}`,
      price: `${memberShip ? memberShip[3].price : 99}`,
      studentType: `${memberShip ? memberShip[3].package_type : 'School'}`,
      id: `${memberShip ? memberShip[3].package_id : ''}`,
    });
  };
  const handleschoolprofessional = () => {
    dispatch({
      type: 'ADD',
      membership: `${memberShip ? memberShip[5].package_name : 'Faculty'}`,
      price: `${memberShip ? memberShip[5].price : 499}`,
      studentType: `${memberShip ? memberShip[5].package_type : 'School'}`,
      id: `${memberShip ? memberShip[5].package_id : ''}`,
    });
  };
  const handleschoollifetime = () => {
    dispatch({
      type: 'ADD',
      membership: `${memberShip ? memberShip[4].package_name : 'Longterm'}`,
      price: `${memberShip ? memberShip[4].price : 2499}`,
      studentType: `${memberShip ? memberShip[4].package_type : 'School'}`,
      id: `${memberShip ? memberShip[4].package_id : ''}`,
    });
  };

  const handlecollegeStudent = () => {
    dispatch({
      type: 'ADD',
      membership: `${memberShip ? memberShip[0].package_name : 'Student'}`,
      price: `${memberShip ? memberShip[0].price : 999}`,
      studentType: `${memberShip ? memberShip[0].package_type : 'College'}`,
      id: `${memberShip ? memberShip[0].package_id : ''}`,
    });
  };
  const handlecollegeprofessional = () => {
    dispatch({
      type: 'ADD',
      membership: `${memberShip ? memberShip[2].package_name : 'Professional'}`,
      price: `${memberShip ? memberShip[2].price : 2499}`,
      studentType: `${memberShip ? memberShip[2].package_type : 'College'}`,
      id: `${memberShip ? memberShip[2].package_id : ''}`,
    });
  };
  const handlecollegelifetime = () => {
    dispatch({
      type: 'ADD',
      membership: `${memberShip ? memberShip[1].package_name : 'Longterm'}`,
      price: `${memberShip ? memberShip[1].price : 9999}`,
      studentType: `${memberShip ? memberShip[1].package_type : 'College'}`,
      id: `${memberShip ? memberShip[1].package_id : ''}`,
    });
  };

  return (
    <div className='flex flex-col items-center bg-gray-100'>
      <NavBar />
      <Outlet />
      <div className='w-[90%] flex items-center justify-center relative mb-[4.5rem] md:mb-[5rem] xl:mb-[6rem]'>
        <img
          src={graphics}
          alt='teamlogo'
          className='w-[12rem] sm:w-[14rem] md:w-[15rem] lg:w-[20rem] z-20 absolute -top-[1rem] sm:-top-[1.8rem] md:-top-[3rem] lg:-top-[5rem] lg:right-[calc(70vw-5rem)] md:right-[calc(70vw-4rem)] sm:right-[calc(70vw-4rem)] right-[calc(70vw-5rem)]'
        />
        <div className='w-auto px-[2rem] sm:px-[2rem] md:px-[8rem] lg:px-[10rem] h-[70px] sm:h-[80px] lg:h-[90px] bg-[#599121] flex items-center justify-center rounded-[2rem] relative top-16'>
          <Typography
            variant='h1'
            color='white'
            className=' text-center ml-[5rem] text-[25px] sm:text-[30px] lg:text-[40px] tracking-tighter font-bold'
          >
            Choose your membership plan
          </Typography>
        </div>
      </div>
      <div className='w-[90%] xl:w-[80%] z-10 text-center flex flex-col items-center justify-between'>
        <div className='bg-[#7BBA3A] rounded-[2rem] mt-2 -ml-4'>
          <div>
            <Typography
              color='white'
              className='pl-[11rem] sm:pl-[12rem] md:pl-[16rem] lg:pl-[18rem] xl:pl-[16rem] 2xl:pl-[19rem] pr-4 py-2 text-start font-thin text-[10px] sm:text-[12px] md:text-[14px] 2xl:text-[16px]'
            >
              Choosing LARF means joining a passionate community of individuals
              who share a common vision: to make agriculture more sustainable,
              efficient, and environmentally responsible. We offer a unique
              blend of education, collaboration, and real-world impact that
              empowers our members to drive positive change in the world of
              farming. Together, we are sowing the seeds of innovation and
              reaping the benefits of a more sustainable and productive
              agricultural future. Join us in this exciting journey of
              transformation.
            </Typography>
          </div>
        </div>

        <div className='bg-gray-100 w-full '>
          <div className='relative top-6 flex items-center justify-center gap-2 md:gap-10 flex-wrap'>
            <Radio
              label={
                <div className='flex items-center justify-center'>
                  <span className='text-black font-semibold'>
                    For College Membership
                  </span>
                  <span className='text-red-400 text-2xl'> *</span>
                </div>
              }
              name='membership'
              checked={isCollegeChecked}
              onClick={handleCollegeChange}
              className='text-white'

              // color='indigo'
            />
            <Radio
              label={
                <div className='flex items-center justify-center'>
                  <span className='text-black font-semibold'>
                    For School Membership
                  </span>
                  <span className='text-red-400 text-2xl'> *</span>
                </div>
              }
              name='membership'
              checked={isStudentChecked}
              onClick={handleSchoolChange}
              // color='indigo'
            />
          </div>
        </div>
      </div>

      {/* <div className='bg-gray-100 w-[80%]'>
        <div className='w-[100px] h-auto p-4'>
          <Select
            label={
              <>
                Membership Type <span className='text-red-400 '>*</span>
              </>
            }
            size='lg'

            // onChange={handlemembership}
          >
            <Option value='student'>School Membership</Option>
            <Option value='college'>College Membership</Option>
          </Select>
        </div>
      </div> */}

      {isCollegeChecked && (
        <>
          <div className='md:hidden relative top-6 flex items-center justify-center gap-2 md:gap-10 flex-wrap'>
            <Radio
              label={
                <div className='flex items-center justify-center'>
                  <span className='text-black font-semibold'>Student</span>
                  <span className='text-red-400 text-2xl'> *</span>
                </div>
              }
              name='membershipbtn'
              checked={membershipButton.collegeStudent}
              onClick={() =>
                setMembershipButton({
                  ...membershipButton,
                  collegeLifetime: false,
                  collegeProfessional: false,
                  collegeStudent: true,
                })
              }
              className='text-white'

              // color='indigo'
            />
            <Radio
              label={
                <div className='flex items-center justify-center'>
                  <span className='text-black font-semibold'>Lifetime</span>
                  <span className='text-red-400 text-2xl'> *</span>
                </div>
              }
              name='membershipbtn'
              checked={membershipButton.collegeLifetime}
              onClick={() =>
                setMembershipButton({
                  ...membershipButton,
                  collegeProfessional: false,
                  collegeStudent: false,
                  collegeLifetime: true,
                })
              }
              // color='indigo'
            />
            <Radio
              label={
                <div className='flex items-center justify-center'>
                  <span className='text-black font-semibold'>Professional</span>
                  <span className='text-red-400 text-2xl'> *</span>
                </div>
              }
              name='membershipbtn'
              checked={membershipButton.collegeProfessional}
              onClick={() =>
                setMembershipButton({
                  ...membershipButton,
                  collegeStudent: false,
                  collegeLifetime: false,
                  collegeProfessional: true,
                })
              }
              // color='indigo'
            />
          </div>
          <div className='md:hidden w-[80%] h-[55rem] bg-gray-100 flex items-start justify-center px-4  gap-8 mt-10'>
            <div className='bg-[#85b968] pl-3 rounded-t-[3rem] rounded-b-[2rem] pr-1 pb-2 shadow-2xl shadow-green-700'>
              {membershipButton.collegeStudent && (
                <div className='w-[15rem] h-[35rem] bg-white rounded-[2rem] flex flex-col items-center'>
                  <Typography
                    variant='h3'
                    color='green'
                    className='mt-4 tracking-wide'
                  >
                    {memberShip
                      ? memberShip[0].package_name.charAt(0).toUpperCase() +
                        memberShip[0].package_name.slice(1)
                      : 'Student'}
                  </Typography>
                  <Typography variant='h5' color='gray' className=' font-thin'>
                    Package
                  </Typography>
                  <Typography
                    variant='h3'
                    color='black'
                    className='my-4 italic '
                  >
                    @ {memberShip ? memberShip[0].price : 999}{' '}
                    <span className='text-[14px]'>Per year</span>
                  </Typography>
                  <Typography
                    variant='h6'
                    color='black'
                    className='mt-4 flex w-full items-start justify-start ml-6'
                  >
                    Included :
                  </Typography>
                  <ul className='px-2 text-[12px] list-disc py-4'>
                    <li className='ml-4 mb-1'>
                      Access to exclusive events, seminars, and workshops on
                      sustainable agriculture.
                    </li>
                    <li className='ml-4 mb-1'>
                      Networking opportunities with fellow students and industry
                      experts.
                    </li>
                    <li className='ml-4 mb-1'>
                      Subscription to the LARF Student Chapter newsletter.
                    </li>
                    <li className='ml-4 mb-1'>
                      Opportunities to engage in innovative agricultural
                      projects.
                    </li>
                    <li className='ml-4 mb-1'>
                      Discounts on chapter merchandise and materials.
                    </li>
                  </ul>
                  <SignupModel setMembership={handlecollegeStudent} />
                </div>
              )}
              {membershipButton.collegeLifetime && (
                <div className='w-[18rem] h-[47rem] bg-white rounded-[2rem] flex flex-col items-center'>
                  <Typography
                    variant='h3'
                    color='green'
                    className='mt-4 tracking-wide'
                  >
                    {memberShip
                      ? memberShip[1].package_name.charAt(0).toUpperCase() +
                        memberShip[1].package_name.slice(1)
                      : 'Student'}
                  </Typography>
                  <Typography variant='h5' color='gray' className=' font-thin'>
                    Package
                  </Typography>
                  <Typography
                    variant='h3'
                    color='black'
                    className='my-4 italic '
                  >
                    <span className='underline'>
                      {' '}
                      @ {memberShip ? memberShip[1].price : 9999}
                    </span>{' '}
                    <span className='text-[14px] '>One time</span>
                  </Typography>
                  <div className='bg-[#85b968] w-[12rem] h-[2.5rem] rounded-3xl text-white flex items-center justify-around text-[18px] font-semibold'>
                    Recommend{' '}
                    <span className='bg-white text-green-500 rounded-sm '>
                      <MdDoneOutline />
                    </span>
                  </div>
                  <Typography
                    variant='h6'
                    color='black'
                    className='mt-4 flex w-full items-start justify-start ml-6'
                  >
                    Included :
                  </Typography>
                  <ul className='px-2 text-[12px] list-disc py-4'>
                    <li className='ml-4 '>
                      Lifetime access to chapter events and resources.
                    </li>
                    <li className='ml-4 '>
                      Recognition as a Lifetime Member on the website.
                    </li>
                    <li className='ml-4 '>All Student Membership benefits.</li>
                    <li className='ml-4 mb-1'>
                      Access to advanced workshops and specialized training.
                    </li>
                    <li className='ml-4 '>
                      Priority registration for chapter events.
                    </li>
                    <li className='ml-4 '>
                      Opportunities to mentor student members.
                    </li>
                    <li className='ml-4 '>
                      Recognition as a Professional Member on the website.
                    </li>
                    <li className='ml-4 '>
                      Access to exclusive events, seminars, and workshops on
                      sustainable agriculture.
                    </li>
                    <li className='ml-4 '>
                      Networking opportunities with fellow students and industry
                      experts.
                    </li>
                    <li className='ml-4 '>
                      Subscription to the LARF Student Chapter newsletter.
                    </li>
                    <li className='ml-4 '>
                      Opportunities to engage in innovative agricultural
                      projects.
                    </li>
                    <li className='ml-4 '>
                      Discounts on chapter merchandise and materials.
                    </li>
                    <li className='ml-4 '>10 Years membership.</li>
                  </ul>
                  <SignupModel setMembership={handlecollegelifetime} />
                </div>
              )}
              {membershipButton.collegeProfessional && (
                <div className='w-[15rem] h-[35rem] bg-white rounded-[2rem] flex flex-col items-center'>
                  <Typography
                    variant='h3'
                    color='green'
                    className='mt-4 tracking-wide'
                  >
                    Professional
                  </Typography>
                  <Typography variant='h5' color='gray' className=' font-thin'>
                    Package
                  </Typography>
                  <Typography
                    variant='h3'
                    color='black'
                    className='my-4 italic '
                  >
                    @ 2499 <span className='text-[14px]'>Per year</span>
                  </Typography>
                  <Typography
                    variant='h6'
                    color='black'
                    className='mt-4 flex w-full items-start justify-start ml-6'
                  >
                    Included :
                  </Typography>
                  <ul className='px-2 text-[12px] list-disc py-4'>
                    <li className='ml-4 mb-1'>
                      All Student Membership benefits.
                    </li>
                    <li className='ml-4 mb-1'>
                      Access to advanced workshops and specialized training.
                    </li>
                    <li className='ml-4 mb-1'>
                      Priority registration for chapter events.
                    </li>
                    <li className='ml-4 mb-1'>
                      Opportunities to mentor student members.
                    </li>
                    <li className='ml-4 mb-1'>
                      Recognition as a Professional Member on the website.
                    </li>
                  </ul>
                  <SignupModel setMembership={handlecollegeprofessional} />
                </div>
              )}
            </div>
          </div>
          <div className='hidden w-[80%] h-[58rem] bg-gray-100 md:flex items-center justify-center px-4  gap-8 -mt-16'>
            <div className='bg-[#85b968] pl-3 rounded-t-[3rem] rounded-b-[2rem] pr-1 pb-2 shadow-2xl shadow-green-700'>
              <div className='w-[15rem] h-[35rem] bg-white rounded-[2rem] flex flex-col items-center'>
                <Typography
                  variant='h3'
                  color='green'
                  className='mt-4 tracking-wide'
                >
                  Student
                </Typography>
                <Typography variant='h5' color='gray' className=' font-thin'>
                  Package
                </Typography>
                <Typography variant='h3' color='black' className='my-4 italic '>
                  @ 999 <span className='text-[14px]'>Per year</span>
                </Typography>
                <Typography
                  variant='h6'
                  color='black'
                  className='mt-4 flex w-full items-start justify-start ml-6'
                >
                  Included :
                </Typography>
                <ul className='px-2 text-[12px] list-disc py-4'>
                  <li className='ml-4 mb-1'>
                    Access to exclusive events, seminars, and workshops on
                    sustainable agriculture.
                  </li>
                  <li className='ml-4 mb-1'>
                    Networking opportunities with fellow students and industry
                    experts.
                  </li>
                  <li className='ml-4 mb-1'>
                    Subscription to the LARF Student Chapter newsletter.
                  </li>
                  <li className='ml-4 mb-1'>
                    Opportunities to engage in innovative agricultural projects.
                  </li>
                  <li className='ml-4 mb-1'>
                    Discounts on chapter merchandise and materials.
                  </li>
                </ul>
                <SignupModel setMembership={handlecollegeStudent} />
              </div>
            </div>

            <div className='bg-[#85b968] pl-2 rounded-t-[3rem] rounded-b-[2rem] pr-2 pb-2 shadow-2xl shadow-green-700 relative top-6'>
              <div className='w-[18rem] h-[47rem] bg-white rounded-[2rem] flex flex-col items-center'>
                <Typography
                  variant='h3'
                  color='green'
                  className='mt-4 tracking-wide'
                >
                  Longterm
                </Typography>
                <Typography variant='h5' color='gray' className=' font-thin'>
                  Package
                </Typography>
                <Typography variant='h3' color='black' className='my-4 italic '>
                  <span className='underline'> @ 9999</span>{' '}
                  <span className='text-[14px] '>One time</span>
                </Typography>
                <div className='bg-[#85b968] w-[12rem] h-[2.5rem] rounded-3xl text-white flex items-center justify-around text-[18px] font-semibold'>
                  Recommend{' '}
                  <span className='bg-white text-green-500 rounded-sm '>
                    <MdDoneOutline />
                  </span>
                </div>
                <Typography
                  variant='h6'
                  color='black'
                  className='mt-4 flex w-full items-start justify-start ml-6'
                >
                  Included :
                </Typography>
                <ul className='px-2 text-[12px] list-disc py-4'>
                  <li className='ml-4 '>
                    Lifetime access to chapter events and resources.
                  </li>
                  <li className='ml-4 '>
                    Recognition as a Lifetime Member on the website.
                  </li>
                  <li className='ml-4 '>All Student Membership benefits.</li>
                  <li className='ml-4 mb-1'>
                    Access to advanced workshops and specialized training.
                  </li>
                  <li className='ml-4 '>
                    Priority registration for chapter events.
                  </li>
                  <li className='ml-4 '>
                    Opportunities to mentor student members.
                  </li>
                  <li className='ml-4 '>
                    Recognition as a Professional Member on the website.
                  </li>
                  <li className='ml-4 '>
                    Access to exclusive events, seminars, and workshops on
                    sustainable agriculture.
                  </li>
                  <li className='ml-4 '>
                    Networking opportunities with fellow students and industry
                    experts.
                  </li>
                  <li className='ml-4 '>
                    Subscription to the LARF Student Chapter newsletter.
                  </li>
                  <li className='ml-4 '>
                    Opportunities to engage in innovative agricultural projects.
                  </li>
                  <li className='ml-4 '>
                    Discounts on chapter merchandise and materials.
                  </li>
                  <li className='ml-4 '>5 Years membership.</li>
                </ul>
                <SignupModel setMembership={handlecollegelifetime} />
              </div>
            </div>

            <div className='bg-[#85b968] pl-1 rounded-t-[3rem] rounded-b-[2rem] pr-3 pb-2 shadow-2xl shadow-green-700'>
              <div className='w-[15rem] h-[35rem] bg-white rounded-[2rem] flex flex-col items-center'>
                <Typography
                  variant='h3'
                  color='green'
                  className='mt-4 tracking-wide'
                >
                  Professional
                </Typography>
                <Typography variant='h5' color='gray' className=' font-thin'>
                  Package
                </Typography>
                <Typography variant='h3' color='black' className='my-4 italic '>
                  @ 2499 <span className='text-[14px]'>Per year</span>
                </Typography>
                <Typography
                  variant='h6'
                  color='black'
                  className='mt-4 flex w-full items-start justify-start ml-6'
                >
                  Included :
                </Typography>
                <ul className='px-2 text-[12px] list-disc py-4'>
                  <li className='ml-4 mb-1'>
                    All Student Membership benefits.
                  </li>
                  <li className='ml-4 mb-1'>
                    Access to advanced workshops and specialized training.
                  </li>
                  <li className='ml-4 mb-1'>
                    Priority registration for chapter events.
                  </li>
                  <li className='ml-4 mb-1'>
                    Opportunities to mentor student members.
                  </li>
                  <li className='ml-4 mb-1'>
                    Recognition as a Professional Member on the website.
                  </li>
                </ul>
                <SignupModel setMembership={handlecollegeprofessional} />
              </div>
            </div>
          </div>
        </>
      )}
      {isStudentChecked && (
        <>
          <div className='md:hidden relative top-6 flex items-center justify-center gap-2 md:gap-10 flex-wrap'>
            <Radio
              label={
                <div className='flex items-center justify-center'>
                  <span className='text-black font-semibold'>Student</span>
                  <span className='text-red-400 text-2xl'> *</span>
                </div>
              }
              name='membershipbtn2'
              checked={membershipButton.schoolStudent}
              onClick={() =>
                setMembershipButton({
                  ...membershipButton,
                  schoolFaculty: false,
                  schoolLifetime: false,
                  schoolStudent: true,
                })
              }
              className='text-white'

              // color='indigo'
            />
            <Radio
              label={
                <div className='flex items-center justify-center'>
                  <span className='text-black font-semibold'>Lifetime</span>
                  <span className='text-red-400 text-2xl'> *</span>
                </div>
              }
              name='membershipbtn2'
              checked={membershipButton.schoolLifetime}
              onClick={() =>
                setMembershipButton({
                  ...membershipButton,
                  schoolFaculty: false,
                  schoolStudent: false,
                  schoolLifetime: true,
                })
              }
              // color='indigo'
            />
            <Radio
              label={
                <div className='flex items-center justify-center'>
                  <span className='text-black font-semibold'>Faculty</span>
                  <span className='text-red-400 text-2xl'> *</span>
                </div>
              }
              name='membershipbtn2'
              checked={membershipButton.schoolFaculty}
              onClick={() =>
                setMembershipButton({
                  ...membershipButton,

                  schoolLifetime: false,
                  schoolStudent: false,
                  schoolFaculty: true,
                })
              }
              // color='indigo'
            />
          </div>
          <div className='flex w-[80%] h-[50rem] bg-gray-100 md:hidden items-start justify-center px-4  gap-8 mt-10'>
            {membershipButton.schoolStudent && (
              <div className='bg-[#85b968] pl-3 rounded-t-[3rem] rounded-b-[2rem] pr-1 pb-2 shadow-2xl shadow-green-700'>
                <div className='w-[15rem] h-[28rem] bg-white rounded-[2rem] flex flex-col items-center px-2'>
                  <Typography
                    variant='h3'
                    color='green'
                    className='mt-4 tracking-wide'
                  >
                    Student
                  </Typography>
                  <Typography variant='h5' color='gray' className=' font-thin'>
                    Package
                  </Typography>
                  <Typography
                    variant='h3'
                    color='black'
                    className='my-4 italic '
                  >
                    @ 99 <span className='text-[14px]'>Per year</span>
                  </Typography>
                  <Typography
                    variant='h6'
                    color='black'
                    className='mt-4 flex w-full items-start justify-start ml-6'
                  >
                    Included :
                  </Typography>
                  <ul className='px-2 text-[12px] list-disc py-4'>
                    <li className='ml-4 mb-1'>Free 99 TLT.</li>
                    <li className='ml-4 mb-1'>Scholarship Opportunity.</li>
                    <li className='ml-4 mb-1'>Discounts.</li>
                    <li className='ml-4 mb-1'>Certifications.</li>
                    <li className='ml-4 mb-1'>Networking.</li>
                    <li className='ml-4 mb-1'>Research and Innovation.</li>
                    <li className='ml-4 mb-1'>Research Projects.</li>
                  </ul>
                  <SignupModel setMembership={handleschoolStudent} />
                </div>
              </div>
            )}
            {membershipButton.schoolLifetime && (
              <div className='bg-[#85b968] pl-2 rounded-t-[3rem] rounded-b-[2rem] pr-2 pb-2 shadow-2xl shadow-green-700'>
                <div className='w-[17rem] h-[37rem] bg-white rounded-[2rem] flex flex-col items-center px-2'>
                  <Typography
                    variant='h3'
                    color='green'
                    className='mt-4 tracking-wide'
                  >
                    Longterm
                  </Typography>
                  <Typography variant='h5' color='gray' className=' font-thin'>
                    Package
                  </Typography>
                  <Typography
                    variant='h3'
                    color='black'
                    className='my-4 italic '
                  >
                    <span className='underline'> @ 2499</span>{' '}
                    <span className='text-[14px] '>One time</span>
                  </Typography>
                  <div className='bg-[#85b968] w-[12rem] h-[2.5rem] rounded-3xl text-white flex items-center justify-around text-[18px] font-semibold'>
                    Recommend{' '}
                    <span className='bg-white text-green-500 rounded-sm '>
                      <MdDoneOutline />
                    </span>
                  </div>
                  <Typography
                    variant='h6'
                    color='black'
                    className='mt-4 flex w-full items-start justify-start ml-6'
                  >
                    Included :
                  </Typography>

                  <ul className='px-2 text-[12px] list-disc py-4'>
                    <li className='ml-4 mb-1'>
                      All benefits of the Student Membership.
                    </li>
                    <li className='ml-4 mb-1'>
                      All benefits of the Professional Membership.
                    </li>
                    <li className='ml-4 mb-1'>
                      Lifetime access to LARF Student Chapter` events,
                      workshops, and resources.
                    </li>
                    <li className='ml-4 mb-1'>
                      Recognition as a Lifetime Member on the LARF Student
                      Chapter website.
                    </li>
                    <li className='ml-4 mb-1'>
                      Guidance for International Job Opportunities.
                    </li>
                    <li className='ml-4 mb-1'>
                      Guidance for International Research Opportunities (PhD,
                      Postdoc, and Research Engineer).
                    </li>
                    <li className='ml-4 '>5 Years membership.</li>
                  </ul>
                  <SignupModel setMembership={handleschoollifetime} />
                </div>
              </div>
            )}
            {membershipButton.schoolFaculty && (
              <div className='bg-[#85b968] pl-1 rounded-t-[3rem] rounded-b-[2rem] pr-3 pb-2 shadow-2xl shadow-green-700'>
                <div className='w-[15rem] h-[28rem] bg-white rounded-[2rem] flex flex-col items-center px-2'>
                  <Typography
                    variant='h3'
                    color='green'
                    className='mt-4 tracking-wide'
                  >
                    Faculty
                  </Typography>
                  <Typography variant='h5' color='gray' className=' font-thin'>
                    Package
                  </Typography>
                  <Typography
                    variant='h3'
                    color='black'
                    className='my-4 italic '
                  >
                    @ 499 <span className='text-[14px]'>Per year</span>
                  </Typography>
                  <Typography
                    variant='h6'
                    color='black'
                    className='mt-4 flex w-full items-start justify-start ml-6'
                  >
                    Included :
                  </Typography>
                  <ul className='px-2 text-[12px] list-disc py-4'>
                    <li className='ml-4 mb-1'>Free 499 TLT.</li>
                    <li className='ml-4 mb-1'>Recognition.</li>
                    <li className='ml-4 mb-1'>International Opportunities.</li>
                    <li className='ml-4 mb-1'>Research Opportunity.</li>
                    <li className='ml-4 mb-1'>Collaborations.</li>
                  </ul>
                  <SignupModel setMembership={handleschoolprofessional} />
                </div>
              </div>
            )}
          </div>
          <div className='hidden w-[80%] h-[50rem] bg-gray-100 md:flex items-center justify-center px-4  gap-8 -mt-16'>
            <div className='bg-[#85b968] pl-3 rounded-t-[3rem] rounded-b-[2rem] pr-1 pb-2 shadow-2xl shadow-green-700'>
              <div className='w-[15rem] h-[28rem] bg-white rounded-[2rem] flex flex-col items-center px-2'>
                <Typography
                  variant='h3'
                  color='green'
                  className='mt-4 tracking-wide'
                >
                  Student
                </Typography>
                <Typography variant='h5' color='gray' className=' font-thin'>
                  Package
                </Typography>
                <Typography variant='h3' color='black' className='my-4 italic '>
                  @ 99 <span className='text-[14px]'>Per year</span>
                </Typography>
                <Typography
                  variant='h6'
                  color='black'
                  className='mt-4 flex w-full items-start justify-start ml-6'
                >
                  Included :
                </Typography>
                <ul className='px-2 text-[12px] list-disc py-4'>
                  <li className='ml-4 mb-1'>Free 99 TLT.</li>
                  <li className='ml-4 mb-1'>Scholarship Opportunity.</li>
                  <li className='ml-4 mb-1'>Discounts.</li>
                  <li className='ml-4 mb-1'>Certifications.</li>
                  <li className='ml-4 mb-1'>Networking.</li>
                  <li className='ml-4 mb-1'>Research and Innovation.</li>
                  <li className='ml-4 mb-1'>Research Projects.</li>
                </ul>
                <SignupModel setMembership={handleschoolStudent} />
              </div>
            </div>

            <div className='bg-[#85b968] pl-2 rounded-t-[3rem] rounded-b-[2rem] pr-2 pb-2 shadow-2xl shadow-green-700'>
              <div className='w-[17rem] h-[37rem] bg-white rounded-[2rem] flex flex-col items-center px-2'>
                <Typography
                  variant='h3'
                  color='green'
                  className='mt-4 tracking-wide'
                >
                  Longterm
                </Typography>
                <Typography variant='h5' color='gray' className=' font-thin'>
                  Package
                </Typography>
                <Typography variant='h3' color='black' className='my-4 italic '>
                  <span className='underline'> @ 2499</span>{' '}
                  <span className='text-[14px] '>One time</span>
                </Typography>
                <div className='bg-[#85b968] w-[12rem] h-[2.5rem] rounded-3xl text-white flex items-center justify-around text-[18px] font-semibold'>
                  Recommend{' '}
                  <span className='bg-white text-green-500 rounded-sm '>
                    <MdDoneOutline />
                  </span>
                </div>
                <Typography
                  variant='h6'
                  color='black'
                  className='mt-4 flex w-full items-start justify-start ml-6'
                >
                  Included :
                </Typography>

                <ul className='px-2 text-[12px] list-disc py-4'>
                  <li className='ml-4 mb-1'>
                    All benefits of the Student Membership.
                  </li>
                  <li className='ml-4 mb-1'>
                    All benefits of the Professional Membership.
                  </li>
                  <li className='ml-4 mb-1'>
                    Lifetime access to LARF Student Chapter` events, workshops,
                    and resources.
                  </li>
                  <li className='ml-4 mb-1'>
                    Recognition as a Lifetime Member on the LARF Student Chapter
                    website.
                  </li>
                  <li className='ml-4 mb-1'>
                    Guidance for International Job Opportunities.
                  </li>
                  <li className='ml-4 mb-1'>
                    Guidance for International Research Opportunities (PhD,
                    Postdoc, and Research Engineer).
                  </li>
                  <li className='ml-4 '>5 Years membership.</li>
                </ul>
                <SignupModel setMembership={handleschoollifetime} />
              </div>
            </div>

            <div className='bg-[#85b968] pl-1 rounded-t-[3rem] rounded-b-[2rem] pr-3 pb-2 shadow-2xl shadow-green-700'>
              <div className='w-[15rem] h-[28rem] bg-white rounded-[2rem] flex flex-col items-center px-2'>
                <Typography
                  variant='h3'
                  color='green'
                  className='mt-4 tracking-wide'
                >
                  Faculty
                </Typography>
                <Typography variant='h5' color='gray' className=' font-thin'>
                  Package
                </Typography>
                <Typography variant='h3' color='black' className='my-4 italic '>
                  @ 499 <span className='text-[14px]'>Per year</span>
                </Typography>
                <Typography
                  variant='h6'
                  color='black'
                  className='mt-4 flex w-full items-start justify-start ml-6'
                >
                  Included :
                </Typography>
                <ul className='px-2 text-[12px] list-disc py-4'>
                  <li className='ml-4 mb-1'>Free 499 TLT.</li>
                  <li className='ml-4 mb-1'>Recognition.</li>
                  <li className='ml-4 mb-1'>International Opportunities.</li>
                  <li className='ml-4 mb-1'>Research Opportunity.</li>
                  <li className='ml-4 mb-1'>Collaborations.</li>
                </ul>
                <SignupModel setMembership={handleschoolprofessional} />
              </div>
            </div>
          </div>
        </>
      )}

      <div className='w-[80%] h-auto bg-[#F5F5F5]'>
        <div className='flex items-start justify-center gap-10 mb-20 flex-wrap'>
          <div className='w-[380px] sm:w-[480px] py-6 flex flex-col justify-start bg-white rounded-3xl h-[320px] px-4'>
            <div className='w-full flex justify-center relative'>
              <div className='relative w-full'>
                <Typography
                  variant='h4'
                  color='black'
                  className='absolute left-[1rem] text-[20px] sm:text-[24px]'
                >
                  Join LARF or renew your membership
                </Typography>
                <img
                  src={svg03}
                  alt='logo'
                  className='w-[8rem] sm:w-[11rem] absolute top-12 left-[0.5rem]'
                />
              </div>
              <div className='w-[53%] absolute -right-2 top-12 pr-3'>
                <Typography
                  variant='h6'
                  className='font-thin sm:text-[15px] text-[11px] '
                >
                  Reach your full potential as part of the world’s largest
                  technology community. Join professionals, experts, and
                  advisors who can help shape your career, offer resources to
                  acquire new skills, and advance your professional development.
                </Typography>
              </div>
            </div>
            <div className='w-full flex items-center justify-between mt-0 sm:mt-8 relative top-[13rem] px-4'>
              <Button size='md' className='w-full mr-4 rounded-xl bg-[#6CAC8A]'>
                Join
              </Button>
              <Button size='md' className='w-full mr-4 rounded-xl bg-[#6CAC8A]'>
                Renew
              </Button>
            </div>
          </div>
          <div className='w-[380px] sm:w-[480px] py-6 flex flex-col justify-start items-center bg-white rounded-3xl h-[280px] sm:h-[320px] px-4'>
            <div className='w-full flex flex-col items-center justify-center relative'>
              <div className='relative w-full'>
                <Typography
                  variant='h4'
                  color='black'
                  className='sm:absolute left-[1rem] text-[20px] sm:text-[24px]'
                >
                  Benefits
                </Typography>
                <img
                  src={graphics02}
                  alt='logo'
                  className='w-[12rem] sm:w-[18rem] sm:absolute -top-2 left-[0.5rem] -mt-10 sm:-mt-0 mx-auto'
                />
              </div>
              <div className='w-full sm:w-[50%] sm:absolute right-4 top-8 pr-2 -mt-6 sm:-mt-0'>
                <Typography
                  variant='h6'
                  className='font-thin sm:text-[15px] text-[11px] '
                >
                  As an LARF member, you'll be presented with new resources,
                  valuable opportunities, and many discounts that will help you
                  advance your career. You can find colleagues who share your
                  vision and commitment—those who are moving technology forward
                  today.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Membership;
