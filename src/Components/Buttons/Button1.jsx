import React from 'react'
import '../../CSS/Button1.css'
export const Button1 = (props) => {
  return (
    <button onClick={props.onClick} className={`btn ${props.className}`}>
      {props.value}
    </button>
  )
}
