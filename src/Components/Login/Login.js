import React from 'react'
import BasicLoginCard from './Card/BasicLoginCard'
import { Grid,Typography } from '@mui/material'

import './Login.css'

const Login = () => {
  return (
    <div className='login-bg-container'>
            <Grid>
                <Typography variant='h4' component='h1' sx={{color:'darkgreen'}}>Login</Typography>
                <BasicLoginCard />
            </Grid>
        </div>
  )
}

export default Login
