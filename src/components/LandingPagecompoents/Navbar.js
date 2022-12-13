import * as React from 'react';

// import css file
import './Navbar.css';


// import images
import Logo from '../../assets/landingpageassest/logo.png';
import Bg from '../../assets/landingpageassest/2.png';
import Arrow from '../../assets/landingpageassest/arrow.png'

// material ui components
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 250;
const navItems = ['About Us', 'Galley', 'Contact',];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography sx={{ my: 2, }}  >
        <div className='navbar-logo'>
          <div>
            <img src={Logo} alt='img' width={50} textAlign={'center'} />
          </div>
          <div>
            <h3 className='heading'>American Wood Cabinets</h3>
          </div>
        </div>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} >
      <AppBar component="nav" className='Navbars'>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{ marginLeft: 8, flexGrow: 1, display: { xs: 'none', sm: 'block' }, }}
          >
            <div className='navbar-logo'>
              <div className='logo-main'>
                <img src={Logo} alt='img' sm={{ width: '20%' }} width={50} textAlign={'center'} />
              </div>
              <div>
                <h3 className='heading'>American Wood Cabinets</h3>
              </div>
            </div>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ fontSize: '15px', margin: '0 12px', textTransform: 'capitalize', color: '#28528C' }}>
                {item}
              </Button>
            ))}
          </Box>
          <Box>
            <Link to='/Signup'>
              <Button className='signup-button'>
                Sign Up
              </Button>
            </Link>
            <Link to='/Login'>
              <Button className='signup-button'>
                Login
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography className='header-text' xs={{ textAlign: 'center' }} sm={{ textAlign: 'center' }}>
              <div className='header-main'>
                <h1>Create <span className='description'>Unique  Designs</span>  According  to your Needs</h1>
                <h2>We help you to create your own style</h2>
                <p className='para-text'>Planning, Renovations and New Creations.</p>
                <Link to="/Login" className='para-text1'><p>Be a part of our Community <img width={60} src={Arrow} alt='img' /> </p> </Link>
              </div>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography className='header-img'>
              <img sm={{ width: 100 }} lg={{ width: 100 }} src={Bg} alt='img' />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {

  window: PropTypes.func,
};

export default DrawerAppBar;
