import React from 'react'
import './Tabs.css'
function TabValue(props) {
  return (
    <div className='bg'>
        <div className='service'>
           <div className='layer-icon'>
              <p>{props.text}</p>
              <p className='subtext'>{props.subtext}</p>
          </div>
          <div className='layer-icons'>
              <i>{props.eyeicon}</i>
              <i>{props.lockicon}</i>
          </div>`
        </div>
        <i><hr className='hr-icon'/></i>
    </div>
  )
}

export default TabValue;