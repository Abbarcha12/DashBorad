import * as React from 'react';
// import css
import './appbar.css';

// material ui component
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { List, ListItem, ListItemText } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { styled, alpha } from '@mui/material/styles';

// icons
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import DeleteIcon from '@material-ui/icons/Delete';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import CollectionsOutlinedIcon from '@material-ui/icons/CollectionsOutlined';

import Img from '../../assets/imgs/profile.png';
import Plan from './../../assets/imgs/plan.png';
import Undo from './../../assets/imgs/undo.png';
import Redo from './../../assets/imgs/redo.png';
import Render from './../../assets/imgs/render.png';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        marginTop: theme.spacing(1),
        minWidth: 100,
        color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '2px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" className="my-appbar" style={{ backgroundColor: '#F2F2F2', borderBottom: "1px solid #292D32", color: 'black', zIndex: "10", height: "4rem" }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters className="Appbarss">
                    <Box>
                        <Typography
                            className="head"
                            variant="h6"
                            sx={{
                                display: { md: 'flex' },
                                fontFamily: 'Arial',
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'inherit',
                            }}
                        >
                            United 01
                        </Typography>
                    </Box>
                    <Box className="iconstyle">
                        <List>
                            <ListItem style={{ display: 'flex', textAlign: 'center' }} >
                                <div>
                                    <ListItemText
                                        id="demo-customized-button"
                                        onClick={handleClick}
                                    >
                                        <FileCopyOutlinedIcon  />
                                        <KeyboardArrowDownIcon className="arrowDown" />
                                        <p className="filePara">File</p>
                                    </ListItemText>
                                    <StyledMenu
                                        id="demo-customized-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'demo-customized-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Edit
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Duplicate
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Archive
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            More
                                        </MenuItem>
                                    </StyledMenu>
                                </div>
                                <ListItemText>
                                    <SaveOutlinedIcon />
                                    <p>Save</p>
                                </ListItemText>
                                <ListItemText>
                                    <img width={20} src={Undo} alt='icn' />
                                    <p className='mrgnTop'>Undo</p>
                                </ListItemText>
                                <ListItemText>
                                    <img width={20} src={Redo} alt='icn' />
                                    <p className='mrgnTop'>Redo</p>
                                </ListItemText>
                                <div>
                                    <ListItemText
                                        id="demo-customized-button"
                                        onClick={handleClick}
                                    >
                                        <DeleteIcon />
                                        <KeyboardArrowDownIcon className="arrowDown" />
                                        <p>Delete</p>
                                    </ListItemText>
                                    <StyledMenu
                                        id="demo-customized-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'demo-customized-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Edit
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Duplicate
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Archive
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            More
                                        </MenuItem>
                                    </StyledMenu>
                                </div>
                                <ListItemText style={{ borderRight: '2px solid #D2D2D2', height: '50px' }}></ListItemText>
                                <div>
                                    <ListItemText
                                        id="demo-customized-button"
                                        onClick={handleClick}
                                    >
                                        <BusinessCenterIcon />
                                        <KeyboardArrowDownIcon className="arrowDown" />
                                        <p>Toolkit</p>
                                    </ListItemText>
                                    <StyledMenu
                                        id="demo-customized-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'demo-customized-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Edit
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Duplicate
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Archive
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            More
                                        </MenuItem>
                                    </StyledMenu>
                                </div>
                                <ListItemText >
                                    <img width={20} src={Plan} alt='icn' />
                                    <p className='txtCenter'>Furniture <br /> Plan</p>
                                </ListItemText>
                                <div>
                                    <ListItemText
                                        id="demo-customized-button"
                                        onClick={handleClick}
                                    >
                                        <FlashOnIcon />
                                        <KeyboardArrowDownIcon className="arrowDown" />
                                        <p>AI Templetes</p>
                                    </ListItemText>
                                    <StyledMenu
                                        id="demo-customized-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'demo-customized-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Edit
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Duplicate
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Archive
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            More
                                        </MenuItem>
                                    </StyledMenu>
                                </div>
                                <ListItemText style={{ borderRight: '2px solid #D2D2D2', height: '50px' }}></ListItemText>
                                <ListItemText>
                                    <img width={20} src={Render} alt='icn' />
                                    <p>Render</p>
                                </ListItemText>
                                <ListItemText>
                                    <CollectionsOutlinedIcon />
                                    <p>Gallery</p>
                                </ListItemText>
                                <div>
                                    <ListItemText
                                        id="demo-customized-button"
                                        onClick={handleClick}
                                    >
                                        <FileCopyOutlinedIcon />
                                        <KeyboardArrowDownIcon className="arrowDown" />
                                        <p>Drawings</p>
                                    </ListItemText>
                                    <StyledMenu
                                        id="demo-customized-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'demo-customized-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Edit
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Duplicate
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Archive
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            More
                                        </MenuItem>
                                    </StyledMenu>
                                </div>
                            </ListItem>
                        </List>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton id="demo-customized-profile" onClick={handleClick} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src={Img} />
                            <KeyboardArrowDownIcon className="arrowDown" />
                        </IconButton>
                        <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                                'aria-labelledby': 'demo-customized-profile',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} disableRipple>
                                Account
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                Dashboard
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                Setting
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                More
                            </MenuItem>
                        </StyledMenu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;