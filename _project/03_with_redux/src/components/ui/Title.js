import React from 'react'
import PropTypes from 'prop-types'
import colors from '../../utils/colors'
import '../../style/Title.scss'

function Title(props) {
  const { children, color } = props
  return (
    <p
      className="Title"
      style={{ color }}
    >
      {children}
    </p>
  )
}

Title.propTypes = {
  color: PropTypes.string,
}

Title.defaultProps = {
  color: colors.black,
}


export default Title
