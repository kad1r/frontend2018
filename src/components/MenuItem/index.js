import React from 'react'
import './menu-item.scss'

const MenuItem = props => {
  return (
    <div className="menu-item d-flex justify-content-between align-items-center cursor-pointer">
      <img className="menu-item-icon" src={props.icon} alt={props.title} />
      <div className="menu-text">{props.title}</div>
    </div>
  )
}

export default MenuItem
