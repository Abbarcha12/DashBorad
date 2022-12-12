import React, { Fragment } from 'react';
import './overview.css';

// import logo
import Img from './../../assets/imgs/22.png';

// material ui components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

const IconSlider = styled(Slider)(({ theme }) => ({
    width:'70%',
    height: "1px",
    color: '#000',
    padding: '15px 0',
    '& .MuiSlider-thumb': {
      height: 5,
      width: 20,
      backgroundColor: '#fff',
    },
    '& .MuiSlider-rail': {
      color: theme.palette.mode === 'dark' ? '#000' : '#000',
      opacity: theme.palette.mode === 'dark' ? undefined : 1,
      height: 2,
    },
  }));
  
  function SliderComponent(props) {
    const { children, ...other } = props;
    return (
      <Fragment>
        <SliderThumb {...other}>
            {children}
          <span><ControlPointIcon /></span>
        </SliderThumb>
      </Fragment>
    );
  }

  function SliderComponent1(props) {
    const { children1, ...other } = props;
    return (
      <Fragment>
        <SliderThumb {...other}>
            {children1}
            <span><ThreeDRotationIcon/></span>
        </SliderThumb>
      </Fragment>
    );
  }

  SliderComponent.propTypes = {
    children: PropTypes.node,
  };
  SliderComponent1.propTypes = {
    children1: PropTypes.node,
  };

export default function Overview() {
        return (
            <React.Fragment>
                <Box>
                    <Grid container>
                        <Grid item lg={3} md={3} sm={3} className='overview-container'>
                            <div className='overview-head'>
                                <h3>Overview</h3>
                                <img style={{width:'70%'}} src={Img} alt='img'/>
                            </div>
                            <Grid className='overview-text'>
                                <Box lg={{width: 200}} md={{width: 200}} sx={{ width: 250 }}>
                                    <Box>
                                        <Typography gutterBottom><span className="side-text">Zoom</span></Typography>
                                         <IconSlider
                                            slots={{ thumb: SliderComponent }}
                                            defaultValue={[30]}
                                        />
                                    </Box>
                                </Box>
                                <Box lg={{width: 200}} md={{width: 200}} sx={{ width: 250 }}>
                                    <Box >
                                        <Typography gutterBottom><span className="side-text">Rotate</span></Typography>
                                          <IconSlider
                                            slots={{ thumb: SliderComponent1 }}
                                            defaultValue={[30]}
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </React.Fragment>
        );
    }
