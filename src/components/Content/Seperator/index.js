import React from 'react'
import './seperator.scss'

const Separator = props => {
  const { color } = props
  return (
    <hr
      className="content-separator"
      style={{
        borderBottomColor: color,
      }}
    />
  )
}

export default Separator
