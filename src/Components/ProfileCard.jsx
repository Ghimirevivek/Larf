import React from 'react';
import { motion } from 'framer-motion';
import { MdLogout, MdOutlineCancel } from 'react-icons/md';
import { userProfileData } from '../utils/data';
import { Button, IconButton } from '@material-tailwind/react';
import { useContextValue } from '../Context';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ProfileCard = ({ setIsDropdownOpen }) => {
  const { state, dispatch } = useContextValue();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    setIsDropdownOpen(false);
    navigate('/login');
    dispatch({
      type: 'SET_USER',
      user: null,
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      className='z-20'
    >
      <div className='absolute right-1 top-16 p-8 rounded-lg w-96 bg-white'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-lg text-black'>User Profile</p>
          <IconButton className='text-gray-400 bg-white rounded-full shadow-none'>
            <MdOutlineCancel
              className='text-2xl'
              onClick={() => setIsDropdownOpen(false)}
            />
          </IconButton>
        </div>
        <div className='flex gap-5 items-center mt-6 border-b pb-6'>
          <img
            className='rounded-full h-24 w-24 object-cover'
            src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
            alt='user-profile'
          />
          <div>
            <p className='font-semibold text-xl text-black dark:text-gray-100'>
              {' '}
              {state.user}
            </p>
            <p className='text-gray-500 text-sm dark:text-gray-400'>
              {' '}
              Administrator{' '}
            </p>
            <p className='text-gray-500 text-sm font-semibold dark:text-gray-400'>
              {' '}
              {state.mail}
            </p>
          </div>
        </div>
        <div>
          {userProfileData.map((item, index) => (
            <div
              key={index}
              className='flex gap-5 border-b border-gray-300 p-4 hover:bg-gray-200 cursor-pointer  dark:hover:bg-[#42464D]'
            >
              <button
                type='button'
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
                className=' text-xl  rounded-lg p-3 hover:bg-gray-200'
              >
                {item.icon}
              </button>

              <Link to={'/profile'}>
                <p className='font-semibold text-black dark:text-gray-200 '>
                  {item.title}
                </p>
                <p className='text-gray-500 text-sm dark:text-gray-400'>
                  {' '}
                  {item.desc}{' '}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div className='mt-5'>
          <Button
            color='green'
            // bgColor={currentColor}

            className='w-full rounded-[10px]'
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
