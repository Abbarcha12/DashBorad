import React from 'react'
import "./btn.css"
function Button(props) {
  return (
    <div>
         <button className={props.class} variant="contained">{props.btn}</button>
    </div>
  )
}

export default Button