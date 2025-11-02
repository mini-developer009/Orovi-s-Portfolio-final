import React from 'react';
import { TbHomeFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom'; 
import { HashLink } from 'react-router-hash-link';

const Header = () => {

  const navItems = (
    <>
      <li>
        <HashLink 
          smooth 
          to="/#home" 
          className='flex items-center gap-1'
        >
          <TbHomeFilled />Home
        </HashLink>
      </li>
      <li>
        <Link to="/about">About me</Link>
      </li>
      <li>
        <Link to="/new">Projects</Link>
      </li>
      <li>
        <HashLink smooth to="/#services">Services</HashLink>
      </li>
      <li>
        <HashLink smooth to="/#skills">Skills</HashLink>
      </li>
      <li>
        <HashLink smooth to="/#resume">Resume</HashLink>
      </li>
    </>
  );

  return (
    <div className=' fixed left-0 right-0 top-0 backdrop-blur-lg z-50'>
      <div className='container mx-auto flex justify-between items-center my-3'>
        <Link to="/">
          <h1 className='text-5xl italic font-bold text-[#2B7FFF]'>Orovi</h1>
        </Link>
        <ul className='primary-col italic text-lg flex gap-5'>
          {navItems}
        </ul>

        <div>
          <button className='text-white
            px-7 py-1.5 rounded-2xl text-xl font-bold italic bg-gradient-to-r from-[#2B7FFF]  to-[#DAB2FF] cursor-pointer'>Connect</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
