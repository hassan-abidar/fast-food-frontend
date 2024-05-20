import React from 'react';
import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

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

export const Events = () => {
  const initialFormValues = {
    image: "",
    location: "",
    name: "",
    startedAt: "",
    endsAt: ""
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues, setFormValues] = React.useState({
    image: "",
    location: "",
    name: "",
    startedAt: "",
    endsAt: ""
  });

  const handleSubmit = () => {
    console.log("formValues" , formValues);
    setFormValues(initialFormValues)
    handleClose();
  };

  const handleFormChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = (date, dateType) => {
    const formattedDate = dayjs(date).format("MMMM DD, YYYY hh:mm A");
    setFormValues({
      ...formValues,
      [dateType]: formattedDate
    });
  };

  return (
    <div>
      <div className='p-5'>
        <Button variant='contained' onClick={handleOpen}>
          Create new event
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create New Event
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Image URL"
                  name="image"
                  value={formValues.image}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Location"
                  name="location"
                  value={formValues.location}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Event Name"
                  name="name"
                  value={formValues.name}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="Starts At"
                    value={formValues.startedAt ? dayjs(formValues.startedAt) : null}
                    onChange={(date) => handleDateChange(date, 'startedAt')}
                    renderInput={(params) => <TextField {...params} margin="normal" fullWidth />}
                    PaperProps={{
                      sx: {
                        bgcolor: 'background.paper'
                      }
                    }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="Ends At"
                    value={formValues.endsAt ? dayjs(formValues.endsAt) : null}
                    onChange={(date) => handleDateChange(date, 'endsAt')}
                    renderInput={(params) => <TextField {...params} margin="normal" fullWidth />}
                    PaperProps={{
                      sx: {
                        bgcolor: 'background.paper'
                      }
                    }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
                  Create event
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
