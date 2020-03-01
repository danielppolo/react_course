import React from 'react'
import '../../style/Divider.scss'
import PropTypes from 'prop-types'
import colors from '../../utils/colors'

function Divider(props) {
  const {
    color,
    stroke,
    verticalMargin,
  } = props

  return (
    <div
      className="Divider"
      style={{
        borderBottom: `${stroke}px solid ${color}`,
        margin: `${verticalMargin}px 0`,
      }}
    />
  )
}

Divider.propTypes = {
  color: PropTypes.string,
  stroke: PropTypes.number,
  verticalMargin: PropTypes.number,
}

Divider.defaultProps = {
  color: colors.gray,
  stroke: 1,
  verticalMargin: 0,
}

export default Divider
