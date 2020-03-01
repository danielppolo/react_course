import React from 'react'
import '../../style/Card.scss'

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

export default Card
