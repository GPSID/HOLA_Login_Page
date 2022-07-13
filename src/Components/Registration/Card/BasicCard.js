import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function BasicCard(props) {
  const [userName, setUserName] = useState('');
  return (
    <Box sx={{ maxWidth:"500px",  textAlign:'center', }}>
        <Grid >
          <Card sx={{ textAlign: 'center',}}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', m: 2 }}>
              <TextField onChange={(e) => setUserName(e.target.value)} sx={{ m: 2 }} value ={userName} required id="outlined-basic" label="User Name" variant="outlined" />
              <TextField sx={{ m: 2 }} required id="outlined-basic" label="Password" variant="outlined" />
              <TextField sx={{ m: 2 }} required id="outlined-basic" label="Email" variant="outlined" />
              <TextField sx={{ m: 2 }} required id="outlined-basic" label="Mobile No." variant="outlined" />

              <CardActions sx={{ display: 'flex', justifyContent: 'space-between', m: 2 }}>
                <Link to='/login'>
                  <Button variant="contained"> Login </Button>
                </Link>
                <Button variant="contained" onClick={() => props.tokenFunction()}>Sign Up</Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
    </Box>
  );
}
