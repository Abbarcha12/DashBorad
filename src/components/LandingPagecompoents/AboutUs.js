import React from 'react'
import "./AboutUs.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


// import images
import aboutImg from "../../assets/landingpageassest/Rectangle 1113.png"

function AboutUs() {
  return (
    <>
        <Box mt={5} className='aboutUs'>
        <Grid container spacing={1} mt={1}>
        <Grid item xs={2} lg={1} md={1}></Grid>
            <Grid item xs={12} lg={5} md={5}>
            <img src={aboutImg} alt="" m={0} />
            </Grid>
            <Grid item xs={12} lg={5} md={5}>
                <Typography variant="h3" className='aboutUS_title'>
                    About Us
                </Typography>
                <Typography variant="subtitle" className='aboutUS_desc'>
                Lorem ipsum dolor sit amet consectetur. Odio adipiscing cursus arcu aliquet tincidunt aliquet. Senectus ac augue justo dolor feugiat ut aliquet congue. Massa quis non pellentesque molestie lectus eu diam faucibus aliquam. Consectetur nisi. <br/> <br/>

                Lorem ipsum dolor sit amet consectetur. Odio adipiscing cursus arcu aliquet tincidunt aliquet. Senectus ac augue justo <br/> <br/>

                Lorem ipsum dolor sit amet consectetur. Odio adipiscing cursus arcu aliquet tincidunt aliquet. Senectus ac augue justo dolor feugiat ut aliquet congue. Massa quis non pellentesque molestie lectus eu diam faucibus aliquam. Consectetur nisi Senectus ac augue justo dolor feugiat ut aliquet congue. Massa quis non pellentesque 
                </Typography>
            </Grid>
          </Grid>
        <Grid item xs={2} lg={1} md={1}></Grid>
        </Box>
    </>
  )
}

export default AboutUs