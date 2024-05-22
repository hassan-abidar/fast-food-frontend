import React, { useEffect } from 'react';
import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { EventCard } from '../../component/Profile/EventCard';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, deleteEventAction, getRestaurantsEvents } from '../../state/Restaurant/Actions';

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
  const dispatch = useDispatch();
  const token = localStorage.getItem("jwt"); 
  const { restaurant } = useSelector(store => store);

  useEffect(() => {
    dispatch(getRestaurantsEvents({ restaurantId: restaurant.usersRestaurant.id, token }));
  }, []);

  const initialFormValues = {
    image: "",
    location: "",
    name: "",
    startedAt: "",
    endsAt: "",
    description:""
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues, setFormValues] = React.useState(initialFormValues);

  const handleSubmit = () => {
    dispatch(createEvent({ eventData: formValues, token }));
    setFormValues(initialFormValues);
    handleClose();
  };

  const handleFormChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = (date, dateType) => {
    setFormValues({
      ...formValues,
      [dateType]: dayjs(date).toISOString() // Store the date in ISO format
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
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Event Description"
                  name="description"
                  value={formValues.description}
                  onChange={handleFormChange}
                />
              </Grid>
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
        <div>
          <div className='mt-5 px-5 flex flex-wrap gap-5'>
          {restaurant.restaurantsEvents.map((item, index) => (
                <EventCard item={item} role={"owner"}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
