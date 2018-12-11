import React from 'react'
import classNames from 'classnames'
import './dropdown.scss'

function getMenuItems(data, onSelect) {
  return data.map(menuItem => {
    return (
      <a
        className="dropdown-item cursor-pointer"
        id={menuItem.id}
        onClick={onSelect}
      >
        {menuItem.text}
      </a>
    )
  })
}

const Dropdown = props => {
  const { type, active, data, onClick, visible, onSelect } = props

  const menuClassNames = classNames({
    'dropdown-menu': true,
    'd-block': visible,
    [`dropdown-${type}`]: type,
  })

  const dropdownClassNames = classNames({
    'xm-xs-flex-fill': type === 'filter',
    dropdown: true,
  })
  return (
    <div className={dropdownClassNames}>
      <button
        className="filter-dropdown dropdown-toggle unselectable"
        type="button"
        onClick={onClick}
      >
        <span className="filter-button-text">{active.text}</span>
      </button>
      <div className={menuClassNames}>{getMenuItems(data, onSelect)}</div>
    </div>
  )
}

export default Dropdown
