import React from 'react'
import "./overview.css"
import ZoomButton from "../Overview/ZoomButton"
import RotateButton from "../Overview/RotateButton"

// import images
import overviewImg from "../../assets/imgs/22.png"

function Overview() {
  return (
    <>
      <div className='overview'>
        <h3 className='overview_title'>Overview</h3>
        <img src={overviewImg} alt="overviewImg" />
      </div>
      <div className='zoomRotate'>
        <div className="zoom">
          <ZoomButton />
        </div>
        <div className="zoom">
          <RotateButton />
        </div>
      </div>
    </>
  )
}

export default Overview