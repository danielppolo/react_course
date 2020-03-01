import React from 'react'
import '../../style/Button.scss'
import PropTypes from 'prop-types'
import colors from '../../utils/colors'

function Button(props) {
  const {
    background,
    color,
    children,
  } = props

  return (
    <button
      type="button"
      className="Button"
      style={{
        backgroundColor: background,
        color,
      }}
    >
      <span>{children}</span>
    </button>
  )
}

Button.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
}

Button.defaultProps = {
  background: colors.primary,
  color: colors.white,
}

export default Button
