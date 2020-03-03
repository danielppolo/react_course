import React from 'react'
import '../../style/Button.scss'
import PropTypes from 'prop-types'
import colors from '../../utils/colors'

function Button(props) {
  const {
    background,
    color,
    children,
    type,
    ...otherProps
  } = props

  return (
    <button
      type={type}
      className="Button"
      style={{
        backgroundColor: background,
        color,
      }}
      {...otherProps}
    >
      <span>{children}</span>
    </button>
  )
}

Button.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
}

Button.defaultProps = {
  background: colors.primary,
  color: colors.white,
  type: 'button',
}

export default Button
