import React from 'react'
import '../../style/TextField.scss'
import PropTypes from 'prop-types'
import colors from '../../utils/colors'

function TextField(props) {
  const {
    label,
    value,
    color,
  } = props

  return (
    <div className="TextField">
      <p>{label}</p>
      <input
        type="text"
        value={value}
        style={{
          caretColor: color,
        }}
        {...props}
      />
    </div>
  )
}

TextField.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
}

TextField.defaultProps = {
  color: colors.primary,
  label: '',
}


export default TextField
