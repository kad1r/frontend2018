import React from 'react'
import classNames from 'classnames'
import './header.scss'

const Container = props => {
  const { between, start } = props
  const titleClassNames = classNames({
    'content-header': true,
    'd-flex': true,
    'justify-content-between': between,
    'justify-content-start': start,
    'align-items-centre': true,
  })

  return <div className={titleClassNames}>{props.children}</div>
}

export default Container
