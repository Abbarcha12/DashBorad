import React from 'react';
import './Nav.css'

// Bootstrap Grid
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Box from '@mui/material/Box';

// icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LivingOutlinedIcon from '@mui/icons-material/LivingOutlined';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import FileCopyIcon from '@mui/icons-material/FileCopy';

// import image
import Img from '../../assets/imgs/profile.png'

function Navs() {
  return (
    <Navbar style={{backgroundColor:'#F2F2F2'}} expand="lg" className='NavbarTwo'>
      <Container fluid>
        <Navbar.Brand className='fw-bold ms-4'>United 01</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2t my-lg-0 fw-bold appbar-navs"
            navbarScroll
          >
            <Box className='file-dropdown'>
              <div className='navber-icons'>
                <Nav.Link className='mt-1 d-flex'>
                <FileCopyOutlinedIcon/>
                <NavDropdown id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>
              </div>
              <p>File</p>
            </Box>
            <Box className='file-dropdown'>
              <div className='navber-icons'>
                <Nav.Link href="#action1"><SaveOutlinedIcon/></Nav.Link>
              </div>
              <p>Save</p>
            </Box>
            <Box className='file-dropdown'>
              <div className="navber-icons">
                <Nav.Link href="#action1"><UndoIcon/></Nav.Link>
              </div>
              <p>Undo</p>
            </Box>
            <Box className='file-dropdown'>
              <div className='navber-icons'>
                <Nav.Link href="#action1"><RedoIcon/></Nav.Link>
              </div>
              <p>Redo</p>
            </Box>
            <Box className='pe-3 file-dropdown navs-border'>
              <div className="navber-icons">
                <Nav.Link className='mt-2 d-flex'>
                <DeleteOutlineIcon/>
                <NavDropdown id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>
              </div>
              <p>Clear </p>
            </Box>
              <div className='hr-border'></div>
             <Box className='file-dropdown'>
              <div className="navber-icons">
                <Nav.Link className='d-flex'>
                <HomeRepairServiceIcon/>
                <NavDropdown id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                  < NavDropdown.Item href="#action5">
                      Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>
              </div>
              <p>Toolkit</p>
            </Box>
            <Box className='mt-2 file-dropdown'>
             <div className="navber-icons">
               <Nav.Link href="#action1"><LivingOutlinedIcon/></Nav.Link>
             </div>
              <p>Furniture <br /> Plan</p>
            </Box>
            <Box className='pe-4 file-dropdown navs-border'>
              <div className="navber-icons">
                <Nav.Link className='mt-1 d-flex'>
                <FlashOnIcon/>
                <NavDropdown id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>
              </div>
              <p> AI Templetes </p>
            </Box>
            <div className='hr-border'></div>
             <Box className='file-dropdown'>
             <div className="navber-icons">
              <Nav.Link href="#action1"><AcUnitOutlinedIcon/></Nav.Link>
             </div>
            <p>Render</p>
            </Box>
            <Box className='file-dropdown'>
              <div className="navber-icons">
                <Nav.Link href="#action1"><PhotoOutlinedIcon/></Nav.Link>
              </div>
              <p>Gallery</p>
            </Box>
            <Box className='file-dropdown'>
             <div className="navber-icons">
               <Nav.Link className='d-flex'>
                <FileCopyIcon/>
                <NavDropdown id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>
             </div>
              <p>Drawing</p>
            </Box>
          </Nav>
          <Box className='text-center profile-img'>
              <img src={Img} alt='img' className='rounded-circle'/>
              <i> &nbsp;&nbsp;<a className='text-dark' href="#1"><KeyboardArrowDownIcon/></a></i>
          </Box>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;