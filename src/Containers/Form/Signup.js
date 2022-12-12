import * as React from 'react';
import './Form.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import { Link } from "react-router-dom"

import img from '../../assets/imgs/Main.png';
import logo from '../../assets/imgs/AWC.png'



export default function Signup() {
  return (
    <Box className='kitchen-main'>
      <Grid container rowSpacing={1}>
        <Grid item lg={6} md={6} sm={12} xs={6}>
          <img className='kitchen-image' src={img} alt="signup" />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={6}>
          <Box className='wood-container'>
            <img src={logo} alt="logo" />
            <h2 className='wood-heading' style={{ color: '#28528C' }}>American Wood Cabinets</h2>
            <Input
              label="e-mail"
            />
            <Input
              label="Username"
            />
            <Input
              label="Password"
            />
            <Input
              label="Confirm Password"
            />

            <Link to="/dashborad">
              <Button
                btn="Sign up"
                class="button"
              /></Link>
            <Link to="/Signup">
              <Button
                btn="Create New Account"
                class="button button-outline"
              /></Link>
            <p className='already-account'>Already have an Account? <Link to="/Login" href="#">Login</Link></p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}