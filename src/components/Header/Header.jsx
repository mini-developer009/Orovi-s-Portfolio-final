
import React from 'react';
import { TbHomeFilled } from 'react-icons/tb';
import { Link } from 'react-router';

const Header = () => {
   
    // const navItems = <>
    // <p className='flex items-center gap-1'> <TbHomeFilled className=''/>Home</p>
    // <p>About me</p>
    // <p>Home</p>
    // <p>Home</p>
    // <p>Home</p>
    // <p>Home</p>
    // </>

//     const navItems = [
//   { icon: <TbHomeFilled  />, label: "Home", },

// ];



    return (
        <div className=' fixed left-0 right-0 top-0 backdrop-blur-lg'>
           <div className='container mx-auto flex justify-between items-center my-3'>
             <h1 className='text-5xl italic font-bold text-[#2B7FFF]'>Orovi</h1>
            <div className='primary-col italic text-lg flex gap-5'>
              
                 <Link className='flex items-center gap-1'>
                <TbHomeFilled className=''/>Home</Link>
                 {/* <li
        class="flex items-center bg-blue-500 text-white rounded-xl overflow-hidden 
               transition-all duration-300 ease-in-out group hover:pr-4"
      >
        <div
          class="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-xl
                 transition-transform duration-300 group-hover:scale-110"
        >
          🏠
        </div>
        <span
          class="whitespace-nowrap font-medium text-sm opacity-0 w-0 
                 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:w-auto group-hover:ml-3"
        >
          Home
        </span>
      </li> */}

                <Link to="#about">About me</Link>
                <Link to="/new">Projects</Link>
                <Link>Services</Link>
                <Link>Skills</Link>
                <Link>Resume</Link> 
   

            </div>
            <div>
                <button className='text-white
                px-7 py-1.5 rounded-2xl text-xl font-bold italic bg-gradient-to-r from-[#2B7FFF]  to-[#DAB2FF] cursor-pointer'>Connect</button>
            </div>
           </div>
        </div>
    );
};

export default Header;