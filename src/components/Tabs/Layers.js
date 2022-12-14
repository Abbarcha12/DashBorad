import React from 'react'
import TabValue from './TabValue';

// import icons
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import LockOpenIcon from '@material-ui/icons/LockOpen';

function Layers() {
  return (
    <>
        <TabValue
            text='Layer 1'
          eyeicon={<RemoveRedEyeIcon />}
          lockicon={<LockOpenIcon />}
            subtext='Sublayer 1'
        />
          <TabValue
            text='Layer 1'
          eyeicon={<RemoveRedEyeIcon />}
          lockicon={<LockOpenIcon />}
            subtext='Sublayer 1'
        />
          <TabValue
            text='Layer 1'
          eyeicon={<RemoveRedEyeIcon />}
          lockicon={<LockOpenIcon />}
            subtext='Sublayer 1'
        />
          <TabValue
            text='Layer 1'
          eyeicon={<RemoveRedEyeIcon />}
          lockicon={<LockOpenIcon />}
            subtext='Sublayer 1'
        />
          <TabValue
            text='Layer 1'
          eyeicon={<RemoveRedEyeIcon />}
          lockicon={<LockOpenIcon />}
            subtext='Sublayer 1'
        />
    </>
  )
}

export default Layers