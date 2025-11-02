import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <div>
      <div id="home">
        <Banner></Banner>
      </div>
      <div id="services" className='pt-20'>
        <h2 className='text-3xl font-bold'>Services Section</h2>
      </div>

      <div id="skills" className='pt-20'>
        <h2 className='text-3xl font-bold'>Skills Section</h2>
      </div>

      <div id="resume" className='pt-20'>
        <h2 className='text-3xl font-bold'>Resume Section</h2>
      </div>
    </div>
  );
};

export default Home;
