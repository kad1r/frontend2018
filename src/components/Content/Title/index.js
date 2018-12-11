import React from 'react'
import classNames from 'classnames'
import './title.scss'

const Title = props => {
  const { type, uppercase = false, info } = props

  const titleClassNames = classNames({
    'title-common': uppercase,
    [`title-${type}`]: true,
    'text-uppercase': uppercase,
  })

  const titleInfoClassNames = classNames({
    'title-common': true,
    'title-info': info,
  })

  return (
    <div className={titleClassNames}>
      {props.text}
      <span className={titleInfoClassNames}>{info}</span>
    </div>
  )
}

export default Title
