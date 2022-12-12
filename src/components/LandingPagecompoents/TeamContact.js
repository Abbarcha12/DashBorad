import React from 'react'
import './TeamContact.css'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

// import images
import teamPic1 from "../../assets/landingpageassest/Rectangle 1116.png"
import teamPic2 from "../../assets/landingpageassest/Rectangle 1115.png"
import teamPic3 from "../../assets/landingpageassest/Rectangle 1114.png"
import Arrow from '../../assets/landingpageassest/arrow.png'



function TeamContact() {
  return (
    <>
        <Box className='teamContact'>
        <Grid container spacing={0}>
        <Grid item xs={2} lg={1} md={1}></Grid>
            <Grid item xs={12} lg={5} md={5}>
              <Typography variant="h3" className='teamContact_title'>
                   Our Team
               </Typography>
                <Box className='team_pic'>
                    <Box>
                        <img src={teamPic1} alt="" />
                        <Typography variant="subtitle" className='teamContact_subtitle'>
                           <span>Member 001</span> <br /> Designation and Post
                        </Typography>
                    </Box>
                    <Box>
                        <img src={teamPic2} alt="" />
                        <Typography variant="subtitle" className='teamContact_subtitle'>
                           <span>Member 001</span> <br /> Designation and Post
                        </Typography>
                    </Box>
                    <Box>
                        <img src={teamPic3} alt="" />
                        <Typography variant="subtitle" className='teamContact_subtitle'>
                           <span>Member 001</span> <br /> Designation and Post
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="subtitle" className='teamContact_desc'>
                 Lorem ipsum dolor sit amet consectetur. Justo nulla mauris amet sit augue vivamus cras. Quis mauris elit mauris id. Ut ipsum felis eget faucibus elit felis in vulputate in. At hendrerit amet egestas tortor penatibus facilisis ultricies. Vestibulum 
               </Typography>
            </Grid>
            <Grid item xs={12} lg={5} md={5}>
               <Box className='contact_form'>
               <Typography variant="h3" className='Contact_title'>
                   Contact Us
               </Typography>
               <TextField id="demo-helper-text-misaligned-no-helper" label="Name" className='input1' /> <br /> <br />
               <TextField id="demo-helper-text-misaligned-no-helper" label="Name" className='input1'/> <br /> <br />
               <TextareaAutosize
                aria-label="minimum height"
                minRows={4}
                className="textfield"
                placeholder="message"
              />
                  <a className='last_arrow'>Send Message <img width={60} src={Arrow} alt='img'/> </a>
               </Box>
            </Grid>
          </Grid>
        <Grid item xs={2} lg={1} md={1}></Grid>
        </Box>
    </>
  )
}

export default TeamContact