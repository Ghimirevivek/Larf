import React, { useEffect, useState } from 'react';
import { Button, Typography, Input } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import NavBar from '../Components/HomePageComponents/NavBar';
import Glogo from '../Assets/gpay.png';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const [errorMsg, setErrorMsg] = useState({
    phoneNoMsg: '',
    emailMsg: '',
    passwordMsg: '',
    confirmPasswordMsg: '',
  });

  const [validation, setValidation] = useState({
    checkPhoneNo: false,
    checkEmail: false,
    checkPassword: false,
    checkConfirmPassword: false,
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confpasswordVisible, setconfPasswordVisible] = useState(false);

  const handlePhoneValidation = () => {
    const phoneNumberRegex = /^\d{10}$/;
    if (
      formData.phoneNo !== '' &&
      !phoneNumberRegex.test(formData.phoneNo) &&
      formData.phoneNo !== 45
    ) {
      setValidation({ ...validation, checkPhoneNo: true });
      setErrorMsg({
        ...errorMsg,
        phoneNoMsg: 'Phone no should be greater then 10 digits!',
      });
    } else {
      setValidation({ ...validation, checkPhoneNo: false });
      setErrorMsg({ ...errorMsg, phoneNoMsg: '' });
    }
  };
  const handleEmailValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.email !== '' && !emailRegex.test(formData.email)) {
      setValidation({ ...validation, checkEmail: true });
      setErrorMsg({ ...errorMsg, emailMsg: 'Invalid Email!' });
    } else {
      setValidation({ ...validation, checkEmail: false });
      setErrorMsg({ ...errorMsg, emailMsg: '' });
    }
  };
  const handlePasswordValidation = () => {
    if (formData.password !== '' && formData.password.length < 8) {
      setValidation({ ...validation, checkPassword: true });
      setErrorMsg({ ...errorMsg, passwordMsg: 'Invalid Password!' });
    } else {
      setValidation({ ...validation, checkPassword: false });
      setErrorMsg({ ...errorMsg, passwordMsg: '' });
    }
  };
  const handleConfirmPasswordValidation = () => {
    if (
      formData.confirmPassword !== '' &&
      formData.password !== formData.confirmPassword
    ) {
      setValidation({ ...validation, checkConfirmPassword: true });
      setErrorMsg({
        ...errorMsg,
        confirmPasswordMsg: 'Password doesnot match!',
      });
    } else {
      setValidation({ ...validation, checkConfirmPassword: false });
      setErrorMsg({ ...errorMsg, confirmPasswordMsg: '' });
    }
  };

  useEffect(() => {
    if (formData.phoneNo !== '') {
      handlePhoneValidation();
    }
  }, [formData.phoneNo]);

  useEffect(() => {
    if (formData.email) {
      handleEmailValidation();
    }
  }, [formData.email]);

  useEffect(() => {
    if (formData.confirmPassword) {
      handleConfirmPasswordValidation();
    }
  }, [formData.confirmPassword]);

  useEffect(() => {
    if (formData.password) {
      handlePasswordValidation();
    }
  }, [formData.password]);

  // useEffect(() => {
  //   console.log(formData, validation, errorMsg);
  // }, [formData]);

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://qaapis.largestagroresearch.org/user/register',
        formData
      );

      console.log(response);

      if (response.status === 200) {
        const data = response.data;
        console.log('Successfully posted', data);

        if (data.success) {
          showSuccessMessage();
          setTimeout(() => {
            navigate('/login');
          }, 1000);
        } else {
          showFailedMessage();
        }
      }
    } catch (error) {
      console.error('Error during registration:', error);
      showFailedMessage();
    }
  };

  const showSuccessMessage = () => {
    toast.success('Successfully registered!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showFailedMessage = () => {
    toast.error('User already exists or invalid credentials!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_BASE_URL}/auth/verifyGoogle/`,
      '_self'
    );
  };
  return (
    <div>
      <NavBar />
      <div className='flex min-h-[90vh] flex-col justify-start px-6 lg:px-8 mt-2 lg:mt-0 overflow-hidden bg-gray-100 w-full'>
        <div className='bg-white h-auto mx-auto py-6 px-10 rounded-xl mt-10 shadow-2xl sm:w-[33rem] w-[100%] flex flex-col items-center'>
          <img src={logo} alt='logo' className='w-[8rem]' />
          <Button
            onClick={googleAuth}
            color='white'
            className='mt-10 w-full h-[8vh] border-[1px] border-solid border-[#c2c8d0] text-black rounded-md text-left pl-4 hover:bg-[#85b968] flex items-center justify-start gap-6'
          >
            <img src={Glogo} alt='' className='w-10' />
            Continue with Google
          </Button>
          <div className='flex justify-between items-center mt-4 w-full mb-4'>
            <div className='w-[40%] h-[1px] bg-[#c2c8d0]'></div>
            <span className='text-base text-[#9a9a9a]'>OR</span>
            <div className='w-[40%] h-[1px] bg-[#c2c8d0]'></div>
          </div>
          <Typography variant='h3' color='gray'>
            Create Account
          </Typography>
          <div className='mt-6 w-full'>
            <form className='flex flex-col justify-center gap-2'>
              <div className='flex justify-between items-center mt-1 gap-4 flex-wrap sm:flex-nowrap '>
                <Input
                  label={<>First name</>}
                  id='firstName'
                  type='text'
                  name='firstName'
                  size='lg'
                  value={formData.firstName}
                  onChange={handleChange}
                  className='focus:shadow-lg'
                  color='green'
                />
                <Input
                  id='LastName'
                  type='text'
                  label='Last name'
                  name='lastName'
                  size='lg'
                  value={formData.lastName}
                  onChange={handleChange}
                  className='focus:shadow-lg'
                  color='green'
                />
              </div>

              <div className='mt-1 flex flex-col items-start'>
                <Input
                  id='email'
                  type='text'
                  size='lg'
                  label='Email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='focus:shadow-lg'
                  color='green'
                />
                {validation.checkEmail && errorMsg.emailMsg && (
                  <p className='text-[12px] text-red-400 -mt-1'>
                    {errorMsg.emailMsg}
                  </p>
                )}
              </div>
              <div className='mt-1 flex flex-col items-start'>
                <Input
                  id='phone'
                  type='number'
                  label='Phone No'
                  name='phoneNo'
                  size='lg'
                  value={formData.phoneNo}
                  onChange={handleChange}
                  className='focus:shadow-lg'
                  color='green'
                />
                {validation.checkPhoneNo && errorMsg.phoneNoMsg && (
                  <p className='text-[12px] text-red-400 -mt-1'>
                    {errorMsg.phoneNoMsg}
                  </p>
                )}
              </div>

              <div className='mt-1 flex flex-col items-start'>
                <Input
                  id='password'
                  type={passwordVisible ? 'text' : 'password'}
                  size='lg'
                  label='Password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className='focus:shadow-lg'
                  color='green'
                  icon={
                    passwordVisible ? (
                      <AiOutlineEye
                        className='text-2xl text-gray-800 cursor-pointer'
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className='text-2xl text-gray-800 cursor-pointer'
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      />
                    )
                  }
                />
                {validation.checkPassword && errorMsg.passwordMsg && (
                  <p className='text-[12px] text-red-400 -mt-1'>
                    {errorMsg.passwordMsg}
                  </p>
                )}
              </div>
              <div className='mt-1 flex flex-col items-start'>
                <Input
                  id='cnfpassword'
                  type={confpasswordVisible ? 'text' : 'password'}
                  size='lg'
                  label='Confirm Password'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className='focus:shadow-lg'
                  color='green'
                  icon={
                    confpasswordVisible ? (
                      <AiOutlineEye
                        className='text-2xl text-gray-800 cursor-pointer'
                        onClick={() =>
                          setconfPasswordVisible(!confpasswordVisible)
                        }
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className='text-2xl text-gray-800 cursor-pointer'
                        onClick={() =>
                          setconfPasswordVisible(!confpasswordVisible)
                        }
                      />
                    )
                  }
                />
                {validation.checkConfirmPassword &&
                  errorMsg.confirmPasswordMsg && (
                    <p className='text-[12px] text-red-400 -mt-1'>
                      {errorMsg.confirmPasswordMsg}
                    </p>
                  )}
              </div>
              <div className='flex justify-between items-center mt-4'>
                <div className='space-x-2 flex items-center'>
                  <input
                    type='checkbox'
                    onChange={handleCheckboxChange}
                    checked={isCheckboxChecked}
                  />

                  <span className=' text-xs text-[#9a9a9a]'>I accept</span>
                  <div className='text-xs font-semibold text-[#66a246] cursor-pointer'>
                    Terms & Conditions
                  </div>
                </div>
              </div>

              <Button
                type='button'
                onClick={handleSubmit}
                className={`mt-4 flex w-full justify-center px-4 py-2 items-center rounded-md bg-[#85b968] text-base h-12 text-md font-semibold leading-6 text-white shadow-sm hover:bg-[#66a246] mb-4 ${
                  isCheckboxChecked ? '' : 'opacity-50 pointer-events-none'
                }`}
              >
                Create Account
              </Button>
              <ToastContainer />
              <p className='text-sm text-[#9a9a9a] text-center mb-4'>
                Already have an account?
                <Link to='/login' className='text-[#66a246] underline'>
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
        <p className='mt-4 text-center text-md text-gray-500 mb-8'>
          <Link to={'/terms-&-conditions'}>Terms of use</Link>
          <span className='inline-block mx-2 h-4 w-[1px] bg-gray-500 relative top-[4px]'></span>
          <Link to={'/privacy-policy'}> Privacy policy</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
