import React from "react"
import Button from "../buttons/button"
import "./donation-form.scss"

const DonationForm = (props) => {

  const handleChange = (event) => {
    props.onChange(event.target.value)
  }

  const handleSubmit = (event) => {
    props.onSubmit(props.value)
    event.preventDefault()
  }

  return (
    <form>
      <div className="input-button-row">
        <div className="number-input-wrapper">
          <input
            type="number"
            min="5"
            value={props.value}
            onChange={handleChange}
            className={ props.mockError ? 'error' : '' }
          />
        </div>
        
        <Button value="Give Now" onClick={handleSubmit} disabled={ props.mockError} />
      </div>
      
    </form>
  )
}

export default DonationForm
