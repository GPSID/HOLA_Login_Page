import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 500 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', m: 2 }}>
        <TextField sx={{ m: 2 }} required id="outlined-basic" label="User Name" variant="outlined" />
        <TextField sx={{ m: 2 }} required id="outlined-basic" label="Password" variant="outlined" />
        <TextField sx={{ m: 2 }} required id="outlined-basic" label="Email" variant="outlined" />
        <TextField sx={{ m: 2 }} required id="outlined-basic" label="Mobile No." variant="outlined" />

        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', m: 2 }}>
          <Link to='/login'>
            <Button variant="contained"> Login </Button>
          </Link>
          <Button variant="contained">Sign Up</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
