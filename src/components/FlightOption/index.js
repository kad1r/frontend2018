import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { places } from '../../constants'
import './flight-option.scss'

const getOptionPlace = code => {
  return places[code]
}

const getOptionText = optionData => {
  let item = optionData[Object.keys(optionData)]

  if (optionData.flightFromPlace || optionData.flightToPlace) {
    return (
      <React.Fragment>
        {getOptionPlace(item)}
        <span>({item})</span>
      </React.Fragment>
    )
  } else if (optionData.flightFromDate || optionData.flightToDate) {
    return <div>{optionData[Object.keys(optionData)]}</div>
  } else if (optionData.personNumber) {
    return <div>{optionData[Object.keys(optionData)]}</div>
  }
}

const getIcon = optionData => {
  return require('../../assets/images/icons/inbox.png')
}

const FlightOption = props => {
  const { className } = props
  const flightOptionBox = classNames({
    'flight-option-box': true,
    [props.size]: true,
    [className]: true,
  })

  return (
    <div className={flightOptionBox}>
      <div className="flight-option-inner d-flex justify-content-start align-items-center">
        <img className="flight-option-icon" src={getIcon()} alt="icon" />
        <div className="flight-option-text">
          {getOptionText(props.optionData)}
        </div>
      </div>
    </div>
  )
}

FlightOption.propTypes = {
  name: PropTypes.string,
}

export default FlightOption
