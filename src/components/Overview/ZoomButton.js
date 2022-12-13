import * as React from 'react';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ControlPointIcon from '@material-ui/icons/ControlPoint';


const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#000',
  height: 1,
  '& .MuiSlider-thumb': {
    height: 17,
    width: 17,
    backgroundColor: '#F2F2F2',
    
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
  
    },
  },
  '& .MuiSlider-track': {
    height: 0,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === '#000' ? '#000' : '#000',
    opacity: theme.palette.mode === '#000' ? undefined : 1,
    height: 2,
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" /> <ControlPointIcon fontSize='small' /> 
    
    </SliderThumb>
  );
}



export default function CustomizedSlider() {
  return (
    <Box sx={{ width: 65 }}>
      <Typography gutterBottom style={{ fontSize: "14px", marginTop: "10px", textAlign: "center" }}><b>Zoom</b></Typography>
      <AirbnbSlider
        slots={{ thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
      />
    </Box>
  );
}