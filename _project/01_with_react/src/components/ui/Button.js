import React from 'react'
import '../../style/Button.css'
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
        backgroundColor: background || colors.primary,
        color: color || colors.white,
      }}
    >
      <span>{children}</span>
    </button>
  )
}

export default Button
