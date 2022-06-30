import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function BasicLoginCard() {
  const [loginDetails, setLoginDetails] = useState({
    username: '', password: ''
  });
  const handleChange = (e) => {
    setLoginDetails(prevState => ({
      ...prevState, [e.target.name]: e.target.value
    }))
  }
  const loginFunc = () => {
    console.log(loginDetails)
    axios.get('http://172.18.2.16:8080/users/allUsers').then(
      response => console.log(response)
    ).catch(e => console.log(e))
    
  }
  return (
    <Card sx={{ minWidth: 500 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', m: 2 }}>
        <TextField sx={{ m: 2 }} name='username' value={loginDetails.username} onChange={handleChange} required id="outlined-basic" label="User Name" variant="outlined" />
        <TextField sx={{ m: 2 }} name='password' value={loginDetails.password} onChange={handleChange} required id="outlined-basic" label="Password" variant="outlined" />

        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', m: 2 }}>
          <Button variant="outlined" color='error'>Forgot Password</Button>
          <Link to='/users/allUsers' >
            <Button variant="contained" onClick={loginFunc}>Login</Button>
          </Link>
        </CardActions>

      </CardContent>

    </Card>
  );
}
