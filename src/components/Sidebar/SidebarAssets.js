import React from 'react'

import "./Sidebar.css"

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import SearchIcon from '@material-ui/icons/Search';





const SidebarAssets = (props) => {
  return (
    <Grid container className="background-grey">
        <Box className='search-bar' >
        <SearchIcon className='search-icon' />
            <input type="text"  placeholder={props.placeholder} />
        
        </Box>
        <div className='Sidebar-card-container'>
            <h3 className='gallery'>{props.title}</h3>
            <Box className='gallery-img'>
              <div className='img-gallery'>
                  <img src={props.img1} alt="" className='gallery-card-img' />
                  <img src={props.img2} alt="" className='gallery-card-img' />
                  <img src={props.img3} alt="" className='gallery-card-img' />
                  <img src={props.img4} alt="" className='gallery-card-img' />
                  <img src={props.img5} alt="" className='gallery-card-img' />
                  <img src={props.img6} alt="" className='gallery-card-img' />
                  <img src={props.img7} alt="" className='gallery-card-img' />
                  <img src={props.img8} alt="" className='gallery-card-img' />
                  <img src={props.img9} alt="" className='gallery-card-img' />
                  <img src={props.img10} alt="" className='gallery-card-img' />
                  <img src={props.img11} alt="" className='gallery-card-img' />
                  <img src={props.img12} alt="" className='gallery-card-img' />
              </div>
            </Box>
        </div>
       
        
    </Grid>
  )
}

export default SidebarAssets