import React from 'react'
import "./Minicard.css"

import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

function MiniCard() {
  return (
    <div>
        <div className='Notes'>
        <div className='notesImg'>
            <div className='imgBgShadow'>
            <EmojiObjectsIcon />
            </div>
        </div>
        <div className='notesText'>
          <h2>Notes</h2>
          <h5>We don’t have any notice for you, till then you can share your thoughts with your peers.</h5>
          <button className="btn-light">Create Notes</button>
        </div>
      </div>
    </div>
  )
}

export default MiniCard