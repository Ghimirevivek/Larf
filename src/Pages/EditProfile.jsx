import React from 'react';
import logo from '../Assets/logo.png';
import {
  Button,
  Input,
  Option,
  Select,
  Typography,
} from '@material-tailwind/react';
import profilepic from '../Assets/default-profile-picture.png';
import { months } from '../utils/data';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
const EditProfile = () => {
  const date = Array.from({ length: 31 }, (_, i) => i + 1);
  const startYear = 2023;
  const endYear = 1923;
  const years = Array.from(
    { length: startYear - endYear + 1 },
    (_, i) => startYear - i
  );
  return (
    <div>
      <div className='flex items-center justify-between mx-4 py-2 border-b-[2px] border-gray-300'>
        <Typography variant='h2' color='green'>
          Personal Information
        </Typography>
        <img src={logo} alt='logo' className='w-[8rem]' />
      </div>
      <div className='w-[40%] flex flex-col items-center mt-8'>
        <div className='w-[80%] flex items-center justify-center gap-10'>
          <div className='border border-gray-300 p-4'>
            <img src={profilepic} alt='logo' className='w-[8rem]' />
            <div className='flex items-center justify-center gap-2 mt-2'>
              <div className='flex items-center justify-center cursor-pointer'>
                <RiEdit2Line className='text-[25px] text-green-500 ' />
                <Typography className='font-thin text-[14px] text-green-500'>
                  Edit
                </Typography>
              </div>
              <div className='flex items-center justify-center cursor-pointer'>
                <RiDeleteBinLine className='text-[25px] text-red-500 ' />
                <Typography className='font-thin text-[14px] text-red-500'>
                  Delete
                </Typography>
              </div>
            </div>
          </div>
          <div className=' flex flex-col items-start justify-center gap-4'>
            <div className=' flex items-center justify-between'>
              <Typography variant='h6'>Name:</Typography>
              <Typography variant='h6' className='font-thin ml-4'>
                Vivek Ghimire
              </Typography>
            </div>
            <div className='flex items-center justify-between'>
              <Typography variant='h6'>Member ID/Customer Number:</Typography>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[30%] h-auto ml-14 mt-8 mb-[2rem] px-4'>
        <form
          action=''
          className='my-4 flex flex-col items-center justify-center gap-4 ml-4'
        >
          <Input
            label={
              <>
                <span className='font-semibold'>First Name</span>{' '}
              </>
            }
            className='focus:shadow-lg font-semibold  bg-[#F0F2F4]'
            color='green'
            size='lg'
          />

          <Input
            label={
              <>
                <span className='font-semibold'>Last Name</span>{' '}
              </>
            }
            className='focus:shadow-lg font-semibold  bg-[#F0F2F4]'
            color='green'
            size='lg'
          />
          <Input
            label={<>Preffered Name</>}
            className='focus:shadow-lg'
            color='green'
            size='lg'
          />
          <div className='flex items-center justify-between gap-2'>
            <Input
              label='Gender'
              className='focus:shadow-lg'
              color='green'
              size='lg'
            />
            <Select
              label={<>Birth Year</>}
              className='focus:shadow-lg'
              color='green'
              size='lg'
            >
              {years.length > 0 &&
                years.map((list, index) => (
                  <Option
                    key={index}
                    value={list}
                    className='flex items-center gap-2'
                  >
                    {list}
                  </Option>
                ))}
            </Select>
          </div>
          <div className='flex items-center justify-between gap-2'>
            {' '}
            <Select
              label={<>Birth Day</>}
              className='focus:shadow-lg'
              color='green'
              size='lg'
            >
              {date.length > 0 &&
                date.map((list, index) => (
                  <Option
                    key={index}
                    value={list}
                    className='flex items-center gap-2'
                  >
                    {list}
                  </Option>
                ))}
            </Select>
            <Select
              label={<>Birth Month</>}
              className='focus:shadow-lg'
              color='green'
              size='lg'
            >
              {months.length > 0 &&
                months.map((list, index) => (
                  <Option
                    key={index}
                    value={list}
                    className='flex items-center gap-2'
                  >
                    {list}
                  </Option>
                ))}
            </Select>
          </div>
        </form>
      </div>
      <Button
        variant='gradient'
        color='green'
        className='w-40 rounded-2xl ml-[6rem] mb-6'
      >
        Save
      </Button>
      <div className='w-full flex flex-col items-center justify-center'>
        {' '}
        <div className='w-[90%] border-b-[2px] border-gray-300 mb-10'></div>
      </div>
    </div>
  );
};

export default EditProfile;
