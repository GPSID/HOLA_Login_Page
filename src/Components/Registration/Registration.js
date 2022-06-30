import { Grid, TextField } from '@mui/material'
import './Registration.css'
import React from 'react'
import BasicCard from './Card/BasicCard'
import { Typography } from '@mui/material'

const Registration = () => {
    return (
        <div className='Reg-bg-container'>
            <Grid>
                <Typography variant='h4' component='h1' sx={{color:'darkgreen'}}>Registration Form</Typography>
                <BasicCard />
            </Grid>
        </div>
    )
}

export default Registration
