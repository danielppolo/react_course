import React from 'react'
import '../../style/CircleButton.scss'
import PropTypes from 'prop-types'
import colors from '../../utils/colors'

function CircleButton(props) {
  const {
    color,
    children,
    size,
    flat,
    style,
    onClick,
  } = props

  return (
    <div
      onClick={onClick}
      className="CircleButton"
      style={{
        backgroundColor: color,
        height: size,
        width: size,
        borderRadius: size / 2,
        boxShadow: flat && 'none',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

CircleButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  flat: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func,
}

CircleButton.defaultProps = {
  color: colors.primary,
  size: 60,
  flat: false,
  style: {},
  onClick: null,
}

export default CircleButton
