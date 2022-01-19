import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fade, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

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

    const handleFormSend = e => {
        alert('submit successful');
        //Collect data
        //send to the server
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
                        <TextField disabled sx={{ width: '90%', m: 1 }} label="Time" color="secondary" size="small"
                            defaultValue={time} />
                        <TextField sx={{ width: '90%', m: 1 }} label="Your Name" color="secondary" size="small" focused />
                        <TextField sx={{ width: '90%', m: 1 }} label="Your E-mail" color="secondary" size="small" focused />
                        <TextField sx={{ width: '90%', m: 1 }} label="Your Phone Number" color="secondary" size="small" focused />
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