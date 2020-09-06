import React from "react"
import "./button.scss"

const Button = (props) => {  
  return (
    <button 
      type="submit" 
      value={props.value} 
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.value}
    </button>
  )
}

export default Button
