import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../Footer/Footer';
import AppointmentHeader from './AppointmentHeader';
import AppointmentTime from './AppointmentTime';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AppointmentTime date={date}></AppointmentTime>
            <Footer></Footer>
        </div>

    );
};

export default Appointment;