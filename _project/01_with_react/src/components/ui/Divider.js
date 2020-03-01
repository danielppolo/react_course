import React from 'react'
import '../../style/Divider.scss'

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
        borderBottom: `${stroke || 1}px solid ${color || '#DDD'}`,
        margin: `${verticalMargin} 0`,
      }}
    />
  )
}

export default Divider
