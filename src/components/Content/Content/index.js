import React from 'react'
import classNames from 'classnames'
import './content.scss'

const Content = props => {
  const { className } = props

  const contentClassNames = classNames(className, {
    content: true,
  })

  return <div className={contentClassNames}>{props.children}</div>
}

export default Content
