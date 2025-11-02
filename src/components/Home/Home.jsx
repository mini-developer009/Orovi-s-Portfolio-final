import React from 'react';
import Banner from '../Banner/Banner';
import About from '../../pages/AboutMe/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

           <div id="about">
             <About></About>
           </div>

        </div>
    );
};

export default Home;