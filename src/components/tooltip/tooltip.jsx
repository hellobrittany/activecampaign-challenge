import React from 'react'
import ReactTooltip from 'react-tooltip'

const Tooltip = () => {

  return (
    <ReactTooltip  
      place="top"
      type="info"
      effect="float"
      className="pb-tooltip"
      textColor="#5A74C9"
      backgroundColor="#E3EAFC"
    ></ReactTooltip>
  )
}


export default Tooltip