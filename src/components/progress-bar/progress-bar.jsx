import React from "react"
import PropTypes from "prop-types"
import Tooltip from "../tooltip/tooltip"
import "./progress-bar.scss"

const ProgressBar = (props) => {
  return (
    <div className="pb-container">
      <progress value={props.value} max={props.max} data-tip={props.dataTip} />
      <Tooltip />
    </div>
  )
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  tooltipData: PropTypes.any
}

export default ProgressBar
