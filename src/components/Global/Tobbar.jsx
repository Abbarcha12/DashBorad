import React from 'react'
import './Topbar.css'
import Designs from '../Designs/Designs'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import MessageIcon from '@material-ui/icons/Message'
const Topbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='wrapper'>
          <div className='search'>
            <input type='text' placeholder='Search...' />
            <SearchIcon />
          </div>
          <div className='items'>
            <div className='item'>
              <CalendarTodayIcon className='icon' />
            </div>
            <div className='item'>
              <MessageIcon className='icon' />
            </div>
            <div className='item'>
              <NotificationsIcon className='icon' />
            </div>
            <div className='item'>
              Emilia Erikson <br />
              ABCD, Turkey
            </div>
            <div className='item'>
              <AccountCircleIcon className='iconOne' />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Designs />
      </div>
    </>
  )
}

export default Topbar
