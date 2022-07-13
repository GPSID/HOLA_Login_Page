import React from 'react'
import BasicLoginCard from './Card/BasicLoginCard'
import { Grid, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

import './Login.css'
import { Box } from '@mui/material'
import { loginFunction } from '../Store/Actions'

const Login = () => {

  const state = useSelector((state) => state)
  console.log(state)
  const dispatch = useDispatch()

  const tokenFunction = () => {
    dispatch(loginFunction('Value'))
  }


  return (
    <div className='Reg-bg-container'>
      <Box
        sx={{
          margin: 3,
          padding: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

        }}
      >
        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='h4' component='h1' sx={{ color: 'darkgreen' }}>Login Form</Typography>

          <Grid item>
            <BasicLoginCard tokenFunction={tokenFunction} />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Login
