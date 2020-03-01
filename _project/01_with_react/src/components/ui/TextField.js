import React from 'react'
import '../../style/TextField.scss'
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
          caretColor: color || colors.primary,
        }}
      />
    </div>
  )
}

export default TextField
