import React from 'react'
import classNames from 'classnames'
import './action.scss'

const Title = props => {
  const { type, underline = false } = props

  const actionClassNames = classNames({
    'action-common': true,
    [`action-${type}`]: true,
    'text-underline': underline,
  })
  return <div className={actionClassNames}>{props.children}</div>
}

export default Title
