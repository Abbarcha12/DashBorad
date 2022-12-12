import React from 'react'
import Topbar from '../../components/Global/Tobbar'
import Sidebar from '../../components/Global/Sidebar'
import { Box } from '@material-ui/core'
import './dashborad.css'
const Dashborad = () => {
  return (
    <Box className='Main'>
      <div className='Sidebar'>
        <Sidebar />
      </div>
      <div className='Sidbar'>
        <Topbar />
      </div>
    </Box>
  )
}

export default Dashborad
