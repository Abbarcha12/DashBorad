import React from 'react'
import "./Loading.css"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Link } from "react-router-dom"
import Progress from 'react-progressbar';

// images
import Logo from "./../../assets/imgs/AWC.png"


function Loading() {
  return (
    <div className="logoContainer" >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="center" alignItems="center" height="100vh">
          <Link to="/dark" >
            <Grid item display="flex" flexDirection="column" justifyContent="center">
              <img src={Logo} alt="logo" className='logo' />
              <h2 className='logo-text'>American Wood Cabinets</h2>
              <Progress completed={50} />
            </Grid>
          </Link>
        </Grid>
      </Box>
    </div>
  )
}

export default Loading