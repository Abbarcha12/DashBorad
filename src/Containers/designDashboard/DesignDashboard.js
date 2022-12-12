import * as React from 'react';
import "./DesignDashboard.css"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';

import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';


import SidebarAssets from '../../components/Sidebar/SidebarAssets';
import Navbar from '../../components/Appbar';
import Rightbar from '../../components/Rightbar/Rightbar';

import img10 from '../../assets/imgs/1.png'
import img11 from '../../assets/imgs/2.png'
import img12 from '../../assets/imgs/3.png'
import img13 from '../../assets/imgs/4.png'
import img14 from '../../assets/imgs/5.png'
import img15 from '../../assets/imgs//6.png'
import img16 from '../../assets/imgs//7.png'
import img17 from '../../assets/imgs/8.png'
import img18 from '../../assets/imgs/9.png'
import img19 from '../../assets/imgs/10.png'
import img20 from '../../assets/imgs/11.png'
import img21 from '../../assets/imgs/12.png'


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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <Drawer
          className='tools'
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
              <Tabs
                style={{ backgroundColor: '#ACACAC', padding: "2rem 1rem", margin: "0px", height: "100%" }}
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
              >
                <Tab className="tab" label={<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H1M1 7H19M9 16H11M9 10H11M9 4H11M15.5 19V21M4.5 19V21M19 1.6V18.4C19 18.4788 18.9845 18.5568 18.9543 18.6296C18.9242 18.7024 18.88 18.7685 18.8243 18.8243C18.7685 18.88 18.7024 18.9242 18.6296 18.9543C18.5568 18.9845 18.4788 19 18.4 19H1.6C1.52121 19 1.44319 18.9845 1.37039 18.9543C1.29759 18.9242 1.23145 18.88 1.17574 18.8243C1.12002 18.7685 1.07583 18.7024 1.04567 18.6296C1.01552 18.5568 1 18.4788 1 18.4V1.6C1 1.44087 1.06321 1.28826 1.17574 1.17574C1.28826 1.06321 1.44087 1 1.6 1H18.4C18.5591 1 18.7117 1.06321 18.8243 1.17574C18.9368 1.28826 19 1.44087 19 1.6Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>} {...a11yProps(0)} />

                <Tab className="tab" label={<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6H16V3C16 1.34 14.66 0 13 0C11.34 0 10 1.34 10 3H12C12 2.45 12.45 2 13 2C13.55 2 14 2.45 14 3V6H6C7.1 6 8 5.1 8 4V0H2V4C2 5.1 2.9 6 4 6H0V8H2V16H18V8H20V6ZM4 2H6V4H4V2ZM4 14V8H9V14H4ZM16 14H11V8H16V14Z" fill="white" /></svg>} {...a11yProps(1)} />

                <Tab className="tab" label={<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.6 15L4.95 11.4844C5.085 11.125 5.3025 10.8397 5.6025 10.6284C5.9025 10.4178 6.24 10.3125 6.615 10.3125H8.1V6.53906C5.805 6.46094 3.8814 6.10938 2.3292 5.48438C0.7764 4.85938 0 4.125 0 3.28125C0 2.375 0.8775 1.60156 2.6325 0.960938C4.3875 0.320313 6.51 0 9 0C11.505 0 13.6311 0.320313 15.3783 0.960938C17.1261 1.60156 18 2.375 18 3.28125C18 4.125 17.2239 4.85938 15.6717 5.48438C14.1189 6.10938 12.195 6.46094 9.9 6.53906V10.3125H11.385C11.745 10.3125 12.0789 10.4178 12.3867 10.6284C12.6939 10.8397 12.915 11.125 13.05 11.4844L14.4 15H12.6L11.52 12.1875H6.48L5.4 15H3.6ZM9 4.6875C10.455 4.6875 11.8275 4.55469 13.1175 4.28906C14.4075 4.02344 15.3525 3.6875 15.9525 3.28125C15.3525 2.875 14.4075 2.53906 13.1175 2.27344C11.8275 2.00781 10.455 1.875 9 1.875C7.545 1.875 6.1725 2.00781 4.8825 2.27344C3.5925 2.53906 2.6475 2.875 2.0475 3.28125C2.6475 3.6875 3.5925 4.02344 4.8825 4.28906C6.1725 4.55469 7.545 4.6875 9 4.6875Z" fill="white" /></svg>} {...a11yProps(2)} />

                <Tab className="tab" label={<svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59091 15V13.3333H0V4.16667H2.59091V0H16.4091V4.16667H19V13.3333H16.4091V15H14.6818V13.3333H4.31818V15H2.59091ZM1.72727 11.6667H17.2727V5.83333H15.5455V10H3.45455V5.83333H1.72727V11.6667ZM5.18182 8.33333H13.8182V4.16667H14.6818V1.66667H4.31818V4.16667H5.18182V8.33333Z" fill="white" /></svg>} {...a11yProps(3)} />

                <Tab className="tab" label={<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7333 10.4712H2.53333V3.36385C2.5326 3.0962 2.58509 2.83105 2.68778 2.58377C2.79046 2.33648 2.9413 2.11197 3.13156 1.92323L3.14739 1.90744C3.44556 1.61045 3.82837 1.41253 4.24354 1.34071C4.6587 1.26889 5.08597 1.32669 5.46697 1.50619C5.10715 2.10297 4.95759 2.80258 5.04206 3.49387C5.12653 4.18515 5.44019 4.82845 5.93319 5.32153L6.36666 5.75393L5.56878 6.54988L6.46439 7.44327L7.26228 6.64737L11.6833 2.23738L12.4812 1.44148L11.5855 0.548043L10.7876 1.34395L10.3541 0.911544C9.83514 0.395287 9.15101 0.0770469 8.42095 0.0122811C7.69089 -0.0524847 6.9612 0.14033 6.35902 0.557125C5.72403 0.157105 4.97154 -0.0155861 4.22514 0.0674197C3.47875 0.150426 2.78286 0.484192 2.25178 1.01389L2.23594 1.02968C1.92769 1.3355 1.6833 1.69926 1.51692 2.09992C1.35054 2.50058 1.26548 2.93018 1.26667 3.36385V10.4712H0V11.7347H1.26667V12.9469C1.26664 13.0488 1.28311 13.15 1.31543 13.2466L2.49375 16.7726C2.55663 16.9614 2.67754 17.1256 2.83931 17.2419C3.00108 17.3582 3.19549 17.4208 3.3949 17.4206H3.90553L3.44375 19H4.76318L5.225 17.4206H13.4623L13.9373 19H15.2594L14.7844 17.4206H15.6049C15.8044 17.4208 15.9988 17.3583 16.1606 17.242C16.3224 17.1256 16.4434 16.9614 16.5063 16.7726L17.6845 13.2466C17.7168 13.15 17.7333 13.0488 17.7333 12.9469V11.7347H19V10.4712H17.7333ZM6.82892 1.80498C7.17788 1.45763 7.65072 1.26256 8.1437 1.26256C8.63667 1.26256 9.10951 1.45763 9.45848 1.80498L9.89187 2.23738L7.26239 4.86034L6.82892 4.42802C6.48073 4.07991 6.28519 3.60824 6.28519 3.1165C6.28519 2.62475 6.48073 2.15309 6.82892 1.80498ZM16.4667 12.8956L15.3769 16.1571H3.62314L2.53333 12.8956V11.7347H16.4667V12.8956Z" fill="white" /></svg>} {...a11yProps(4)} />

                <Tab className="tab" label={<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.05556 19C0.756482 19 0.505963 18.8987 0.304 18.696C0.101333 18.494 0 18.2435 0 17.9444C0 17.6454 0.101333 17.3949 0.304 17.1929C0.505963 16.9902 0.756482 16.8889 1.05556 16.8889H2.11111V1.05556C2.11111 0.756482 2.21209 0.505611 2.41406 0.302944C2.61672 0.100981 2.86759 0 3.16667 0H11.6111C11.9102 0 12.1611 0.100981 12.3637 0.302944C12.5657 0.505611 12.6667 0.756482 12.6667 1.05556H15.8333C16.1324 1.05556 16.3829 1.15654 16.5849 1.3585C16.7876 1.56117 16.8889 1.81204 16.8889 2.11111V16.8889H17.9444C18.2435 16.8889 18.494 16.9902 18.696 17.1929C18.8987 17.3949 19 17.6454 19 17.9444C19 18.2435 18.8987 18.494 18.696 18.696C18.494 18.8987 18.2435 19 17.9444 19H15.8333C15.5343 19 15.2837 18.8987 15.0818 18.696C14.8791 18.494 14.7778 18.2435 14.7778 17.9444V3.16667H12.6667V17.9444C12.6667 18.2435 12.5657 18.494 12.3637 18.696C12.1611 18.8987 11.9102 19 11.6111 19H1.05556ZM4.22222 2.11111V16.8889V2.11111ZM9.5 9.5C9.5 9.20093 9.39902 8.95006 9.19706 8.74739C8.99439 8.54543 8.74352 8.44444 8.44444 8.44444C8.14537 8.44444 7.89485 8.54543 7.69289 8.74739C7.49022 8.95006 7.38889 9.20093 7.38889 9.5C7.38889 9.79907 7.49022 10.0496 7.69289 10.2516C7.89485 10.4542 8.14537 10.5556 8.44444 10.5556C8.74352 10.5556 8.99439 10.4542 9.19706 10.2516C9.39902 10.0496 9.5 9.79907 9.5 9.5ZM4.22222 16.8889H10.5556V2.11111H4.22222V16.8889Z" fill="white" /></svg>} {...a11yProps(5)} />

                <Tab className="tab" label={<svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.90909 7.8C6.26727 7.8 7.36364 6.63867 7.36364 5.2C7.36364 3.76133 6.26727 2.6 4.90909 2.6C3.55091 2.6 2.45455 3.76133 2.45455 5.2C2.45455 6.63867 3.55091 7.8 4.90909 7.8ZM4.90909 4.33333C5.35909 4.33333 5.72727 4.72333 5.72727 5.2C5.72727 5.67667 5.35909 6.06667 4.90909 6.06667C4.45909 6.06667 4.09091 5.67667 4.09091 5.2C4.09091 4.72333 4.45909 4.33333 4.90909 4.33333ZM14.7273 1.73333H8.18182V8.66667H1.63636V0H0V13H1.63636V10.4H16.3636V13H18V5.2C18 3.28467 16.5355 1.73333 14.7273 1.73333ZM16.3636 8.66667H9.81818V3.46667H14.7273C15.6273 3.46667 16.3636 4.24667 16.3636 5.2V8.66667Z" fill="white" /></svg>} {...a11yProps(6)} />

                <Tab className="tab" label={<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 14C9.28333 14 9.521 13.904 9.713 13.712C9.90433 13.5207 10 13.2833 10 13V10H13C13.2833 10 13.5207 9.904 13.712 9.712C13.904 9.52067 14 9.28333 14 9C14 8.71667 13.904 8.479 13.712 8.287C13.5207 8.09567 13.2833 8 13 8H10V5C10 4.71667 9.90433 4.479 9.713 4.287C9.521 4.09567 9.28333 4 9 4C8.71667 4 8.47933 4.09567 8.288 4.287C8.096 4.479 8 4.71667 8 5V8H5C4.71667 8 4.479 8.09567 4.287 8.287C4.09567 8.479 4 8.71667 4 9C4 9.28333 4.09567 9.52067 4.287 9.712C4.479 9.904 4.71667 10 5 10H8V13C8 13.2833 8.096 13.5207 8.288 13.712C8.47933 13.904 8.71667 14 9 14ZM2 18C1.45 18 0.979 17.8043 0.587 17.413C0.195667 17.021 0 16.55 0 16V2C0 1.45 0.195667 0.979 0.587 0.587C0.979 0.195667 1.45 0 2 0H16C16.55 0 17.021 0.195667 17.413 0.587C17.8043 0.979 18 1.45 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.021 17.8043 16.55 18 16 18H2ZM2 16H16V2H2V16ZM2 16V2V16Z" fill="white" /></svg>} {...a11yProps(7)} />

              </Tabs>
              <TabPanel value={value} index={0}>
                <SidebarAssets
                  title="Drawers"
                  img1={img10}
                  img2={img11}
                  img3={img12}
                  img4={img13}
                  img5={img14}
                  img6={img15}
                  img7={img16}
                  img8={img17}
                  img9={img18}
                  img10={img19}
                  img11={img20}
                  img12={img21}
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <SidebarAssets
                  title="Kitchen Assets"
                  img1={img21}
                  img2={img20}
                  img3={img19}
                  img4={img18}
                  img5={img17}
                  img6={img16}
                  img7={img15}
                  img8={img14}
                  img9={img13}
                  img10={img12}
                  img11={img11}
                  img12={img10}
                />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <SidebarAssets
                  title="Tables"
                  img1={img20}
                  img2={img21}
                  img3={img18}
                  img4={img19}
                  img5={img16}
                  img6={img17}
                  img7={img14}
                  img8={img15}
                  img9={img12}
                  img10={img13}
                  img11={img10}
                  img12={img11}
                />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <SidebarAssets
                  title="Chairs"
                  img1={img19}
                  img2={img18}
                  img3={img17}
                  img4={img16}
                  img5={img15}
                  img6={img14}
                  img7={img13}
                  img8={img12}
                  img9={img11}
                  img10={img10}
                  img11={img20}
                  img12={img21}
                />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <SidebarAssets
                  title="Bathroom Assets"
                  img1={img21}
                  img2={img18}
                  img3={img19}
                  img4={img18}
                  img5={img21}
                  img6={img16}
                  img7={img19}
                  img8={img20}
                  img9={img14}
                  img10={img17}
                  img11={img16}
                  img12={img15}
                />
              </TabPanel>
              <TabPanel value={value} index={5}>
                <SidebarAssets
                  title="Devices and Electronics"
                  img1={img20}
                  img2={img18}
                  img3={img16}
                  img4={img14}
                  img5={img12}
                  img6={img10}
                  img7={img19}
                  img8={img21}
                  img9={img17}
                  img10={img15}
                  img11={img13}
                  img12={img11}
                />
              </TabPanel>
              <TabPanel value={value} index={6}>
                <SidebarAssets
                  title="Bedroom Assets"
                  img1={img10}
                  img2={img20}
                  img3={img19}
                  img4={img18}
                  img5={img17}
                  img6={img16}
                  img7={img15}
                  img8={img14}
                  img9={img13}
                  img10={img12}
                  img11={img11}
                  img12={img21}
                />
              </TabPanel>
              <TabPanel value={value} index={7}>
                <SidebarAssets
                  title="Devices"
                  img1={img20}
                  img2={img18}
                  img3={img16}
                  img4={img14}
                  img5={img12}
                  img6={img10}
                  img7={img19}
                  img8={img21}
                  img9={img17}
                  img10={img15}
                  img11={img13}
                  img12={img11}
                />
              </TabPanel>
            </Box>
          </List>

        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          {/* center content */}
        </Box>
        <List className='iconstyle2'>
          <Box className="rightbar">
            <Rightbar />
          </Box>
        </List>
      </Box>
    </>
  );
}