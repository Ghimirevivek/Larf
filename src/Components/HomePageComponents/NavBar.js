import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContextValue } from '../../../src/Context';
import { Button, Typography } from '@material-tailwind/react';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import ProfileCard from '../ProfileCard';

function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track user's authentication status
  const [isHovering, setIsHovering] = useState(false);
  const [userName, setUserName] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [googleAuthenticated, setGoogleAuthenticated] = useState(false); // Track Google authentication

  const [email, setEmail] = useState('');
  const [authMethod, setAuthMethod] = '';
  const navigate = useNavigate();
  const { state, dispatch } = useContextValue();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const authMethod = localStorage.getItem('authMethod');
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    // console.log('token:', token);
    if (authMethod === 'google') {
      setGoogleAuthenticated(true);
    }
    if (token) {
      setIsAuthenticated(true);

      // console.log('User is authenticated');

      console.log('User is authenticated');

      setUserName(name);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleGoogleLogin = async (response) => {
    // Access the user's email address from the response
    const userEmail = response.profile.email;
    setEmail(userEmail);
    setGoogleAuthenticated(true);

    localStorage.setItem('authMethod', 'google');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    setIsAuthenticated(false);
    navigate('/login');
    dispatch({
      type: 'SET_USER',
      user: null,
    });
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };
  return (
    <div className='w-full h-[80px] shadow-md sticky top-0 z-40 bg-[#FFFFFF] flex flex-row justify-between Laptop-lg:justify-around items-center py-[3px] px-2'>
      <img
        className='h-[60px] Tablet:h-[80px] '
        src='/HomePageImages/NavBarImages/logo.svg'
        alt='logo'
      />
      <NavLink
        to='/'
        activeStyle='active'
        className='w-auto px-4 h-[43px] hidden Laptop-lg:flex items-center justify-center font-poppins font-medium text-base rounded-[32px] '
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {' '}
        Home
      </NavLink>
      <NavLink
        to='/about'
        activeStyle='active'
        className='hidden Laptop-lg:flex w-auto px-3 h-[43px]  items-center justify-center font-poppins font-medium text-base rounded-[32px]  '
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        About
      </NavLink>
      <NavLink
        to='/communities'
        activeStyle='active'
        className='w-auto px-3 h-[43px] hidden Laptop-lg:flex items-center justify-center font-poppins font-medium text-base rounded-[32px] '
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Communities
      </NavLink>
      <NavLink
        to='/events'
        activeStyle='active'
        className='w-auto px-3 h-[43px] hidden Laptop-lg:flex items-center justify-center font-poppins font-medium text-base rounded-[32px] '
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Events
      </NavLink>
      <NavLink
        to='/membership'
        activeStyle='active'
        className='w-auto px-3 h-[43px] hidden Laptop-lg:flex items-center justify-center font-poppins font-medium text-base rounded-[32px]  '
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Membership
      </NavLink>
      <NavLink
        to='/gallery'
        activeStyle='active'
        className='w-auto px-3 h-[43px] hidden Laptop-lg:flex items-center justify-center font-poppins font-medium text-base rounded-[32px] '
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Gallery
      </NavLink>
      <NavLink
        to='/team'
        activeStyle='active'
        className='w-auto px-3 h-[43px] hidden Laptop-lg:flex items-center justify-center font-poppins font-medium text-base rounded-[32px]   '
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Team
      </NavLink>
      <NavLink
        to='/chapter'
        activeStyle='active'
        className='w-auto px-3 h-[43px] hidden Laptop-lg:flex items-center justify-center font-poppins font-medium text-base rounded-[32px]   '
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Chapter
      </NavLink>
      {/* <img src="/HomePageImages/NavBarImages/search.svg" alt="search"/> */}

      <div className='relative'>
        <img
          src='/HomePageImages/NavBarImages/search.svg'
          alt='search'
          onClick={toggleSearchBar}
          className='cursor-pointer hidden Laptop-lg:flex'
        />
        {/* Render the search bar below the search icon if isSearchBarOpen is true */}
        {isSearchBarOpen && (
          <div className='absolute top-8 left-0'>
            <input
              type='text'
              placeholder='Search...'
              className='border rounded-md p-2'
            />
          </div>
        )}
      </div>

      <img
        className='hidden Laptop-lg:flex'
        src='/HomePageImages/NavBarImages/line.svg'
        alt='line'
      />
      <div className='w-auto h-[42px] px-1 hidden Laptop-lg:flex flex-row justify-center items-center border-2 border-[#344C11] rounded-3xl cursor-pointer'>
        <img
          className='hidden Laptop-lg:flex'
          src='/HomePageImages/NavBarImages/plus.svg'
          alt='add'
        />
        <NavLink to='/membership' className='bg-transparent Laptop-lg:flex'>
          <p className='text-[#8EA456] font-poppins font-medium text-base'>
            Join LARF
          </p>
        </NavLink>
      </div>
      {/* <div className='space-x-[10px] p-[5px] flex justify-center items-center'>
            <img src="/HomePageImages/NavBarImages/profile.svg" alt="profile"/>  
            </div> */}
      <div>
        {googleAuthenticated && (
          <div className='mt-4  text-center'>
            <Typography variant='body' color='gray'>
              Signed in as: {email}
            </Typography>
            <Button
              onClick={handleLogout}
              className='mt-2 w-full bg-red-500 hover:bg-red-600 text-white'
            >
              Logout
            </Button>
          </div>
        )}
      </div>

      {isAuthenticated ? (
        <div className='relative text-left w-auto flex items-center justify-end'>
          <Button
            type='button'
            color='white'
            onClick={toggleDropdown}
            className='flex items-center justify-between w-auto px-4 text-[12px] font-medium rounded-md tracking-tighter gap-2'
          >
            <FaUserCircle className='text-black text-lg' />
            {userName}
            {/* <svg
                    className='-mr-1 ml-2 h-5 w-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9.293 10.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg> */}
          </Button>
          {isDropdownOpen && (
            <ProfileCard setIsDropdownOpen={setIsDropdownOpen} />
          )}
        </div>
      ) : (
        <>
          <NavLink
            to='/login'
            className='bg-[#344C11]  hidden Laptop-lg:flex items-center justify-center rounded-3xl h-[43px] w-auto px-5 text-[#FFFFFF] font-poppins font-medium text-lg'
          >
            Login
          </NavLink>
          <NavLink
            to='/register'
            className='bg-[#344C11] hidden Laptop-lg:flex items-center justify-center rounded-3xl h-[43px] w-auto px-5 text-[#FFFFFF] font-poppins font-medium text-lg'
          >
            Register
          </NavLink>
        </>
      )}
      <div onClick={handleNav} className='cursor-pointer Laptop-lg:hidden'>
        <AiOutlineMenu size={25} />
      </div>
      <div
        className={
          menuOpen
            ? 'fixed right-0 top-6 w-[50%] Tablet:w-[40%] h-screen Laptop-lg:hidden bg-[#F7F9FC]  ease-in duration-500  z-10 '
            : 'fixed right-[-100%] top-6 ease-in duration-500'
           }>
        <div className='flex w-full items-center justify-end'>
          <div onClick={handleNav} className='cursor-pointer'>
            <AiOutlineClose size={20} />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center space-y-1 Tablet:space-y-3'>
          <NavLink
            to='/'
            activeStyle='active'
            className='w-auto px-4 h-[43px] flex items-center justify-center font-poppins font-medium text-base rounded-[32px] '
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {' '}
            Home
          </NavLink>
          <NavLink
            to='/about'
            activeStyle='active'
            className='flex w-auto px-4 h-[43px]  items-center justify-center font-poppins font-medium text-base rounded-[32px]  '
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            About
          </NavLink>
          <NavLink
            to='/communities'
            activeStyle='active'
            className='w-auto px-4 h-[43px] flex items-center justify-center font-poppins font-medium text-base rounded-[32px] '
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Communities
          </NavLink>
          <NavLink
            to='/events'
            activeStyle='active'
            className='w-auto px-4 h-[43px] flex items-center justify-center font-poppins font-medium text-base rounded-[32px] '
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Events
          </NavLink>
          <NavLink
            to='/membership'
            activeStyle='active'
            className='w-auto px-4 h-[43px] flex items-center justify-center font-poppins font-medium text-base rounded-[32px]  '
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Membership
          </NavLink>
          <NavLink
            to='/gallery'
            activeStyle='active'
            className='w-auto px-4 h-[43px] flex items-center justify-center font-poppins font-medium text-base rounded-[32px] '
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Gallery
          </NavLink>
          <NavLink
            to='/team'
            activeStyle='active'
            className='w-auto px-4 h-[43px] flex items-center justify-center font-poppins font-medium text-base rounded-[32px]   '
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Team
          </NavLink>
          <NavLink
            to='/chapter'
            activeStyle='active'
            className='w-auto px-4 h-[43px] flex items-center justify-center font-poppins font-medium text-base rounded-[32px]   '
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Chapter
          </NavLink>
          <div className='relative'>
            <img
              src='/HomePageImages/NavBarImages/search.svg'
              alt='search'
              onClick={toggleSearchBar}
              className='cursor-pointer flex'
            />
            {/* Render the search bar below the search icon if isSearchBarOpen is true */}
            {isSearchBarOpen && (
              <div className='absolute top-8 left-0'>
                <input
                  type='text'
                  placeholder='Search...'
                  className='border rounded-md p-2'
                />
              </div>
            )}
          </div>

          <div className='w-[180px] h-[42px] flex flex-row justify-center items-center border-2 border-[#344C11] rounded-3xl cursor-pointer'>
            <img
              className='flex'
              src='/HomePageImages/NavBarImages/plus.svg'
              alt='add'
            />
            <NavLink to='/membership' className='bg-transparent flex'>
              <p className='text-[#8EA456] font-poppins font-medium text-base'>
                Join LARF
              </p>
            </NavLink>
          </div>
          <div>
            {googleAuthenticated && (
              <div className='mt-4  text-center'>
                <Typography variant='body' color='gray'>
                  Signed in as: {email}
                </Typography>
                <Button
                  onClick={handleLogout}
                  className='mt-2 w-full bg-red-500 hover:bg-red-600 text-white'
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
          {isAuthenticated ? (
            <div className='relative text-left w-auto flex items-center justify-end'>
              <Button
                type='button'
                color='white'
                onClick={toggleDropdown}
                className='flex items-center justify-between w-auto px-4 text-[12px] font-medium rounded-md tracking-tighter gap-2'
              >
                <FaUserCircle className='text-black text-lg' />
                {userName}
                {/* <svg
                    className='-mr-1 ml-2 h-5 w-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9.293 10.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg> */}
              </Button>
              {isDropdownOpen && (
                <ProfileCard setIsDropdownOpen={setIsDropdownOpen} />
              )}
            </div>
          ) : (
            <>
              <NavLink
                to='/login'
                className=' flex items-center justify-center rounded-3xl h-[43px] w-[93px] px-6 text-[#000000] font-poppins font-medium text-lg'
              >
                Login
              </NavLink>
              <NavLink
                to='/register'
                className=' flex items-center justify-center rounded-3xl h-[43px] w-[128px] px-6 text-[#000000] font-poppins font-medium text-lg'
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
