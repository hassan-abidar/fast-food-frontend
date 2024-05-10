import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom'
import {loginUser} from '../../state/Authentification/Action'

const initialValues= {
    email:"",
    password:""
}

export const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit=(values)=>{
        dispatch(loginUser({userData:values,navigate}))

    }
    
  return (
    <div>
        <Typography variant='h5' className='text-center' sx={{mb:3}}>
            Login
        </Typography>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form>
            <Field 
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              />
               <Field 
              as={TextField}
              name="password"
              label="Password"
              fullWidth
              variant="outlined"
              margin="normal"
              type="password"
              />
              <Button sx={{mt:2,padding:"1rem"}} fullWidth type='submit' variant='contained'>
                    Login
              </Button>
            </Form>
        </Formik>
        <Typography variant='body2' align='center' sx={{mt:3}}>
            Don't have an account ?
            <Button size='small' onClick={()=>navigate('/account/register')} className=''>
                Register
            </Button>
        </Typography>
    </div>
  )
}
