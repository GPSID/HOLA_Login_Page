import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Grid, Box } from '@mui/material';


export default function BasicLoginCard(props) {
  const navigate = useNavigate()

  const [loginDetails, setLoginDetails] = useState({
    username: '', password: ''
  });
  const handleChange = (e) => {
    setLoginDetails(prevState => ({
      ...prevState, [e.target.name]: e.target.value
    }))
  }




  // const loginFunc = () => {
  // console.log(loginDetails)
  // if (loginDetails.username === '') {
  //   alert("please enter username")
  //   return false;
  // }
  // axios.get('http://172.18.2.8:3000/app/allUsers').then(
  //   response => {
  //     if (response.ok === true) {

  //     }
  //     console.log("response:",response)}
  // ).catch(e => console.log(e))
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(data => console.log(data.data))
  //     .catch(error => console.log(error));
  // };


  return (

    <Box sx={{ maxWidth: "500px", textAlign: 'center' }}>
      <Grid >
        <Card sx={{ textAlign: 'center', }}>

          <CardContent sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
            <TextField sx={{ m: 2 }} name='username' value={loginDetails.username} onChange={handleChange} required id="outlined-basic" label="User Name" variant="outlined" />
            <TextField sx={{ m: 2 }} name='password' value={loginDetails.password} onChange={handleChange} required id="outlined-basic" label="Password" variant="outlined" />

            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Button variant="outlined" color='error'>Forgot Password</Button>
              <Button variant="contained" onClick={() => props.tokenFunction()} >Login</Button>
            </CardActions>

          </CardContent>



        </Card>
      </Grid>
    </Box>
  );
}

