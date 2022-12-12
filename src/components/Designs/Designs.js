import React from 'react';
// import './Design.css';


import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Link } from "react-router-dom"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import img from '../../assets/imgs/border-left.png'
import img1 from '../../assets/imgs/equal.PNG'
import img2 from '../../assets/imgs/dots.PNG'

import Card from '../Card/Card'
import NativePickers from "../Card/DatePicker"
import CreateIcon from '@material-ui/icons/Create'
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import FilterListIcon from '@material-ui/icons/FilterList';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AddIcon from '@material-ui/icons/Add';
function Design() {
    const [age, setAge] = React.useState('');
    return (
        <div className='Design'>
            <Box className="Design-Head">

                <Grid items lg={6} md={6} sm={12} xs={6}>
                    <Box className="design-header">
                        <h1 className='design-head'>Someone's Designs</h1>
                        <Box className='design-icons'>
                            <CreateIcon className='Mode-icon' />
                            <InsertLinkIcon className='Link-icon' />
                        </Box>
                    </Box>
                </Grid>

                <Box className='design-filters'>
                    <Box className='filters'>
                        <Box className='filter-Local'>
                            <FormControl className='formcontrol'>
                                <InputLabel id="demo-simple-select-label" className='Filter-Label'> <FilterListIcon className='icon33' />  Filter</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box className='filter-date'>
                            <NativePickers />
                        </Box>
                    </Box>
                    <Box className='button-all'>
                        <Stack spacing={2} direction="row">
                            <Button variant="outlined" className='ShareBtn'> <SupervisorAccountIcon className="icon21" /><span className="buttonText">Share</span></Button>
                            <Box className='border-left'>
                                <img src={img} alt="" />
                                <img src={img1} alt="" className='border-leftt' />
                                <img src={img2} alt="" className='dots-img' />
                            </Box>
                        </Stack>
                    </Box>
                </Box>
                <Box className='parent-card'>
                    <Link to="/Login">
                        <Box className='card-add'>
                            <a sx={{ color: "black" }}> <AddIcon className='icon-add' />
                                <h2 className='design-text'>Create New Design</h2>
                            </a>
                        </Box></Link>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Box>
            </Box>
        </div>
    );
}

export default Design;
