import React from 'react'
import { TextField } from '@mui/material'

import "./Input.css"


export default function Input(props) {

 
  return (
    <div className='inputField'> 
        <TextField 
        id="outlined" 
        label={props.label} 
        variant="outlined"
        size="small"
        sx={{
          width: 459, 
          height:50,
        }}
        />
    </div>
  )
};