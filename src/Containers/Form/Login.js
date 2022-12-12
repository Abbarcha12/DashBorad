import * as React from 'react';
import './Form.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';



import img from '../../assets/imgs/Red.png';
import logo from '../../assets/imgs/AWC.png'
import { Link } from "react-router-dom"



export default function Login() {
  return (
    <Box className='kitchen-main'>
      <Grid container rowSpacing={1}>
        <Grid item lg={6} md={6} sm={12} xs={6}>
          <img className='kitchen-image' src={img} alt="login" />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={6}>
          <Box className='wood-container'>
            <img src={logo} alt="logo" />
            <h2 className='wood-heading' style={{ color: '#28528C' }}>American Wood Cabinets</h2>
            <Input
              label="e-mail / username"
            />
            <Input
              label="Password"
            />
          <Link to="/tool">
              <Button
                btn="Login"
                class="button"
              />
          </Link>
            <Link to="/Signup">
              <Button
                btn="Create New Account"
                class="button button-outline"
              />
            </Link>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}