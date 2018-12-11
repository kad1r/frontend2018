import React from 'react'
import classNames from 'classnames'

import './checkbox.scss'
import Icon from '../Icon'

const Checkbox = props => {
  const { checked, disabled = false, value, id, onChangeCheckboxState } = props

  const checkboxClassNames = classNames({
    checkbox: true,
    'checkbox-checked': checked,
    'checkbox-disabled': disabled,
  })
  return (
    <div className={checkboxClassNames}>
      <label>
        <input
          type="checkbox"
          value={value}
          id={id}
          checked={checked}
          disabled={false}
          onChange={onChangeCheckboxState}
        />
        <div className="d-flex justify-content-center align-items-center">
          <div className="checkbox-area">
            <div className="checkbox-area-icon">
              <Icon name="checkbox-icon" />
            </div>
          </div>
          <div className="checkbox-label">{value}</div>
        </div>
      </label>
    </div>
  )
}

export default Checkbox
