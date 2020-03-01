import React from 'react'
import '../../style/CircleButton.scss'
import PropTypes from 'prop-types'
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
        backgroundColor: color,
      }}
    >
      {children}
    </div>
  )
}

CircleButton.propTypes = {
  color: PropTypes.string,
}

CircleButton.defaultProps = {
  color: colors.primary,
}

export default CircleButton
