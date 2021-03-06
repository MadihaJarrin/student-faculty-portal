import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../Services/Services';
import education from '../../../images/management.png'
import AppointmentBanner from '../AppoinmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import About from '../../About/About';
import Programs from '../../Faculty/Programs/Programs';
import Vision from '../../Vision/Vision/Vision';
import Testimonial from '../../Vision/Testimonial/Testimonial';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Programs></Programs>
            <Vision></Vision>
            <Testimonial></Testimonial>
            <AppointmentBanner></AppointmentBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;