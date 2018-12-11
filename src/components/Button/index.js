import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './button.scss'

const Button = React.forwardRef((props, ref) => {
  const {
    kind,
    disabled = false,
    type = 'button',
    children,
    style,
    className,
    isLoading,
    size,
    ...others
  } = props
  const buttonClassNames = classNames(className, {
    'button-common': true,
    [`button-${kind}`]: true,
    [`button-${size}`]: size,
    [`button-${kind}-disabled`]: disabled,
    [`button-${kind}-loading`]: isLoading,
  })
  return (
    <button
      ref={ref}
      className={buttonClassNames}
      disabled={isLoading ? true : disabled}
      style={style}
      type={type}
      {...others}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  )
})

Button.propTypes = {
  kind: PropTypes.oneOf(['red']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  type: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
}

Button.defaultProps = {
  kind: 'red',
}

export default Button
