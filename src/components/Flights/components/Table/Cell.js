import React from 'react'
import classNames from 'classnames'

const Cell = props => {
  const { children, className, mobileCol, desktopCol, content } = props

  const cellClassNames = classNames({
    [className]: true,
    [`col-md-${desktopCol}`]: desktopCol,
    [`col-${mobileCol}`]: mobileCol,
    'cell-content': content,
  })

  return <div className={cellClassNames}>{children}</div>
}

export default Cell
