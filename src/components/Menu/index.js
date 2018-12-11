import React from 'react'
import MenuItem from '../MenuItem'

const Menu = props => {
  return (
    <div className="d-flex justify-content-between">
      {props.data.map(menuItem => {
        return <MenuItem title={menuItem.title} icon={menuItem.icon} />
      })}
    </div>
  )
}

export default Menu
