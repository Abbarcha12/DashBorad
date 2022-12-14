import * as React from 'react';
import "./DesignDashboard.css"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Grid } from "@mui/material"


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






export default function DesignDashborad() {
  const [value, setValue] = React.useState(0);
  const [Elemt, setElemt] = React.useState(false);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='designDashboard'>
      <Navs />
      < Grid container >

        <Grid item lg={2.5} md={3} sm={3}
          className="leftSidebar"
        >
          <Grid container>
            <Grid item lg={1.8} md={2} sm={2} xs={12} className='sidbarIcons'>
              <Link to="Tabl" onClick={() => setElemt(true)}>
                <TableChartIcon />
              </Link>
              <Link to="Tab2">

                <AccountTreeIcon />

              </Link>
              <Link to="Tab3">

                <NatureIcon />

              </Link>
              <Link to="Tab4">


                <WeekendIcon />

              </Link>

              <Link to="Tab5">

                <BathtubIcon />

              </Link>
              <Link to="Tab6">

                <MeetingRoomIcon />

              </Link>
              <Link to="Tab7">

                <LocalHotelIcon />

              </Link>
              <Link to="Tab8">

                <LocalHospitalIcon />

              </Link>
            </Grid>
            <Grid item lg={10} md={10} sm={3} xs={12} className='Sidebar-data'>
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
            </Grid>
          </Grid>

        </Grid>


        <Grid lg={7} md={6} sm={8} xs={12}
          component="main"
          className='middlesection'
        >
          sdcsdfsdfsd
        </Grid>

        <Grid className="rightbar" lg={2.5} md={3} sm={12} xs={12}>
          <Rightbar />
        </Grid>

      </Grid>
    </div>
  );
}