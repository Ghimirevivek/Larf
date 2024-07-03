import React, { useState } from 'react';
import Slider from '../Components/Slider';
import { LuMenu } from 'react-icons/lu';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {
  Button,
  IconButton,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import ProfileCard from '../Components/ProfileCard';
import usericon from '../Assets/userlogo.png';
import { Link } from 'react-router-dom';

const DashBoard = () => {
  const [toggleSlider, setToggleSlider] = useState(true);
  const [dropdown, setDropDown] = useState(false);
  return (
    <div className='flex items-start justify-center'>
      {toggleSlider && <Slider />}
      <div className='w-full '>
        <div className='py-4 px-8 flex items-center justify-between'>
          <div>
            <IconButton color='white'>
              <LuMenu
                className='text-[28px] text-green-500 cursor-pointer'
                onClick={() => setToggleSlider(!toggleSlider)}
              />
            </IconButton>
          </div>
          <div className='flex items-center justify-around gap-2'>
            <IconButton color='white'>
              <FiShoppingCart className='text-[22px] text-green-500 cursor-pointer' />
            </IconButton>
            {/* <IconButton color='white'>
              <BsChatLeft className='text-[22px] text-green-500 cursor-pointer' />
            </IconButton>
            <IconButton color='white'>
              <RiNotification3Line className='text-[22px] text-green-500 cursor-pointer' />
            </IconButton> */}

            <div className='w-auto h-auto' onClick={() => setDropDown(true)}>
              <Tooltip
                content='Profile'
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <div className='flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 rounded-lg'>
                  <img
                    className='rounded-full w-8 h-8 object-cover'
                    src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
                    alt='user-profile'
                  />
                  <p>
                    <span className='text-gray-400 text-14'>Hi,</span>{' '}
                    <span className='text-gray-400 font-bold ml-1 text-14'>
                      User
                    </span>
                  </p>
                  <MdKeyboardArrowDown className='text-gray-400 text-14' />
                </div>
              </Tooltip>
            </div>
            {dropdown && <ProfileCard setIsDropdownOpen={setDropDown} />}
          </div>
        </div>
        <div className='w-full'>
          <Typography
            variant='h3'
            color='white'
            className='font-inter bg-[#36771E] py-4 px-20'
          >
            LARF Global Research Expert{' '}
          </Typography>
        </div>
        <div className='w-full xl:w-[85%] 2xl:w-[60%] flex items-center justify-start gap-10 m-10 flex-wrap'>
          <div className='w-80 h-40  flex items-center justify-start gap-2 px-4 py-2  shadow-xl border-[1px] border-gray-300'>
            <div className='w-[30%] h-full '>
              <img
                src={usericon}
                alt=''
                className='w-[4rem] relative top-4 left-2'
              />
            </div>
            <Link
              to='/profile/edit'
              className='w-[70%] flex flex-col items-start justify-center'
            >
              <Typography variant='h5' className='relative -top-8 left-4'>
                Profile
              </Typography>
              {/* <div className='text-[14px] -mt-6'>
                Manage personal, professional and education profile,
                communication preferences, login and security.
              </div> */}
            </Link>
          </div>
          <div className='w-80 h-40  flex items-center justify-start gap-2 px-4 py-2  shadow-xl border-[1px] border-gray-300'>
            <div className='w-[30%] h-full '>
              <img
                src={usericon}
                alt=''
                className='w-[4rem] relative top-4 left-2'
              />
            </div>

            <div className='w-[70%] flex items-center justify-start flex-col'>
              <Typography variant='h5' className='relative -top-4 left-4'>
                Membership information
              </Typography>
              <Typography className='relative top-0 right-6'>
                Comming Soon
              </Typography>
            </div>
          </div>
          <div className='w-80 h-40  flex items-center justify-start gap-2 px-4 py-2  shadow-xl border-[1px] border-gray-300'>
            <div className='w-[30%] h-full '>
              <img
                src={usericon}
                alt=''
                className='w-[4rem] relative top-4 left-2'
              />
            </div>
            <div className='w-[70%] flex items-center justify-start flex-col'>
              <Typography variant='h5' className='relative -top-4 left-4'>
                Payment Information
              </Typography>
              <Typography className='relative top-0 right-6'>
                Comming Soon
              </Typography>
            </div>
          </div>
          <div className='w-80 h-40  flex items-center justify-start gap-2 px-4 py-2  shadow-xl border-[1px] border-gray-300'>
            <div className='w-[30%] h-full '>
              <img
                src={usericon}
                alt=''
                className='w-[4rem] relative top-4 left-2'
              />
            </div>
            <div className='w-[70%] flex items-center justify-start flex-col'>
              <Typography variant='h5' className='relative -top-4 -left-4'>
                Help & Support
              </Typography>
              <Typography className='relative top-0 right-6'>
                Comming Soon
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
