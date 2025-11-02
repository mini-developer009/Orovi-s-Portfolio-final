import React from 'react';

const Footer = () => {
    return (
        <div className='mt-10 '>
            <div className='border-t border-[#2B7FFF] rounded-t-3xl bg-[#2B7FFF1A]'>
                <h1 className='text-3xl font-bold text-[#2B7FFF] text-center mt-10'>Get in touch</h1>
                <div className='flex  justify-around text-xl'>
                  
                     <div>
                        <h1>Contact</h1>
                    </div>
                    <div>
                        <h1>Socials</h1>
                    </div>
                   
                    <div >
                       <p> Message Form</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;