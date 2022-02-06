import React from 'react';
import Footer from '../Home/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import About from './About';

const AboutSec = () => {
    return (
        <div>
            <Navigation></Navigation>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default AboutSec;