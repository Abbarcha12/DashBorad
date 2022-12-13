import * as React from 'react';
import "./DesignDashboard.css"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';


import BathtubIcon from '@material-ui/icons/Bathtub';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import WeekendIcon from '@material-ui/icons/Weekend';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import NatureIcon from '@material-ui/icons/Nature';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import TableChartIcon from '@material-ui/icons/TableChart';


import Tables from '../../components/Sidebar/Tables';
import Rightbar from "../../components/Rightbar/Rightbar"
import { Route, Link, Routes } from "react-router-dom"

import Navs from '../../components/navbar/Nav';




const drawerWidth = 235;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}




export default function DesignDashborad() {
  const [value, setValue] = React.useState(0);
  const [Elemt, setElemt] = React.useState(false);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='designDashboard'>
      <Navs />
      <Box sx={{ display: 'flex' }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <List>
            <Box
              className="leftSidebar"
              sx={{ flexGrow: 1, display: 'flex' }}
            >
              <div className='sidbarIcons'>
                <Link to="Tabl" onClick={()=>setElemt(true)}>
                  <button>
                    <TableChartIcon />
                  </button>
                </Link>
                <Link to="Tab2">
                  <button>
                    <AccountTreeIcon />
                  </button>
                </Link>
                <Link to="Tab3">
                  <button>
                    <NatureIcon />
                  </button>
                </Link>
                <Link to="Tab4">

                  <button>
                    <WeekendIcon />
                  </button>
                </Link>

                <Link to="Tab5">
                  <button>
                    <BathtubIcon />
                  </button>
                </Link>
                <Link to="Tab6">
                  <button>
                    <MeetingRoomIcon />
                  </button>
                </Link>
                <Link to="Tab7">
                  <button>
                    <LocalHotelIcon />
                  </button>
                </Link>
                <Link to="Tab8">
                  <button>
                    <LocalHospitalIcon />
                  </button>
                </Link>
              </div>
              <div className='Sidebar-data'>
                <Routes>
                  <Route path="/Tabl" element={<Tables title="Drawers" />} />
                  <Route path="/Tab2" element={<Tables title="Kitchen Assets" />} />
                  <Route path="/Tab3" element={<Tables title="Tables" />} />
                  <Route path="/Tab4" element={<Tables title="Chairs" />} />
                  <Route path="/Tab5" element={<Tables title="Bathroom Assets" />} />
                  <Route path="/Tab6" element={<Tables title="Devices and Electronics" />} />
                  <Route path="/Tab7" element={<Tables title="Bedroom Assets" />} />
                  <Route path="/Tab8" element={<Tables title="2" />} />
                </Routes>
              </div>

            </Box>
          </List>

        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, borderTop: "1px solid black" }}
        >
          {/* center content */}
        </Box>
        <List>
          <Box className="rightbar">
            <Rightbar />
          </Box>
        </List>
      </Box>
    </div>
  );
}