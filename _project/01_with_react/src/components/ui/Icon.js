import MaterialIcon from '@material-ui/core/Icon'
import React from 'react'

function Icon(props) {
  const { name } = props
  return <MaterialIcon {...props}>{name}</MaterialIcon>
}

export default Icon
