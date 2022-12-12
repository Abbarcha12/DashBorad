import React from 'react'
import './Footer.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

//import images
import logoImg from "../../assets/landingpageassest/footerLogo.png"

function Footer() {
  return (
    <>
        <Box className='footer'>
            <Box className='footerLogo'>
                <img src={logoImg} alt="" />
            </Box>

            <Box className='footerLinks'>
                <Box>
                    <a href="/AboutUs">About US</a>
                </Box>
                <Box>
                    <a href="/AboutUs">About US</a>
                </Box>
                <Box>
                    <a href="/AboutUs">About US</a>
                </Box>
            </Box>

            <Box className='footer_details'>
                <Box>
                <Typography variant="subtitle" className='copyright'>
                    © 2020 Landify UI Kit. All rights reserved
                </Typography>
                </Box>
                <Box>
                <Typography variant="subtitle" className='footer_num'>
                   <PhoneIcon /> 03133978868
                </Typography>
                </Box>
                <Box className='footer_icons'>
                    <Box>
                        <FacebookIcon />
                    </Box>
                    <Box className='icons'>
                        <TwitterIcon />
                    </Box>
                    <Box  className='icons'>
                        <InstagramIcon />
                    </Box>
                </Box>
            </Box>
         <Box className='border'></Box>
            <p className='cabinets'>© Amercians Wood Cabinets</p>
        </Box>
    </>
  )
}

export default Footer