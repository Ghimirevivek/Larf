import { Button, Typography } from '@material-tailwind/react';
import React from 'react';
import { MdOutlineRemoveCircle } from 'react-icons/md';
import { useContextValue } from '../Context';

const CartComponent = ({ setPage }) => {
  const { state, dispatch } = useContextValue();

  return (
    <div className='relative'>
      <div className='w-[20rem] h-[27rem] border-[1px] border-green-300 mr-20 my-4 rounded-md sticky top-10'>
        <Typography
          variant='h4'
          className='w-full bg-[#85b968] h-14 text-white flex items-center justify-start px-6'
        >
          My Cart
        </Typography>
        <Typography variant='h5' className='font-thin w-full px-6 py-1'>
          <MdOutlineRemoveCircle className='text-[#FFD700] text-2xl inline' />
          Items
        </Typography>
        <div className='text-gray-500 text-[14px]'>
          <span className='text-green-700 hover:underline pl-10 font-semibold cursor-pointer'>
            LARF Membership
          </span>
          ({state.membership})
          <span className='text-gray-500 text-[16px] pl-4'>{state.amount}</span>
        </div>
        <Typography className='hover:underline text-green-500 px-10 tracking-normal'>
          Remove
        </Typography>
        <div className='w-[80%] h-[2px] bg-gray-300 mx-auto mt-6'></div>
        <div className='w-full flex items-center justify-between'>
          <Typography className='pl-8 pt-2'>Net Amount INR*</Typography>
          <span className='text-gray-500 text-[16px] pr-4'>
            {state.amount}/-
          </span>
        </div>
        <div className='px-8 py-2 text-[14px] text-gray-600'>
          * Any applicable taxes, shipping charges, promotions and discounts are
          shown in the Review Order page
        </div>
        <div className='px-8 py-2 text-[14px] text-gray-600'>
          <span className='text-black font-semibold'>Questions?</span>{' '}
          <span className='text-green-500 hover:underline'>
            Please direct your inquiries to the LARF Support Center
          </span>{' '}
          and reference cart number
        </div>
        <Button
          variant='gradient'
          color='green'
          className='w-[9rem] rounded-2xl mx-8 mt-2'
          onClick={() => setPage((prev) => prev + 1)}
          disabled={true}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CartComponent;
