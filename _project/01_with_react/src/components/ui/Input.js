import React from 'react'
import PropTypes from 'prop-types'
import TextField from './TextField'
import DateField from './DateField'

function Input(props) {
  const { type } = props
  switch (type) {
    case 'text': return <TextField {...props} />
    case 'date': return <DateField {...props} />
    default: break
  }
  return <TextField {...props} />
}

Input.propTypes = {
  type: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
}

export default Input
