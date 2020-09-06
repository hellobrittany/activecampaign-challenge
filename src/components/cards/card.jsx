import React from "react"
import "./card.scss"

const Card = ({ children }) => {
  return (
    <div className ="card">
      {children}
    </div>
  )
}

export default Card