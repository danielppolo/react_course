import React from 'react'
import '../../style/Card.scss'
import PropTypes from 'prop-types'
import colors from '../../utils/colors'

function Card(props) {
  const {
    radius,
    color,
    children,
    padding,
    style,
  } = props

  return (
    <div
      className="Card"
      style={{
        padding: padding || 16,
        borderRadius: radius || 4,
        backgroundColor: color || 'white',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  radius: PropTypes.number,
  color: PropTypes.string,
  padding: PropTypes.number,
  style: PropTypes.object,
}

Card.defaultProps = {
  radius: 14,
  color: colors.white,
  padding: 16,
  style: {},
}

export default Card
