import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Form, Field, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../state/Authentification/Action'
import { useDispatch } from 'react-redux'

const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: ""
}

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (value) => {
        console.log("form values : ",value )
        dispatch(registerUser({userData:value,navigate}))

    }
    const navigate = useNavigate()
    return (
        <div>
            <Typography variant='h5' className='text-center' sx={{ mb: 3 }}>
                Register
            </Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>
                    <Field
                        as={TextField}
                        name="fullName"
                        label="Full Name"
                        fullWidth
                        variant="outlined"
                    />
                    <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <FormControl fullWidth margin='normal'>
                        <InputLabel id="role-simple-select-label">Role</InputLabel>
                        <Field
                        as={Select}
                            labelId="role-simple-select-label"
                            id="role-simple-select"
                            // value={age}
                            label="Role"
                            name="role"
                            // onChange={handleChange}
                        >
                            <MenuItem value={"CUSTOMER"}>Customer</MenuItem>
                            <MenuItem value={"OWNER"}>Owner</MenuItem>
                            
                        </Field>
                    </FormControl>
                    <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type='submit' variant='contained'>
                        Register
                    </Button>
                </Form>
            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                Already have an account ?
                <Button size='small' onClick={() => navigate('/account/login')} className=''>
                    Login
                </Button>
            </Typography>
        </div>
    )
}