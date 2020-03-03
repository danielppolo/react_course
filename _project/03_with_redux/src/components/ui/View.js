import React from 'react'
import '../../style/View.scss'
import PropTypes from 'prop-types'
import colors from '../../utils/colors'

function View(props) {
  const { children, background, margin } = props
  return (
    <div
      className="View"
      style={{
        backgroundColor: background,
        padding: margin,
      }}
    >
      {children}
    </div>
  )
}

View.propTypes = {
  background: PropTypes.string,
  margin: PropTypes.number,
}

View.defaultProps = {
  background: colors.lightGray,
  margin: 16,
}

export default View
