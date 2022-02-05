import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fade, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import useAuth from '../../../../../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Form = ({ openForm, handleFormClose, slot, date }) => {
    const { name, time, space } = slot;
    const { user } = useAuth();

    const initialInfo = { StudentName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        console.log(newInfo);
        setBookingInfo(newInfo);

    }

    const handleFormSend = e => {
        // alert('submit successful');

        //Collect data
        const enrollment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocalDateString()

        }
        //send to the server
        // console.log(enrollment);
        fetch('http://localhost:5000/enrollment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(enrollment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        handleFormClose();
        e.preventDefault();
    }
    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={openForm}
            onClose={handleFormClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openForm}>
                <Box sx={style}>
                    <Typography id="spring-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>

                    <form onSubmit={handleFormSend}>
                        <TextField disabled
                            sx={{ width: '90%', m: 1 }}
                            label="Time"
                            color="secondary"
                            size="small"
                            defaultValue={time} />
                        <TextField sx={{ width: '90%', m: 1 }}
                            label="Student Name"
                            // name='StudentName'
                            defaultValue={user.displayName}
                            onBlur={handleOnBlur}
                            color="secondary"
                            size="small" focused />
                        <TextField sx={{ width: '90%', m: 1 }}
                            label="Student E-mail"
                            // name="StudentEmail"
                            defaultValue={user.email}
                            onBlur={handleOnBlur}
                            color="secondary"
                            size="small" focused />
                        <TextField sx={{ width: '90%', m: 1 }}
                            label="Student Phone Number"
                            // name='studentPhone'
                            onBlur={handleOnBlur}
                            color="secondary"
                            size="small" focused />
                        <TextField disabled sx={{ width: '90%', m: 1 }} label="Date" color="secondary" size="small"
                            defaultValue={date.toDateString()} />
                        <Button type='submit' color="secondary" variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default Form;