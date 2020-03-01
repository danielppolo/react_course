import MaterialIcon from '@material-ui/core/Icon'
import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { name } = props
  return <MaterialIcon {...props}>{name}</MaterialIcon>
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
