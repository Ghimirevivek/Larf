import React, { useState, useEffect } from 'react';
import logo from '../Assets/logo.png';
import { Button, Typography } from '@material-tailwind/react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../Components/HomePageComponents/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContextValue } from '../Context';
import axios from 'axios';
import NavBar from '../Components/HomePageComponents/NavBar';
import Glogo from '../Assets/gpay.png';

const Login = () => {
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const [email, setEmail] = useState('');
  const [authGoogle, setAuthGoogle] = useState(false); // Track Google authentication
  const [password, setPassword] = useState('');
  const [googleAuthenticated, setGoogleAuthenticated] = useState(false); // Track Google authentication
  const [rememberMe, setRememberMe] = useState(false); // Track "Remember Me" state
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const { state, dispatch } = useContextValue();

  const google = () => {
    window.open(`${process.env.REACT_APP_API_BASE_URL}/auth/google`, '_self');

    // Define a function to handle a successful Google login callback
    const handleSuccessfulGoogleLogin = () => {
      // Assuming you have a way to detect a successful Google login, set authGoogle to true
      const isGoogleLoginSuccessful = true;

      if (isGoogleLoginSuccessful) {
        // Set 'authGoogle' to 'true' in local storage upon successful login
        localStorage.setItem('authGoogle', 'true');
        // Redirect the user to the desired page after successful login
        navigate('/');

        // You can also perform additional actions if needed, such as fetching user data or displaying a success message.
      } else {
        // Handle unsuccessful login
        showFailedMessage();
      }
    };

    // Call the callback function when the login is successful
    handleSuccessfulGoogleLogin();
  };

  const [errorMsg, setErrorMsg] = useState({
    emailMsg: '',
    passwordMsg: '',
  });

  const [validation, setValidation] = useState({
    checkEmail: false,
    checkPassword: false,
  });

  const handleEmailValidation = () => {
    if (email !== '' && !email.includes('@')) {
      setValidation({ ...validation, checkEmail: true });
      setErrorMsg({ ...errorMsg, emailMsg: 'Invalid Email!' });
    } else {
      setValidation({ ...validation, checkEmail: false });
      setErrorMsg({ ...errorMsg, emailMsg: '' });
    }
  };

  const handlePasswordValidation = () => {
    if (password !== '' && password.length < 8) {
      setValidation({ ...validation, checkPassword: true });
      setErrorMsg({ ...errorMsg, passwordMsg: 'Invalid Password!' });
    } else {
      setValidation({ ...validation, checkPassword: false });
      setErrorMsg({ ...errorMsg, passwordMsg: '' });
    }
  };

  useEffect(() => {
    if (email) {
      handleEmailValidation();
    }
  }, [email]);

  useEffect(() => {
    if (password) {
      handlePasswordValidation();
    }
  }, [password]);

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleGoogleLogin = (response) => {
    // Access the user's email address from the response
    const email = response.profile.email;

    // Now you can use userEmail as the username or for other purposes
    setEmail(email);

    // Set authGoogle to true upon successful Google login
    setAuthGoogle(true);

    // Store authGoogle in localStorage
    localStorage.setItem('authGoogle', true);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token when logging out
    localStorage.removeItem('name');
    localStorage.removeItem('authMethod');
    setGoogleAuthenticated(false);
    navigate('/login'); // Redirect to the login page after logout
  };
  const handlelogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/user/login`,
        {
          email,
          password,
        }
      );
      // console.log(response);
      if (response.status === 200) {
        const data = response.data;
        console.log('Successfully logged in', data.message);
        const token = response.data.message.token; // Replace 'response.data.token' with the actual way you access the token in your frontend code
        dispatch({
          type: 'SET_USER',
          user: data.message.name,
          email: data.message.email,
        });
        localStorage.setItem('email', data.message.email);
        localStorage.setItem('name', data.message.name);
        localStorage.setItem('token', token);

        if (data.success) {
          showSuccessMessage();
          setTimeout(() => {
            navigate('/');
          }, 1000);
        } else {
          showFailedMessage();
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
      showUser();
    }
  };

  const googleLogout = () => {
    window.open(`${process.env.REACT_APP_API_BASE_URL}/auth/logout/`, '_self');
  };
  const showSuccessMessage = () => {
    toast.success('Successfully logged in!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showUser = () => {
    toast.error('User Not Found!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showFailedMessage = () => {
    toast.error('Invalid credentials!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_BASE_URL}/auth/verifyGoogle`,
      '_self'
    );
  };

  return (
    <>
      {' '}
      <NavBar />
      <div className='flex min-h-[90vh] flex-col justify-start px-6 lg:px-8 mt-2 lg:mt-0 overflow-hidden bg-gray-100 w-full'>
        <div className='bg-white h-auto mx-auto py-6 px-10 rounded-xl mt-10 shadow-2xl sm:w-[27rem] w-[100%] flex flex-col items-center'>
          <img src={logo} alt='logo' className='w-[8rem] ' />
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
            Log In
          </Typography>
          <div className='mt-6 w-full'>
            <form className='flex flex-col justify-center gap-2' method='post'>
              <div className='mt-1'>
                <input
                  id='email'
                  type='text'
                  placeholder='Email'
                  required
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                  // autoComplete='off'
                  className='block w-full h-14 rounded-md border-0 px-4 py-6 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-green-600 sm:text-md sm:leading-6 outline-none'
                />
                {validation.checkEmail && errorMsg.emailMsg && (
                  <p className='text-[12px] text-red-400'>
                    {errorMsg.emailMsg}
                  </p>
                )}
              </div>

              <div className='mt-4'>
                <input
                  id='password'
                  type='password'
                  placeholder='Password'
                  required
                  name='password'
                  autoComplete='off'
                  onChange={(e) => setPassword(e.target.value)}
                  className='block w-full h-14 rounded-md border-0 px-4 py-6 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 sm:text-md sm:leading-6 outline-none'
                />
                {validation.checkPassword && errorMsg.passwordMsg && (
                  <p className='text-[12px] text-red-400'>
                    {errorMsg.passwordMsg}
                  </p>
                )}
              </div>
              <div className='flex justify-between items-center mt-4'>
                <div className='space-x-2 flex items-center'>
                  <input
                    type='checkbox'
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  <span className=' text-xs text-[#9a9a9a]'>Remember Me</span>
                </div>
                <div className='text-xs font-semibold text-[#66a246] cursor-pointer'>
                  Forgot your password?
                </div>
              </div>

              <Button
                type='button'
                onClick={handlelogin}
                className='mt-4 flex w-full justify-center px-4 py-6 items-center rounded-md bg-[#85b968] text-base h-14 text-md font-semibold leading-6 text-white shadow-sm hover:bg-[#66a246] mb-4'
              >
                Login
              </Button>
              <ToastContainer />
              <p className='text-sm text-[#9a9a9a] text-center mb-4'>
                Don't have an account ?{' '}
                <Link to={'/register'} className='text-[#66a246] underline'>
                  Signup
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
      <Footer />
    </>
  );
};

export default Login;
