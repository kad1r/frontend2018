import React from 'react'
import classNames from 'classnames'

const Row = props => {
  const { children, className } = props

  const rowClassNames = classNames({
    [className]: className,
    'table-data': true,
    'd-flex': true,
    'align-items-center': true,
    row: true,
  })

  return <div className={rowClassNames}>{children}</div>
}

export default Row
