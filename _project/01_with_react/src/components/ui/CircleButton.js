import React from 'react'
import '../../style/CircleButton.scss'
import colors from '../../utils/colors'

function CircleButton(props) {
  const {
    color,
    children,
  } = props

  return (
    <div
      className="CircleButton"
      style={{
        backgroundColor: color || colors.primary,
      }}
    >
      {children}
    </div>
  )
}

export default CircleButton
