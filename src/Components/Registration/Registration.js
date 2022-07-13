import { Grid, TextField } from '@mui/material'
import './Registration.css'
import React from 'react'
import { Typography, Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { loginFunction, signupFunction } from '../Store/Actions'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

const Registration = () => {
    const [userName, setUserName] = useState('');


    const state = useSelector((state) => state)
    console.log(state)
    const dispatch = useDispatch()

    const tokenFunction = () => {
        axios.post('http://localhost:8080/api/users/addUser', {username:userName})
        .then((response) => {
            dispatch(signupFunction(response.data.token))
        })
        .catch((e) => {
            console.log(e)
        })
        
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
                    <Typography variant='h4' component='h1' sx={{ color: 'darkgreen' }}>Registration Form</Typography>

                    <Grid item sx={{ minWidth: '300px', maxWidth: '1600px', }}>
                        <Box sx={{ maxWidth: "500px", textAlign: 'center', }}>
                            <Grid >
                                <Card sx={{ textAlign: 'center', }}>
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', m: 2 }}>
                                        <TextField onChange={(e) => setUserName(e.target.value)} sx={{ m: 2 }} value={userName} required id="outlined-basic" label="User Name" variant="outlined" />
                                        <TextField sx={{ m: 2 }} required id="outlined-basic" label="Password" variant="outlined" />
                                        <TextField sx={{ m: 2 }} required id="outlined-basic" label="Email" variant="outlined" />
                                        <TextField sx={{ m: 2 }} required id="outlined-basic" label="Mobile No." variant="outlined" />

                                        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', m: 2 }}>
                                            <Link to='/login'>
                                                <Button variant="contained"> Login </Button>
                                            </Link>
                                            <Button variant="contained" onClick={() => tokenFunction()}>Sign Up</Button>
                                        </CardActions>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Registration
