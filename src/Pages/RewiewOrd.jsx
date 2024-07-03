import React from 'react';
import logo from '../Assets/logo.png';
import { Button, Checkbox, Typography } from '@material-tailwind/react';
import { useContextValue } from '../Context';
import axios from 'axios';
import { useState } from 'react';

import { useNavigate, Redirect, Route } from 'react-router-dom';
import NavBar from '../Components/HomePageComponents/NavBar';
import Footer from '../Components/HomePageComponents/Footer';

const RewiewOrd = ({ setPage, paymentmode, address }) => {
  const { state, dispatch } = useContextValue();
  const [loading2, setLoading2] = useState(false);

  // const taxAmount = state.amount * (18 / 100).toFixed(2);  

  const getPaymentDetails = async () => {
    try {
      // Uncomment the following line if this function is an event handler in a form
   
  
      setLoading2(true);
      console.log('Payment details....');
  
      // Use the `params` option for passing parameters in a GET request
      const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/payment/pay`, {
        params: {
          amount: state.amount,
        },
      });
  
      console.log('res-->', res);
  
      const redirectUrl =
        res.data.message.data.instrumentResponse.redirectInfo.url;
      console.log("Redirect to this url :--- ", redirectUrl);
  
      window.location.replace(redirectUrl);
  
      // Uncomment the following lines if you want to set loading to false after a delay
      // setTimeout(() => {
      //   setLoading2(false);
      // }, 1500);
    } catch (error) {
      setLoading2(false);
      console.error('Error during Payment:', error);
    } finally {
      setLoading2(false); // Ensure loading state is set to false regardless of success or failure
    }
  };

  /*const getPaymentDetails = async (e) => {
   
    try {
    //  e.preventDefault();
      setLoading2(true);
      console.log('here');
      const response = await axios
        .get(
          `${process.env.REACT_APP_API_BASE_URL}/api/payment/phonepe?amount=${state.amount}`,
          {
            // amount: state.amount,
          }
        )
        .then((res) => {
          console.log('res-->', res);
          const redirectUrl =
            res.data.message.data.instrumentResponse.redirectInfo.url;
          console.log('Redirect to this url :--- ', redirectUrl);
          window.location.replace(redirectUrl);
          // setTimeout(() => {
          //   setLoading2(false);
          // }, 1500);
        })
        .catch((error) => {
          setLoading2(false);
          //.error(error);
        });
    } catch (error) {
      console.error('Error during Payment:', error);
    }
  };*/

  return (
    <div className=''>
      <NavBar />
      {/* <div className='w-full h-10 bg-black'></div> */}
      <div className='flex items-center justify-between mx-4 py-2 border-b-[2px] border-gray-300'>
        <Typography variant='h2' color='green'>
          Membership Application
        </Typography>
        <img src={logo} alt='logo' className='w-[8rem]' />
      </div>
      <div className='w-full h-[3rem] bg-gray-100 flex items-center justify-between px-20 py-2'>
        {/* <Typography variant='h5' className='font-normal '>
          Contact Information
        </Typography>
        <Typography variant='h5' className='font-normal '>
          Profile Summary
        </Typography> */}
        <Typography variant='h5' className='font-normal'>
          Cart
        </Typography>
        <Typography variant='h5' className='font-normal'>
          Payment
        </Typography>
        <Typography
          variant='h5'
          className='font-normal active text-white p-2 rounded-md'
        >
          Review Order
        </Typography>
        <Typography variant='h5' className='font-normal'>
          Order Confirmation
        </Typography>
      </div>
      <div className='flex items-start justify-between w-full h-[6rem]'>
        <div className='flex items-center justify-between mx-4 py-4 border-b-[2px] border-gray-300 w-full'>
          <Typography variant='h3' color='green' className='font-normal'>
            Review Order
          </Typography>
          <Button
            variant='gradient'
            color='green'
            className='w-[8rem] rounded-lg text-[16px]'
            disabled='true'
            onClick={() => setPage(5)}
          >
            Finish
          </Button>
        </div>
      </div>
      <div className='w-[80%] h-auto ml-10 mb-6 flex items-start justify-between'>
        <div className='w-40% flex flex-col items-start justify-start'>
          <Typography variant='h6' className=''>
            Address for certificate disbursal
          </Typography>
          <span className='w-[15rem]'>{address ? address : '(optional)'}</span>
        </div>
        <div className='w-40% flex flex-col items-center justify-center'>
          <Typography variant='h6' className=''>
            Payment details:
          </Typography>
          <span>{paymentmode}</span>
        </div>
        <div className='w-40% flex flex-col items-center justify-center'>
          <Typography variant='h6' className=''>
            Cart number:
          </Typography>
          <span>NA</span>
        </div>
      </div>
      <div className='w-[90%] h-[10rem] shadow-2xl rounded-md ml-10 mb-10 pt-6 flex items-start justify-between border-[2px] border-gray-200 '>
        <div className='flex items-start justify-around w-[35%]'>
          <img src={logo} alt='logo' className='w-[10rem]' />
          <div className='flex flex-col items-start justify-center'>
            <span className='text-gray-500 text-[20px] '>Description</span>
            <span className='text-green-700 hover:underline font-semibold cursor-pointer text-[20px]'>
              LARF Membership
            </span>
            <span>({state.membership})</span>
          </div>
        </div>
        <div className='flex items-start justify-around w-[65%]'>
          {/* <div className='flex flex-col items-start justify-center'>
            <span className='text-gray-500 text-[20px] '>Quantity</span>
            <span className='text-[20px] text-center w-full font-semibold'>
              1
            </span>
            <Typography className='hover:underline text-green-500 tracking-normal text-center text-[20px]'>
              Remove
            </Typography>
          </div> */}
          <div className='flex flex-col items-start justify-start'>
            <span className='text-gray-500 text-[20px] w-10'>
              Product Price
            </span>

            <Typography className=' tracking-normal text-center text-[20px] font-semibold'>
              {state.amount}
            </Typography>
          </div>
          {/* <div className='flex flex-col items-start justify-start'>
            <span className='text-gray-500 text-[20px] w-10'>Tax Rate</span>

            <Typography className=' tracking-normal text-center text-[20px] font-semibold'>
              18.00%
            </Typography>
          </div> */}
          {/* <div className='flex flex-col items-start justify-start'>
            <span className='text-gray-500 text-[20px] w-10'>Tax Amount</span>

            <Typography className=' tracking-normal text-center text-[20px] font-semibold'>
              {taxAmount}
            </Typography>
          </div> */}
          <div className='flex flex-col items-start justify-start'>
            <span className='text-gray-500 text-[20px] w-10'>
              Product Total
            </span>

            <Typography className=' tracking-normal text-center text-[20px] font-semibold'>
              {state.amount}
            </Typography>
          </div>
        </div>
      </div>
      <div className='w-[90%] h-[6rem]  mx-10 flex items-start justify-end border-t-[2px] border-gray-300 pt-6'>
        <div className='flex flex-col items-end justify-center'>
          <div className='flex items-center justify-between w-[25rem] font-thin'>
            <Typography className='flex items-center justify-end w-full relative right-[5rem] '>
              Net Amount:
            </Typography>
            &#8377;{state.amount}
          </div>
          {/* <div className='flex items-center justify-between w-[18rem] font-thin'>
            <Typography className='flex items-center justify-end w-full relative right-[8.45rem]'>
              Shipping and Handling:
            </Typography>
            &#8377;{0}
          </div> */}
          {/* <div className='flex items-center justify-between w-[18rem] font-thin'>
            {' '}
            <Typography className='flex items-center justify-end w-full relative right-[5.55rem]'>
              Tax:{' '}
            </Typography>
            &#8377;{taxAmount}
          </div> */}
        </div>
      </div>
      <div className='w-[90%] ml-10 flex items-center justify-end border-b-[2px] border-gray-300 py-6 mb-4'>
        <div className='flex items-center justify-between w-[25rem] '>
          <Typography variant='h6' className='text-[25px]'>
            * Total INR:
          </Typography>
          <span className='relative left-0 font-bold text-[19px]'>
            &#8377;{state.amount}
          </span>
        </div>
      </div>
      <div className='ml-10'>
        <Checkbox
          color='green'
          label={
            <>
              I have read and accept to the LARF Terms & Conditions{' '}
              <span className='text-green-400'>
                View the LARF Terms & Conditions
              </span>
            </>
          }
        />
      </div>
      <div className='ml-10 -mt-3'>
        <Checkbox
          color='green'
          label={
            <>
              I have read and accept to the LARF Terms of Membership{' '}
              <span className='text-green-400'>
                View the LARF Terms of Membership
              </span>
            </>
          }
        />
      </div>
      <Button
        variant='gradient'
        color='green'
        className='w-40 rounded-2xl mx-10 mt-6 mb-4'
        onClick={ async () => { getPaymentDetails() }}
      >
        Finish
      </Button>
      <div className='mx-10 text-red-400 text-[16px]'>
        Please acknowledge{' '}
        <span className='font-semibold'>the LARF Terms of Membership</span> and{' '}
        <span className='font-semibold'>LARF Terms & Conditions</span> to
        complete checkout.
      </div>
      <div className='mx-10 mb-20 mt-1 text-[18px] font-thin'>
        *You will be billed INR{' '}
        <span className='font-semibold'>{state.amount}.00</span>
      </div>
      <Footer />
    </div>
  );
};

export default RewiewOrd;
