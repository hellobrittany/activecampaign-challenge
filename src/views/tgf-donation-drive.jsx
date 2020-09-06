import React, { useState } from "react"
import Card from "../components/cards/card"
import ProgressBar from "../components/progress-bar/progress-bar"
import DonationForm from "../components/forms/donation-form"
import "./tgf-donation-drive.scss"

const DonationDrive = () => {
  const fundraiserGoal = 5000
  const [value, setValue] = useState(5)
  const [totalDonations, setTotalDonations] = useState(0)
  const [dollarsRemaining, setDollarsRemaining] = useState(fundraiserGoal)
  const [pbTooltipText, setPbTooltipText] = useState('$5000 still needed to fund this project')

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  const handleSubmit = () => {
    setDollarsRemaining(dollarsRemaining - value)
    setTotalDonations(totalDonations + value)

    // TODO: add a donor counter
    // TODO: refactor tooltip text to update after first submit

    if (totalDonations < fundraiserGoal) {
      setPbTooltipText('$' + dollarsRemaining + ' still needed to fund this project.')
    } else {
      setPbTooltipText('Thank you! We have exceeded our goal by $' + Math.floor(totalDonations - fundraiserGoal) + '!')
    }
  }

  return (
    <Card>
      <ProgressBar value={totalDonations} max={fundraiserGoal} dataTip={pbTooltipText}></ProgressBar>

      <div className="container">
        <h2 className="card-header">
          Only 4 more days to fund this project
        </h2>

        <div className="card-content">

          {/* TODO: Create dynamic text for on submit, joining other donors */}
          <div>
            Be the first to donate to this cause!
          </div>
        
          <div className="input-button-row">
            <DonationForm onChange={handleChange} onSubmit={handleSubmit} value={value}></DonationForm>
          </div> 
        </div>       
      </div>
    </Card>
  )
}

export default DonationDrive