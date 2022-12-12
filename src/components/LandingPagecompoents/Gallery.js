import React from 'react'
import "./Gallery.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// import { CCarouselCaption } from '@coreui/react'
// import { CCarouselItem } from '@coreui/react'
// import { CImage } from '@coreui/react'
// import { CCarousel } from '@coreui/react'

// images import
// import bed1 from "../assets/Rectangle 63.png"
// import bed2 from "../assets/Rectangle 64.png"
// import bed3 from "../assets/Rectangle 66.png"

import bed1 from "../../assets/landingpageassest/Rectangle 63.png"
import bed2 from "../../assets/landingpageassest/Rectangle 64.png"
import bed3 from "../../assets/landingpageassest/Rectangle 66.png"

import kitchen1 from "../../assets/landingpageassest/Rectangle 70.png"
import kitchen2 from "../../assets/landingpageassest/Rectangle 71.png"
import kitchen3 from "../../assets/landingpageassest/Rectangle 72.png"

import bathroom1 from "../../assets/landingpageassest/Rectangle 67.png"
import bathroom2 from "../../assets/landingpageassest/Rectangle 68.png"
import bathroom3 from "../../assets/landingpageassest/Rectangle 69.png"
import SimpleSlider from '../../components/LandingPagecompoents/SimpleSlider';


function Gallery() {
  return (
    <>
      <Box className='galley_section'>
        <Box className='gallery'>
            <Typography variant="h4" className='gallery_title'>
                Gallery
            </Typography>
            <Typography variant="subtitle" className='title_desc'>
                Lorem ipsum dolor sit amet consectetur. Odio adipiscing cursus arcu aliquet tincidunt aliquet. <br /> Senectus ac augue justo dolor feugiat ut aliquet congue. 
            </Typography>
        </Box>

        <Box className='bedroom-section'>
            <Typography variant="h5" className='bedroom_title'>
                Bedroom
            </Typography>
          <Grid container spacing={2} mt={1} className="bedroom_carusel">
            <SimpleSlider 
              img1={bed1}
              img2={bed2}
              img3={bed3}
              img4={bed1}
              img5={bed2}
              img6={bed3}
              img7={bed1}
              img8={bed2}
              img9={bed3}
              img10={bed1}
            />
          </Grid>
        </Box>

        <Box className='kitchen-section'>
            <Typography variant="h5" className='kitchen_title'>
                Kitchens
            </Typography>
          <Grid container spacing={2} mt={1}>
            <SimpleSlider 
              img1={kitchen1}
              img2={kitchen2}
              img3={kitchen3}
              img4={kitchen1}
              img5={kitchen2}
              img6={kitchen3}
              img7={kitchen1}
              img8={kitchen2}
              img9={kitchen3}
              img10={kitchen1}
            />
          </Grid>
        </Box>

        <Box className='bathroom-section'>
            <Typography variant="h5" className='bathroom_title'>
                Bathrooms
            </Typography>
          <Grid container spacing={2} mt={1}>
            <SimpleSlider 
              img1={bathroom1}
              img2={bathroom2}
              img3={bathroom3}
              img4={bathroom1}
              img5={bathroom2}
              img6={bathroom3}
              img7={bathroom1}
              img8={bathroom2}
              img9={bathroom3}
              img10={bathroom1}
            />
          </Grid>
        </Box>
      </Box>
    </>
    
  )
}

export default Gallery