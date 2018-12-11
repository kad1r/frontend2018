import React from 'react'
import './range.scss'

function getBackgroundColor(min, max, value) {
  let range = (value - min) / (max - min)
  let bgColor = {
    backgroundImage: `-webkit-gradient(linear, left top, right top, color-stop(${range} , #F12A15), color-stop(${range}, #D8D8D8))`,
  }
  return bgColor
}

const RangeSlider = props => {
  const { min, max, value, onRangeChange } = props

  return (
    <input
      type="range"
      style={getBackgroundColor(min, max, value)}
      min={min}
      max={max}
      value={value}
      onChange={onRangeChange}
    />
  )
}

export default RangeSlider
